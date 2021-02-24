const fs = require('fs');

const dir = process.argv[2];
const expectedExtension = process.argv[3];

function checkExtension(filename) {
    const foundExtension = filename.split('.');

    if (foundExtension[1] == expectedExtension)
        console.log(filename)
}

fs.readdir(dir, (err, list) => {
    if (err) {
        return console.log(err);
    }
    list.filter(checkExtension);
});