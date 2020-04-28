# Legislative parser

A simple parser for identifying bills and other legislative items of the US Congress.

## Usage

```javascript
var parse = require('legislative-parser');
```

### Legislation

Pass in the name of a bill or resolution to get information regarding it.

```javascript
var bill = parse('H.Con.Res.142-115');
console.log(bill);

// {
//     id: 'hconres142',
//     chamber: 'House',
//     type: 'Concurrent Resolution',
//     binding: false,
//     number: 142,
//     congress: 115
// }
```

Bill names take the form `` `${billName}-${congress}` ``. They are case-insensitive and all seperators (periods or spaces) are optional.

### Vote records

You can also parse the references to roll call votes. (These don't have official identifiers besides their number, so I had to get a little creative.)

```javascript
var vote = parse('S.2.266-116');
console.log(vote);

// {
//     id: '266',
//     chamber: 'Senate',
//     type: 'Vote',
//     session: 2,
//     congress: 116
// }
```

Vote names take the form of `` `${chamber}${session}.${number}-${congress}` ``. The period following separating the session number from the vote number is required.
