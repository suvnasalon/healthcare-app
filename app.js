const http = require('http');
const fs = require('fs');
const port=process.env.PORT || 3000;
const server = http.createServer((req, res) => {

    fs.readFile("appform.html", function(err, text){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(text);        
    });
});
server.listen(port,() => {
    console.log(`Server running at port `+port);
});