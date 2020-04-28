const fs = require('fs')
const peg = require('pegjs')

const grammar = fs.readFileSync('./grammar.pegjs')
const parser = peg.generate(grammar.toString())

module.exports = ref => parser.parse(ref)
