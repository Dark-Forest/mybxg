/**
 * Created by Administrator on 2017/8/31.
 */
define(['jquery'], function ($) {
    //工具函数
    return {
        setMenu: function (path) {  //设置导航菜单选中
            //设置导航菜单选中（高亮）
            $('.navs a[href="' + path + '"]').addClass('active').closest('ul').show();
        },
        qs: function (key) {    //获取指定的URL参数值
            var param = location.search.substr(1);  //去掉问号
            var result = null;
            if (param) {
                var kvs = param.split('&'); //按&分
                $.each(kvs,function(i,item){
                    var kv = item.split('='); //按等号分
                    //如果找到了这个键，把需要的值返回
                    if(key == kv[0]){
                        result = kv[1];
                        return false;  //终止循环
                    }
                });
            }
            return result;
        }
    }
});




