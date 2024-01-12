const os=require("os");

//architecture of os
console.log(os.arch());

//free ram space
const freememory=os.freemem();
console.log(freememory);//it will print it in bytes
//change it to GB
console.log(freememory /1024/1024/1024);

//total size of ram
const totalRam=os.totalmem();
console.log(totalRam);
//in GB
console.log(totalRam/1024/1024/1024);

//host name
console.log(os.hostname()); //DESKTOP-8DT8T84


//plateform name
console.log(os.platform()); //win32

//os type
console.log(os.type()); //Windows_NT