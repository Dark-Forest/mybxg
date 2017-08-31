/**
 * Created by Administrator on 2017/8/31.
 */
define(['jquery'],function($){
    //工具函数
    return {
        setMenu : function(path){
            //设置导航菜单选中（高亮）
            $('.navs a[href="'+path+'"]').addClass('active');
        }
    }
});