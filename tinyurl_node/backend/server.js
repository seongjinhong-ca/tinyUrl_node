const http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode = 200 // when the response is done correctly
    res.setHeader('Content-Type', 'application/json') // setting header
    res.write('<h1>Hello world</h1>') // write on the original document
    res.end() // end of the document
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`))