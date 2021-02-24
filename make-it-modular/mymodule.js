const fs = require('fs');
const path = require('path');

function getListOfFilesByExtension (dir, expectedExtension, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }
        filteredList = list.filter(item => path.extname(item) === '.' + expectedExtension);
        callback(null, filteredList);
    });
};

module.exports = getListOfFilesByExtension;