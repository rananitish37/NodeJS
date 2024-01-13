const fs=require("fs");



//make object data
//create json file and store json data after converting it to json data
//read that json data 
//convert again back to object data and print both the data


const objData={
    name:"Nitish Rana",
    Age: 22,
    City: "Ahmedabad",
};

const jsonData=JSON.stringify(objData);
fs.writeFile("Json1.json",jsonData,()=>{
    console.log("done");
});
fs.readFile("Json1.json","utf-8",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(orgData);
    console.log(data);
})
