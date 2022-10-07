import {
  Legislation,
  Amendment,
  Vote,
} from '../types'
import { parse } from '../parser.js'

describe('Legislation', () => {
  let result: Legislation

  describe('Concurrent Resolution', () => {
    describe('House', () => {
      describe('with congress', () => {
        test.each([
          'hconres142-115',
          'H.Con.Res.142-115',
          'HCONRES.142-115'
        ])('%s', leg => {
          result = {
            id: 'hconres142',
            chamber: 'House',
            type: 'Concurrent Resolution',
            binding: false,
            number: 142,
            congress: 115
          }
          expect(parse(leg)).toEqual(result)
        })
      })

      describe('without congress', () => {
        test.each([
          'hconres142',
          'H.Con.Res.142',
          'HCONRES.142'
        ])('%s', leg => {
          result = {
            id: 'hconres142',
            chamber: 'House',
            type: 'Concurrent Resolution',
            binding: false,
            number: 142
          }
          expect(parse(leg)).toEqual(result)
        })
      })
    })
    describe('Senate', () => {
      test.each([
        'sconres32-116',
        'S.Con.Res.32-116',
        'SCONRES32-116'
      ])('%s', leg => {
        result = {
        id: 'sconres32',
        chamber: 'Senate',
        type: 'Concurrent Resolution',
        binding: false,
        number: 32,
        congress: 116
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })

  describe('Joint Resolution', () => {
    describe('House', () => {
      test.each([
        'hjres83-116',
        'H.J.Res.83-116',
        'HJRES.83-116'
      ])('%s', leg => {
        result = {
          id: 'hjres83',
          chamber: 'House',
          type: 'Joint Resolution',
          binding: false,
          number: 83,
          congress: 116
        }
        expect(parse(leg)).toEqual(result)
      })
    })

    describe('Senate', () => {
      test.each([
        'sjres52-115',
        'S.J.Res52-115',
        'SJRES52-115'
      ])('%s', leg => {
        result = {
          id: 'sjres52',
          chamber: 'Senate',
          type: 'Joint Resolution',
          binding: false,
          number: 52,
          congress: 115
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })

  describe('Simple Resolution', () => {
    describe('House', () => {
      test.each([
        'hres132-105',
        'H.Res.132-105',
        'H.RES132-105'
      ])('%s', leg => {
        result = {
          id: 'hres132',
          chamber: 'House',
          type: 'Simple Resolution',
          binding: false,
          number: 132,
          congress: 105
        }
        expect(parse(leg)).toEqual(result)
      })
    })

    describe('Senate', () => {
      test.each([
        'sres573-113',
        'S.Res.573-113',
        'SRES573-113'
      ])('%s', leg => {
        result = {
          id: 'sres573',
          chamber: 'Senate',
          type: 'Simple Resolution',
          binding: false,
          number: 573,
          congress: 113
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })

  describe('Bill', () => {
    describe('House', () => {
      test.each([
        'hr5543-116',
        'H.R.5543-116',
        'H.R5543-116'
      ])('%s', leg => {
        result = {
          id: 'hr5543',
          chamber: 'House',
          type: 'Bill',
          binding: true,
          number: 5543,
          congress: 116
        }
        expect(parse(leg)).toEqual(result)
      })
    })

    describe('Senate', () => {
      test.each([
        's893-113',
        'S.893-113',
        'S893-113'
      ])('%s', leg => {
        result = {
          id: 's893',
          chamber: 'Senate',
          type: 'Bill',
          binding: true,
          number: 893,
          congress: 113
        }
        expect(parse(leg)).toEqual(result)
      })
      test.each([
        's148-113',
        'S.148-113',
        'S148-113'
      ])('%s', leg => {
        result = {
          id: 's148',
          chamber: 'Senate',
          type: 'Bill',
          binding: true,
          number: 148,
          congress: 113
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })
})

describe('Amendments', () => {
  let result: Amendment

  describe('House', () => {
    describe('with congress', () => {
      test.each([
        'hamdt242-116',
        'H.Amdt.242-116',
        'HAMDT.242-116'
      ])('%s', leg => {
        result = {
          id: 'hamdt242',
          chamber: 'House',
          type: 'Amendment',
          number: 242,
          congress: 116
        }
        expect(parse(leg)).toEqual(result)
      })
    })

    describe('without congress', () => {
      test.each([
        'hamdt242',
        'H.Amdt.242',
        'HAMDT.242'
      ])('%s', leg => {
        result = {
          id: 'hamdt242',
          chamber: 'House',
          type: 'Amendment',
          number: 242
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })

  describe('Senate', () => {
    describe('with congress', () => {
      test.each([
        'samdt541-114',
        'S.Amdt.541-114',
        'SAMDT.541-114'
      ])('%s', leg => {
        result = {
          id: 'samdt541',
          chamber: 'Senate',
          type: 'Amendment',
          number: 541,
          congress: 114
        }
        expect(parse(leg)).toEqual(result)
      })
    })

    describe('without congress', () => {
      test.each([
        'samdt541',
        'S.Amdt.541',
        'SAMDT.541'
      ])('%s', leg => {
        result = {
          id: 'samdt541',
          chamber: 'Senate',
          type: 'Amendment',
          number: 541
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })
})

describe('Votes', () => {
  let result: Vote

  describe('House', () => {
    describe('with congress', () => {
      test.each([
        'h2.34-116',
        'H.2.34-116',
        'H2.34-116',
        'H.234-116',
        'h234-116'
      ])('%s', leg => {
        result = {
          id: '34',
          chamber: 'House',
          type: 'Vote',
          session: 2,
          congress: 116
        }
        expect(parse(leg)).toEqual(result)
      })
    })

    describe('without congress', () => {
      test.each([
        'h2.34',
        'H.2.34',
        'H2.34',
        'H.234',
        'h234'
      ])('%s', leg => {
        result = {
          id: '34',
          chamber: 'House',
          type: 'Vote',
          session: 2
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })

  describe('Senate', () => {
    describe('with congress', () => {
      test.each([
        's2.266-116',
        's2 266-116',
        'S.2.266-116',
        'S2.266-116',
        'S2 266-116'
      ])('%s', leg => {
        result = {
          id: '266',
          chamber: 'Senate',
          type: 'Vote',
          session: 2,
          congress: 116
        }
        expect(parse(leg)).toEqual(result)
      })
    })

    describe('without congress', () => {
      test.each([
        's2.266',
        'S.2.266',
        'S2.266'
      ])('%s', leg => {
        result = {
          id: '266',
          chamber: 'Senate',
          type: 'Vote',
          session: 2
        }
        expect(parse(leg)).toEqual(result)
      })
    })
  })
})
