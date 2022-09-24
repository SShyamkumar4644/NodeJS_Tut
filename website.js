const  fs  = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;
//Here either check with ports available or run with 3000 port

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> This is CodewithHarry </h1> <p> This is nice </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About CodewithHarry </h1> <p> This is About </p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 400;
        res.end('<h1> Not Found </h1> <p> This page was not found </p>');
    }
})

server.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
});
