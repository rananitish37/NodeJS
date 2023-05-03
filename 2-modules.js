//modules
//CommonJS, every file is module(by default)
//modules - Encapsulated code (only shere minimum)

const names=require('./3-firtsModule');
console.log(names);

const sayHi=require('./4-secondModule');
sayHi(names.nitish);
sayHi(names.king);
sayHi('rana');

const data=require('./5-alternative-flavor');


require('./6-mind-granade');//automatically executed