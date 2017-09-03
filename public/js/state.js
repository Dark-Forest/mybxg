/**
 * Created by Administrator on 2017/9/3.
 */
define(['jquery'],function($){
    $(document).ajaxStart(function(){
        //控制遮罩显示
        $('.overlay').show();
    });
    $(document).ajaxStop(function(){
        //控制遮罩隐藏--css-overlay
        setTimeout(function(){
            $('.overlay').hide();
        },500);
    });
});