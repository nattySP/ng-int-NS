var express     = require('express');

var app = express();

// listen on port 3000
var port = process.env.PORT || 3000; 
app.listen(port);
console.log('listening on port: ', port);

// serves public folder
app.use(express.static('./app'));