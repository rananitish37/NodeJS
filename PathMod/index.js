const path=require("path");

const dir=path.dirname("C:\programming\Node js\Node(TT)\PathMod>index.js");
console.log(dir);

const base=path.basename("C:\programming\Node js\Node(TT)\PathMod>index.js");
console.log(base);

const ext=path.extname("C:\programming\Node js\Node(TT)\PathMod>index.js");
console.log(ext);

const detail=path.parse("C:\programming\Node js\Node(TT)\PathMod>index.js");
console.log(detail);

console.log(detail.name);