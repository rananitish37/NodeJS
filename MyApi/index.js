const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{

    const data=fs.readFileSync(`${__dirname}/userapi/userapi.json`,"utf-8")
        const objData=JSON.parse(data);

    if(req.url=="/"){
        res.end("Welcome! this is home page");
    }else if(req.url=="/about"){
        res.end("wecome to AboutUs page");
    }else if(req.url=="/userapi"){
        // fs.readFile(`${__dirname}/userapi/userapi.json`,"utf-8",(err,data)=>{
        //     console.log(data);
        //     const objData=JSON.parse(data);  /* to avoid calling again and we can use these lines above as sync also because it will load only once so
        res.writeHead(200,{"content-type":"text/html"});
        res.end(objData[1].name);
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("this page is not found");
    }
});

server.listen(5000,"127.0.0.1",()=>{
    console.log("server is running......");
})