var Http = require('http');

var req = Http.request({
    host: 'xmldemo.travellanda.com',
    // proxy IP
    port: null,
    // proxy port
    method: 'GET',
    path: '/xmlv1' // full URL as path
    }, function (res) {
        res.on('data', function (data) {
        console.log(data.toString());
    });
});

req.end();