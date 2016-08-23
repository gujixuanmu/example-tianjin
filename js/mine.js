window.onload = drag;

function drag(){
//第一个nav
    var hdn1=document.getElementById('hdn1'),
        phn2=document.getElementsByClassName('public-header-nav2')[0],
        item1= phn2.getElementsByClassName('item1'),
        item10=item1[0],
        one= item10.firstChild;
    one.onmouseover=function(){
        hdn1.style.display='block';
    };

    one.onmouseout = function(){
        hdn1.style.display='none';
    };

    hdn1.onmouseover = function(){
        hdn1.style.display='block';
    };

    hdn1.onmouseout=function(){
        hdn1.style.display = 'none';
    };

//第二个nav
    var hdn2 =document.getElementById('hdn2'),
        item11=item1[1],
        two = item11.firstChild;
    two.onmouseover=function(){
        hdn2.style.display='block';
    };
    two.onmouseout=function(){
        hdn2.style.display='none';
    };
    hdn2.onmouseover=function(){
        hdn2.style.display='block'
    };
    hdn2.onmouseout=function(){
        hdn2.style.display='none';
    };

//第三个nav
    var hdn3 =document.getElementById('hdn3'),
        item12=item1[2],
        three = item12.firstChild;
    three.onmouseover=function(){
        hdn3.style.display='block';
    };
    three.onmouseout=function(){
        hdn3.style.display='none';
    };
    hdn3.onmouseover=function(){
        hdn3.style.display='block'
    };
    hdn3.onmouseout=function(){
        hdn3.style.display='none';
    };

//第四个nav
    var hdn5 =document.getElementById('hdn5'),
        item15=item1[4],
        five= item15.firstChild;
    five.onmouseover=function(){
        hdn5.style.display='block';
    };
    five.onmouseout=function(){
        hdn5.style.display='none';
    };
    hdn5.onmouseover=function(){
        hdn5.style.display='block'
    };
    hdn5.onmouseout=function(){
        hdn5.style.display='none';
    };


    var a = document.getElementsByClassName('index-banner')[0],
        c = a.getElementsByClassName('index-banner2')[0],
        b= a.getElementsByClassName('index-banner1')[0],
        d= a.getElementsByClassName('index-banner3')[0],
        icobox= a.getElementsByClassName('index-banner-icoBox')[0],
        ico1=icobox.getElementsByTagName('a')[0],
        ico2=icobox.getElementsByTagName('a')[1],
        ico3=icobox.getElementsByTagName('a')[2];

    var ico1box=function(){
        ico1.onmousemove= function () {
            ico1.style.backgroundColor='#fff';
        };
        ico1.onmouseout= function () {
            ico1.style.backgroundColor='#244794'
        };
        ico1.onclick=function () {
            b.style.display = 'block';
            c.style.display = 'none';
            d.style.display = 'none';
            ico1.style.backgroundColor='#fff';
            ico2.style.backgroundColor='#244794';
            ico3.style.backgroundColor='#244794';
            x=1;
            ico1.onmouseout=null;
        };

    };


    var ico2box = function(){
        ico2.onmousemove= function () {
            ico2.style.backgroundColor='#fff';
        };
        ico2.onmouseout= function () {
            ico2.style.backgroundColor='#244794'
        };

        ico2.onclick= function () {
            b.style.display = 'none';
            c.style.display = 'block';
            d.style.display = 'none';
            ico2.style.backgroundColor='#fff';
            ico1.style.backgroundColor='#244794';
            ico3.style.backgroundColor='#244794';
            x=2;
            ico2.onmouseout=null;
        };

    };


    var ico3box=function(){
        ico3.onmousemove= function () {
            ico3.style.backgroundColor='#fff';
        };
        ico3.onmouseout= function () {
            ico3.style.backgroundColor='#244794'
        };
        ico3.onclick= function () {
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'block';
            ico3.style.backgroundColor='#fff';
            ico1.style.backgroundColor='#244794';
            ico2.style.backgroundColor='#244794';
            x=3;
            ico3.onmouseout=null;
        };
    };


    ico1box();
    ico2box();
    ico3box();
    var x=null;
    setInternav= setInterval(function(){
        x++;
        if(x>3){
            x=1;
        }
        if(x==1){
            b.style.display = 'block';
            c.style.display = 'none';
            d.style.display = 'none';
            ico1.style.backgroundColor='#fff';
            ico2.style.backgroundColor='#244794';
            ico3.style.backgroundColor='#244794';
            ico1box();
        }else if(x==2){
            b.style.display = 'none';
            c.style.display = 'block';
            d.style.display = 'none';
            ico2.style.backgroundColor='#fff';
            ico1.style.backgroundColor='#244794';
            ico3.style.backgroundColor='#244794';
            ico2box();
        }else if(x==3){
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'block';
            ico3.style.backgroundColor='#fff';
            ico1.style.backgroundColor='#244794';
            ico2.style.backgroundColor='#244794';
            ico3box();
        }
    },3000)

}
