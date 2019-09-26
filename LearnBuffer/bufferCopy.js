var bin = new Buffer.from([0x68,0x65,0x6c,0x6c,0x6f]);
var dup = new Buffer.alloc(bin.length);

bin.copy(dup);
dup[0]=0x48;
console.log(bin);
console.log(dup);