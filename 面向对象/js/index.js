//��Ʒ����
/*���������ʹ�ö�������Ժͷ�����this�����������ʹ�ã���ʵ���������õ��﷨*/
function Product() {
    /*���� ��Ϊ*/
    this.name ='';
    this.price='';
    this.description = '';
    this.youhuijia='';
    this.zhekou = ''
    this.sales = ''
    this.image=''
}
Product.prototype={
    bindDom:function(){
        var str=''
        str+='<dl>'
            str+='<dt><a><img src="'+this.image+'" width="384" height="225" /></a></dt>'
            str+='<dd>'
                str+='<span><a><em>'+this.zhekou+'��/</em>'+this.name+'</a></span>'
            str+='</dd>'
            str+='<dd class="price">'
                str+='<em>��'+this.price+'</em>'
                str+='<del>��'+this.youhuijia+'</del>'
                str+='<i>������'+this.sales+'</i>'
            str+='</dd>'
        str+='</dl>'
        return str;
    },
    bindEvents:function(){

    }
}

/*���ľ���� -- ����ɶ��Լ���*/
window.onload=function() {
  /*��������ajax��ȡ��json���� -- �������Ǻ�̨���������*/
    var products= [
        {name:'�ֻ��е�ս����',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'�ֻ��е�ս����',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque06_r2_c2.jpg'},
        {name:'�ֻ��е�ս����',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque08_r2_c2.jpg'},
        {name:'�ֻ��е�ս����',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque09_r2_c2.jpg'},
        {name:'�ֻ��е�ս����',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'�ֻ��е�ս����',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque11_r2_c2.jpg'},
    ]

    /*ǰ�˴���*/
    /*ǰ��̨������Ӱ�죬���ǲ��صȴ������Ա����������*/
    var str=''
    for(var i = 0,len=products.length;i<len;i++) {
        var product = new Product()
        product.name=products[i].name;
        product.price=products[i].price;
        product.youhuijia=products[i].youhuijia;
        product.zhekou=products[i].zhekou;
        product.sales=products[i].sales;
        product.image=products[i].image;

        str+= product.bindDom()
    }
    var container = document.getElementById('container')
    container.innerHTML=str
}

