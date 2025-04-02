// Unicode Property Escapes

const text = "AbC DeF123";
const upperRegex = /\p{Lu}/gu;

console.log(text.match(upperRegex));

//Lookbehind Assertions
//Positive Lookbehind
const price = "USD100";
const regex = /(?<=USD)\d+/g;

console.log(price.match(regex));
//Negative Lookbehind
const txt = "USD100 EUR200";
const regexp = /(?<!USD)\d+/g;

console.log(txt.match(regexp));

//Named Capture Groups
const date = "2025-03-28";
const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const match = date.match(reg);
console.log(match.groups);

//s (dotAll) Flag
const str = "Hello\nWorld";
console.log(str.match(/Hello.World/));
console.log(str.match(/Hello.World/s));
