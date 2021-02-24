const mymodule = require('./mymodule');

const dir = process.argv[2];
const expectedExtension = process.argv[3];

mymodule(dir, expectedExtension, function (err, list) {
    if (err) {
        return console.log(err);
    }
    list.forEach(element => console.log(element));
});

// node .\filtered-ls.js 'C:\Users\gabriel.andrade\Downloads\Sensedia\Diversos' 'docx'