var bin = new Buffer.from([0x68,0x65,0x6c,0x6c,0x6f]);
var sub = bin.slice(2);
//.slice方法也不是返回一个新的Buffer，而更像是返回了指向原Buffer中间的某个位置的指针
sub[0] = 0x65;
console.log(bin);