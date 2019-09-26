var rs = fs.createReadStream(pathname);
rs.on('data',function(chunk){
    doSomething(chunk);
});

rs.on('end',function(){
    cleanUp();
})
//上边的代码中data事件会源源不断地被触发，不管doSomething
//函数是否处理得过来。代码可以继续做如下改造，以解决这个问题。
var rs = fs.createReadStream(src);
rs.on('data',function(chunk){
    rs.pause();
    doSomething(chunk,function(){
        rs.resume();
    });
});

rs.on('end',function(){
    cleanUp();
});
//另一种方法
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {
        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

ws.on('drain', function () {
    rs.resume();
});
