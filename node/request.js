var http=require('http');
var querystring=require('querystring');
var postData=querystring.stringfy({
    'content':'我测试一下哈'
     'cid':348
})
    var option={
        hostname:'www.imooc.com',
        port:80,
        path:'/course/docomment',
        method:'POST',
        headers:{
            'Accept':'application/json, text/javascript, */*; q=0.01',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8',
'Connection':'keep-alive',
'Content-Length':'postData.length',
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
'Cookie':'imooc_uuid=a8253e4c-ea4a-495c-9397-b55fb38710d4; imooc_isnew_ct=1494634115; UM_distinctid=15d2c4373a5122-0094a98b0d5167-414a0229-100200-15d2c4373a7224; CNZZDATA1261110065=428210087-1499682842-null%7C1499682842; loginstate=1; apsid=ZiMzU2ZTkxNjdhZDJlNDA5N2ZkMTMyNmQ0M2U0MjcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzQ3NDQ5MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyNTAwNDIxNTUxQHFxLmNvbQAAAAAAAAAAAAAAAAAAAGVhMGZmMTcyNTE1MmMzMWIwYzQzYWNiMzNlYTVkM2Iw0leOWdJXjlk%3DNG; last_login_username=2500421551%40qq.com; PHPSESSID=7nr2rfhojb3a00cvu6r7i3gb42; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1501402749,1502500800,1502580811,1502583221; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1502587374; imooc_isnew=2; cvde=598f904a19e7a-85',
'Host':'www.imooc.com',
'Origin':'http://www.imooc.com',
'Referer':'http://www.imooc.com/comment/348',
'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36',
'X-Requested-With':'XMLHttpRequest'
        }

    }
    var req=http.request(option,function(res){
        console.log('status：'+res.statusCode);
        console.log('headers:'+JSON.stringify(res.headers));
        res.on('data',function(chunk){
            console.log(Buffer.isBuffer(chunk));
            console.log(typeof chunk)
        })
        res.on('end',function(){
            console.log('评论完毕')；
        })
    })
    req.on('error',function(e){
        console.log('error:'+e.message);
    })
    req.write(postData);
    req.end();
