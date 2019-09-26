var bin = new Buffer.from([0x68,0x65,0x6c,0x6c,0x6f]);
var str = bin.toString('utf-8');
console.log(str);
console.log(new Buffer.from('hello','utf-8'));