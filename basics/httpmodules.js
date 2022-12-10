const http = require ('http');

const server = http.createServer((req,res)=>{
   
    if(req.url === '/'){
    res.end('Welcome to our Home page')
    }
    if(req.url === '/about'){
        res.end('Here is our About Page')
    }
    res.end('Error 404! Page not found')
})
server.listen(5000,()=>{
    console.log( "Server loading ...");
})