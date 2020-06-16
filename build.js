const fs = require('fs');
const path = require('path');
const peg = require('pegjs');

const p = (...args) => path.join(__dirname, ...args);

const grammar = fs.readFileSync(p('grammar.pegjs')).toString();
const parser = peg.generate(grammar, {
    output: 'source',
    format: 'commonjs'
});

fs.writeFileSync(p('parser.js'), parser);
