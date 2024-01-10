//1. CREATE a filder name Rana
//2. CREATE a file name bio.txt and data in the same file
//3. ADD more data to the file 
//4. READ the data without getting the buffer data
//5. RENAME the existing file
//6. DELETE the file and folder


const fs = require("fs");

// 1
// fs.mkdirSync("Rana");

// 2
// fs.writeFileSync("bio.txt","My name is nitish rana");

// 3
// fs.appendFileSync("bio.txt",". And i am going to learn everything about node js");

// 4
// const data = fs.readFileSync("bio.txt","utf-8");
// console.log(data);

// 5 
// fs.renameSync("bio.txt", "detail.txt");

// 6
// fs.unlinkSync("detail.txt");

// fs.rmdirSync("Rana")