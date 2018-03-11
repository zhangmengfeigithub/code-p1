var eventemitter=require('events').EventEmitter;
var life=new eventemitter();
life.on('求安慰',function(who){
    console.log('给'+who+'倒水')
})
life.emit('求安慰','汉子');