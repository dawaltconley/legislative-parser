import {
  Resolution,
  Bill,
  Amendment,
  Vote,
  Id,
} from './types'

export function parse(legString: Id.Resolution): Resolution
export function parse(legString: Id.Bill): Bill
export function parse(legString: Id.Amendment): Amendment
export function parse(legString: Id.Vote): Vote
export function parse(legString: string): Resolution | Bill | Amendment | Vote
