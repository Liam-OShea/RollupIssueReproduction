DESCRIPTION OF ISSUE
@rollup/stream package throws an error which indicates the options object has been supplied.
The options object HAS been supplied as per the same manner as the documentation indicates.

Documentation: https://www.npmjs.com/package/@rollup/stream#:~:text=to%20%40rollup/stream.-,Usage%20with%20Gulp,-Using%20Gulp%20requires



INSTRUCTIONS
- npm install
- type gulp in command line, press enter to run gulpfile
    - Make sure gulp CLI is globally installed. Apologies, no way around this because the problem is
    with the gulp package.

EXPECTED RESULTS
- gulp has successfully created a bundled main.js which imports a string from foo.js

ACTUAL RESULTS
Error: You must supply an options object
    at getOutputOptionsAndPluginDriver (C:\Users\liamo\Documents\Work\Proof of Concept\RollupStreamIssue\node_modules\rollup\dist\shared\rollup.js:23604:15)
    at handleGenerateWrite (C:\Users\liamo\Documents\Work\Proof of Concept\RollupStreamIssue\node_modules\rollup\dist\shared\rollup.js:23587:74)
    at Object.generate (C:\Users\liamo\Documents\Work\Proof of Concept\RollupStreamIssue\node_modules\rollup\dist\shared\rollup.js:23548:20)
    at build (C:\Users\liamo\Documents\Work\Proof of Concept\RollupStreamIssue\node_modules\@rollup\stream\dist\index.js:9:37)
