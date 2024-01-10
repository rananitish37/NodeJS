const fs = require('fs');

//It will add text to the file(override the text) and if file does not exist then it will create the file
fs.writeFileSync("write.txt","Hii this is i'm trying file handling");

//read the file it will return buffered data so we will need to convert it to string
const data=fs.readFileSync("write.txt").toString();

console.log(data);

//it will append the data not override it
fs.appendFileSync("write.txt",". Now it will append not override");