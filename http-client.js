const http = require('http');
const url = process.argv[2];

http.get(url, function callback(response) {
    response.on('data', function (data) {
        response.setEncoding('utf8');
        console.log(response);
    });
});

// https://apiplatform.sensedia.com/dev/sensedia-products/1.0/sensedia-products/api-platform