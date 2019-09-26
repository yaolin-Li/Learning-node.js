function travel(dir,callback){
    var fs = require('fs');
    fs.readdirSync(dir).forEach(function(file){
        var pathname = path.join(dir,file);

        if(fs.statSync(pathname).isDirectory()){
            travel(pathname,callback);
        }
        else{
            callback(pathname);
        }
    });
}


travel('learnFileSystem/user',function(pathname){
    console.log(pathname);
});