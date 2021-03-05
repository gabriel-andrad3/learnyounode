const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, function callback(response) {
    response.pipe(bl(function (error, data) {
        if (error)
            console.log(error);
        let dataString = data.toString();
        console.log(dataString.length);
        console.log(dataString);
    }));
});