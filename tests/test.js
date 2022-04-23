import { svcli } from "../svcli.mjs"
import assert from 'assert'
let results = svcli({
    file: 'tests/data/alpha.txt',
    type: 'Alpha'
})
assert(results[0].valid)
assert(!results[1].valid)
assert(!results[2].valid)
assert(results[3].valid)
console.log("Tests passed")