const fs = require('fs')
const path = require('path')
const peg = require('pegjs')

const grammar = fs.readFileSync(path.join(__dirname, 'grammar.pegjs'))
const parser = peg.generate(grammar.toString())

module.exports = ref => parser.parse(ref)
