/**
 * Created by Administrator on 2016/7/8.
 */
$(function () {

//        $(window).on('scroll', function () {
//            var $active=$('#nav .container #Navigation ul li');
//
////            var c=$active.className;
//
//            if ($active[0].className == 'active') {
//                $('#figure figure').addClass('dh_img');
//            }
//            if ($active[1].className == 'active') {
//                $('#about_content .col-sm-10 h2').animate({'opacity': 1},500)//关于下的h2
//            }
//
//        });
//        setTimeout(function(){
//            $(window).trigger('scroll');//刷新页面就执行
//        },100)



//        返回顶部
    var backtop = $('#top');//获取#top的元素
    backtop.on('click', function () {//当点击#top的元素时执行
        $('body,html').animate({
            scrollTop: 0
        }, 800)
    });
    $(window).on('scroll', function () {
        //返回头部按钮的显示和隐藏
        if ($(window).scrollTop() > $(window).height())
            backtop.fadeIn();
        else
            backtop.fadeOut();


        //动画
//            获取#figure 元素下的figure
        var figure_img = document.getElementById('figure').getElementsByTagName('figure');
        var about_dh = $('h2');//关于下的h2
        var form=$('#contact .row');
        var tbs=$('#about #info .container .row div');//透明区域图标
        var tbs1=$('#about_content .Process ul li');//另一些图标
        var about_left=$('#about #about_content #about_content_row .left')[0];
        var about_right=$('#about #about_content #about_content_row .right')[0];//第二部分文字动画
        var row_1=$('#partners .partners_container .row_1')[0];//第三部分第一部分动画
        var row_2=$('#partners .partners_container .row_2')[0];

        for (var i = 0; i < figure_img.length; i++) {//遍历figuer
            var c = figure_img[i];

            if (gd(c)) {//判断调用函数是否为真（函数封装了判断figure是否在浏览器可见区域）
                $(c).addClass('dh_img');
            }


            if(c.getBoundingClientRect().top + Math.floor(c.offsetHeight/2)<0||c.getBoundingClientRect().top + Math.floor(c.offsetHeight/2)>document.documentElement.clientHeight) {
                $(c).removeClass('dh_img');
            }
        }
        //----------------
        for (var n = 0; n < about_dh.length; n++){
            var  b= about_dh[n];
            if(gd(b)){
                $(b).addClass('dh_h2');
            }
            if(b.getBoundingClientRect().top + Math.floor(b.offsetHeight/2)<0||b.getBoundingClientRect().top + Math.floor(b.offsetHeight/2)>document.documentElement.clientHeight) {
                $(b).removeClass('dh_h2');

            }
        }


//            ------form的动画
        for (var m = 0; m < form.length; m++){
            var form=form[m];
            if(gd(form)){

                $(form).addClass('dh_form');

            }
            if(form.getBoundingClientRect().top + Math.floor(form.offsetHeight/2)<0||form.getBoundingClientRect().top + Math.floor(form.offsetHeight/2)>document.documentElement.clientHeight) {
                $(form).removeClass('dh_form');

            }
        }

//            --------图标
        for (var x = 0; x < tbs.length; x++){
            var tb=tbs[x];
            if(gd(tb)){

                $(tb).addClass('dh_tb');

            }
            if(tb.getBoundingClientRect().top + Math.floor(tb.offsetHeight/2)<0||tb.getBoundingClientRect().top + Math.floor(tb.offsetHeight/2)>document.documentElement.clientHeight) {
                $(tb).removeClass('dh_tb');

            }
        }

        for (var s = 0; s < tbs1.length; s++){
            var tb=tbs1[s];
            if(gd(tb)){

                $(tb).addClass('dh_tb');

            }
            if(tb.getBoundingClientRect().top + Math.floor(tb.offsetHeight/2)<0||tb.getBoundingClientRect().top + Math.floor(tb.offsetHeight/2)>document.documentElement.clientHeight) {
                $(tb).removeClass('dh_tb');

            }
        }
//            文字

        if(gd(about_left)){

            $(about_left).addClass('dh_p_l');

        }
        if(about_left.getBoundingClientRect().top + Math.floor(about_left.offsetHeight/2)<0||about_left.getBoundingClientRect().top + Math.floor(about_left.offsetHeight/2)>document.documentElement.clientHeight) {
            $(about_left).removeClass('dh_p_l');

        }
        if(gd(about_right)){

            $(about_right).addClass('dh_p_r');

        }
        if(about_right.getBoundingClientRect().top + Math.floor(about_right.offsetHeight/2)<0||about_right.getBoundingClientRect().top + Math.floor(about_right.offsetHeight/2)>document.documentElement.clientHeight) {
            $(about_right).removeClass('dh_p_r');

        }

        //第三部分第一部分文字部分
        if(gd(row_1)){

            $(row_1).addClass('dh_p_l');

        }
        if(row_1.getBoundingClientRect().top + Math.floor(row_1.offsetHeight/2)<0||row_1.getBoundingClientRect().top + Math.floor(row_1.offsetHeight/2)>document.documentElement.clientHeight) {
            $(row_1).removeClass('dh_p_l');

        }
        if(gd(row_2)){

            $(row_2).addClass('dh_p_r');

        }
        if(row_2.getBoundingClientRect().top + Math.floor(row_2.offsetHeight/2)<0||row_2.getBoundingClientRect().top + Math.floor(row_2.offsetHeight/2)>document.documentElement.clientHeight) {
            $(row_2).removeClass('dh_p_r');

        }

    });



//        $(window).trigger('scroll');//刷新页面就执行（直接css给初始隐藏）


//     判断是否执行动画的封装函数
    function gd(cc) {
//            将传来的参数到浏览器（可视区域）顶部的高度加上它本身的高度的一半赋给c_h
        var c_h = cc.getBoundingClientRect().top + Math.floor(cc.offsetHeight/2);
     //   console.log(cc.getBoundingClientRect().top);
//            得到滚动条滚动的的高度  混乱模式得到方法（以body为参照）   标准模式得到方法
//            var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
//            得到可见区域高度（不用document.body.clientHeight因为它的意思是浏览器所有内容高度而不是可见区域）
        var w_hieght = document.documentElement.clientHeight;
        //    测试  console.log(c_h);
//            console.log(scrolltop + w_hieght);
//              如果c_h < scrolltop + w_hieght就返回true否则返回false

        if(c_h < w_hieght && c_h>0){
            return true ;
        }else {
            return false;
        }

    }
 //刷新页面即执行scroll
    $(window).trigger('scroll');

    //模态框
    $(".btn").click(function () {//模态框的触发
        $("#mot").modal("toggle");
    });

})
