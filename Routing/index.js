const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Welcome! this is home page");
    }else if(req.url=="/about"){
        res.end("wecome to AboutUs page");
    }else if(req.url=="/contact"){
        res.end("welcome to contactUs page");
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("this page is not found");
    }
});

server.listen(5000,"127.0.0.1",()=>{
    console.log("server is running......");
})