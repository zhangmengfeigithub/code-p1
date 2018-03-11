var fs=require('fs');
var path=require('path');
var rf=function(cb){
    console.log(path.join(__dirname,'./foo.text'));
fs.readFile(__dirname+'/foo.text','utf-8',(err,data)=>{
cb(data);
});
};

module.exports=rf;