const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);

const content = buffer.toString();

const numberOfLines = content.split('\n');

console.log(numberOfLines.length-1);