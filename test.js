const assert = require('assert').strict
const parse = require('./index.js')

const tests = [
    {
        input: [
            'hconres142-115',
            'H.Con.Res.142-115',
            'HCONRES.142-115'
        ],
        output: {
            id: 'hconres142',
            chamber: 'House',
            type: 'Concurrent Resolution',
            binding: false,
            number: 142,
            congress: '115'
        }
    },
    {
        input: [
            'hjres83-116',
            'H.J.Res.83-116',
            'HJRES.83-116'
        ],
        output: {
            id: 'hjres83',
            chamber: 'House',
            type: 'Joint Resolution',
            binding: false,
            number: 83,
            congress: '116'
        }
    },
    {
        input: [ 
            'hr5543-116',
            'H.R.5543-116',
            'H.R5543-116'
        ],
        output: {
            id: 'hr5543',
            chamber: 'House',
            type: 'Bill',
            binding: true,
            number: 5543,
            congress: '116'
        }
    },
    {
        input: [ 
            'hres132-105',
            'H.Res.132-105',
            'H.RES132-105'
        ],
        output: {
            id: 'hres132',
            chamber: 'House',
            type: 'Simple Resolution',
            binding: false,
            number: 132,
            congress: '105'
        }
    },
    {
        input: [ 
            's893-113',
            'S.893-113',
            'S893-113'
        ],
        output: {
            id: 's893',
            chamber: 'Senate',
            type: 'Bill',
            binding: true,
            number: 893,
            congress: '113'
        }
    },
    {
        input: [ 
            'sconres32-116',
            'S.Con.Res.32-116',
            'SCONRES32-116'
        ],
        output: {
            id: 'sconres32',
            chamber: 'Senate',
            type: 'Concurrent Resolution',
            binding: false,
            number: 32,
            congress: '116'
        }
    },
    {
        input: [ 
            'sjres52-115',
            'S.J.Res52-115',
            'SJRES52-115'
        ],
        output: {
            id: 'sjres52',
            chamber: 'Senate',
            type: 'Joint Resolution',
            binding: false,
            number: 52,
            congress: '115'
        }
    },
    {
        input: [ 
            'sres573-113',
            'S.Res.573-113',
            'SRES573-113'
        ],
        output: {
            id: 'sres573',
            chamber: 'Senate',
            type: 'Simple Resolution',
            binding: false,
            number: 573,
            congress: '113'
        }
    },
    {
        input: [ 
            's2.266-116',
            'S.2.266-116',
            'S2.266-116'
        ],
        output: {
            id: '266',
            chamber: 'Senate',
            type: 'Vote',
            session: '2',
            congress: '116'
        }
    },
    {
        input: [ 
            'h2.34-116',
            'H.2.34-116',
            'H2.34-116'
        ],
        output: {
            id: '34',
            chamber: 'House',
            type: 'Vote',
            session: '2',
            congress: '116'
        }
    },
]

for (const test of tests) {
    for (const input of test.input) {
        assert.deepStrictEqual(parse(input), test.output)
    }
}

console.log('All tests passed.')
