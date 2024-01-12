const add=(a,b) => {
    return a+b;
};
const sub=(a,b) => {
    return a-b;
};
const mul=(a,b) => {
    return a*b;
};

//if there is only one method
// module.exports=add;


//if there is multiple methods or varibale
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mul=mul;

//another way
module.exports ={add,sub,mul};
