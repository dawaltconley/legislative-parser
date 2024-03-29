Item
  = item:( Vote / Legislation ) congress:( '-' Number )?
  {
    if (item.chamber === 's')
      item.chamber = 'Senate'
    else if (item.chamber === 'h')
      item.chamber = 'House'
    if (congress)
      item.congress = congress[1]
    return item
  }

Vote
  = ch:Chamber _ session:[12] s:_ ! { return ch === 's' && !s } num:Number
  {
    return {
      id: num.toString(),
      chamber: ch,
      type: 'Vote',
      number: num,
      session: Number(session)
    }
  }

Legislation
  = leg:( Resolution / Amendment / Bill ) _ num:Number
  {
    leg.id += num
    leg.number = num
    return leg
  }

Amendment
  = ch:Chamber _ 'amdt'i
  {
    return {
      id: ch + 'amdt',
      chamber: ch,
      type: 'Amendment',
    }
  }

Bill
  = ch:Chamber r:( _ 'r'i )? & { return (ch === 'h' && r) || (ch === 's' && !r) }
  {
    return {
      id: ch + (r ? 'r' : ''),
      chamber: ch,
      type: 'Bill',
      binding: true
    }
  }


Resolution
  = ch:Chamber _ res:ResolutionType
  {
    let type
    if (res === 'conres')
      type = 'Concurrent'
    else if (res === 'jres')
      type = 'Joint'
    else
      type = 'Simple'
    type = type + ' Resolution'

    return {
      id: ch + res,
      chamber: ch,
      type: type,
      binding: false
    }
  }

ResolutionType
  = type:(('con'i / 'j'i) _)? 'res'i
  {
    if (type)
      return type[0].toLowerCase() + 'res'
    else 
      return 'res'
  }

Chamber
  = chamber:[hs]i { return chamber.toLowerCase() }

Number
  = n:[0-9]+ { return Number(n.join('')) }

_ "separator"
  = [ .]?
