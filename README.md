# Legislative parser

A simple parser for identifying bills and other legislative items of the US
Congress.

## Usage

```javascript
var leg = require('legislative-parser');
```

### Legislation

Pass in the name of a bill or resolution to get an object describing it.

```javascript
leg.parse('H.Con.Res.142-115');

// {
//     id: 'hconres142',
//     chamber: 'House',
//     type: 'Concurrent Resolution',
//     binding: false,
//     number: 142,
//     congress: 115
// }
```

Legislation names take the form `TYPE.NUMBER`, optionally specifying a congress
following a dash `-`. The correct abbreviations for different types of
legislation are listed [here](https://www.govinfo.gov/help/bills#types). They
are case-insensitive and all separators (periods or spaces) are optional.

### Amendments

The parser also accepts amendments.

```javascript
leg.parse('H.Amdt.242-114');

// {
//    id: 'hamdt242',
//    chamber: 'House',
//    type: 'Amendment',
//    number: 242,
//    congress: 114
// }
```

Amendment names take the form of `CHAMBER.Amdt.NUMBER`, optionally specifying a
congress following a dash `-`. They are case-insensitive and all separators
(periods or spaces) are optional.

### Vote records

You can also parse the references to roll call votes. (These don't have
official identifiers besides their number, so I had to get a little
creative.)

```javascript
leg.parse('S.2.266-116');

// {
//     id: '266',
//     chamber: 'Senate',
//     type: 'Vote',
//     number: 266,
//     session: 2,
//     congress: 116
// }
```

Vote names take the form of `CHAMBER.SESSION.NUMBER`, optionally specifying
a congress following a dash `-`. Like legislation, they are
case-insensitive and separators are optional; however, Senate votes require
a separator between the session number and vote number to distinguish them
from Senate bills.

### Typescript

This project includes type declarations. You can import the types used via:

```javascript
import { Legislation, Resolution, Bill, Amendment, Vote } from 'legislative-parser/types';
```

You can also use the `Id` namespace to skip type checking the parser's
results when you know how a given string will be parsed.

```javascript
import { Id } from 'legislative-parser/types';
import { parse } from 'legislative-parser';

const knownAmendment = 'hamdt242' as Id.Amendment;
parse(knownAmendment); // returns an Amendment type
```
