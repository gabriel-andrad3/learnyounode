const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, content) => {
    if (err) {
        return console.log(err);
    }
    const numberOfLines = content.split('\n').length-1;

    console.log(numberOfLines);
});