Item
    = item:( Vote / Legislation ) '-' congress:Congress
    {
        if (item.chamber === 's')
            item.chamber = 'Senate'
        else if (item.chamber === 'h')
            item.chamber = 'House'
        return {
            ...item,
            congress: congress
        }
    }

Vote
    = ch:Chamber _ session:[12] '.' num:Number
    {
        return {
            id: num,
            chamber: ch,
            type: 'Vote',
            session: session
        }
    }

Legislation
    = l:( Resolution / Bill ) _ num:Number
    {
        l.id = l.id + num
        l.number = Number(num)
        return l
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

Congress
    = n:Number & { return Number(n) >= 105 } { return n.toString() }

Number
    = n:[0-9]+ { return n.join('') }

_ "separator"
    = [ .]? { return null }
