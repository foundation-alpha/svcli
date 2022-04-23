import validator from 'validator'
import fs from 'fs'
import commandLineArgs from 'command-line-args';

const TypeIndex = 2;

export function svcli(cliArgs) {

    const cliDefinitions = [
        { name: 'type', alias: 't', type: String },
        { name: 'help', alias: 'h', type: Boolean },
        { name: 'strings', multiple: true, defaultOption: true },
        { name: 'file', alias: 'f', type: String }
    ];
    // Get the command line arguments
    const args = cliArgs ? cliArgs : commandLineArgs(cliDefinitions);

    // The validator function name is just the type prepended with 'is'. Eg: isUUID
    const funcName = `is${args.type}`;
    const fx = validator[funcName];

    // Make sure the function exists. If it doesn't, display an error with all of the valid types
    if (fx) {
        const strings = getStrings(args);
        const results = strings.map(str => ({
            value: str,
            valid: fx(str)
        }))
        return results
    }
    else {
        const errorMessage = createErrorMessage(args.type)
        throw (new Error(errorMessage))

    }
}

function getStrings(args) {
    // If one or more strings were provided on the command line, return those. Otherwise return strings from stdin
    if (args.strings) {
        return args.strings;
    }
    else { // Parse strings passed in from a file or stdin
        const file = args.file ? args.file : process.stdin.fd;
        const input = fs.readFileSync(file).toString();
        return input.split('\n');
    }
}

function createErrorMessage(type) {
    const fxRegEx = /is.*/;

    // Find all of the functions on validator that start with 'is' and display the name without 'is'
    const validTypes = Object.keys(validator)
        .filter(n => n.match(fxRegEx))
        .map(n => n.substring(TypeIndex));
    return `ERROR: type ${type} is invalid.
Type must be one of the following:

${validTypes.join(', ')}

For more information, see the validator documentaion on https://github.com/validatorjs/validator.js
`
}
