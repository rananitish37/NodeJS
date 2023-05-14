const http=require('http');
const fs=require('fs');
const _ = require('lodash');

const server=http.createServer((req,res)=>{
    console.log('request has beem made from browser to server');
    // console.log(req.method);
    console.log(req.url);

    let num =_.random(0,20);
    console.log(num);

    res.setHeader('Content-Type','text/html');
//     res.write('<h1>hello world! :)</h1>');
//     res.write('<h2>how you doing? :) </h2>');
//     res.end();

    let path='../views';
    switch(req.url){
        case '/':
            path+='/index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode=200;
            break;
        default:
            path+='/404.html';
            res.statusCode=404;
            break;
    };

    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }else{
            // res.write(fileData);//this is used when we write multiple or single
            //if we have only one to write then we can do it in end() for eg:
            res.end(fileData);
            // res.end();
        }
    });
});
//port no, host, callback function
server.listen(3000,'localhost',()=>{
     console.log('server is listening on port 3000');
});