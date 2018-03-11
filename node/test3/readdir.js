var fs=require('fs');
fs.readdir('./a',function(err,files){
    console.log(files);
})