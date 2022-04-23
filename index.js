#! /usr/bin/env node
const RequiredMajor = 13
const RequiredMinor = 2
const nodeVersion = process.versions.node.split('.');
const major = nodeVersion[0]
const minor = nodeVersion[1]
// Make sure this version of node supports ES modules before importing
if (major < RequiredMajor || (major == RequiredMajor && minor < RequiredMinor)) {
    console.error("svcli requires node version 13.2 or greater")
    process.exit();
}
import { svcli } from './svcli.mjs';
try {
    const results = svcli();
    for (let r of results) {
        console.log(`${r.value}\t${r.valid ? 'TRUE' : 'FALSE'}`)
    }
}
catch (e) {
    // An error occurred, print the error message
    console.error(e.message)
}