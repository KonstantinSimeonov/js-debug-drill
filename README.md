# Debugging drill

Each day contains a small program that needs debugging. Each program will contain at least one bug. A specification for the program will be available for each program in at least one of the following forms - `jsdoc`, `comments`, `readme` or `unit tests`.

## Goals
- Improve debugging skills
- Broaden your debug tool skillset (repl, runtime inspection, console methods like log, table, time)
- Practice decoding specifications in the forms of comments/readmes/tests
- Get better at decoding other people's code

## Usage

1. Clone or fork this repo
1. Run `npm i`
1. Create your own branch `git checkout -b fixes`
1. Fix the bugs in your branch - and write a quick explanation of what the bugs were in your commit message!
1. Run the tests for the respective day by using `npm test day-x/*.spec.js`. Make sure all the tests are passing.
1. (Optional) Introduce additional tests which cover even more cases!

## Table of contents
1. [Day 1 - map function over array](./day-1/map.js)
1. [Day 2 - find product of space-separated numbers](./day-2/product.js)
