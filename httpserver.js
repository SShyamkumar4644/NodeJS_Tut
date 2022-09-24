const http = require('http');

const port = process.env.PORT || 3000;
//Here either check with ports available or run with 3000 port

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is CodewithHarry </h1> <p> This is nice </p>')
})

server.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
});
