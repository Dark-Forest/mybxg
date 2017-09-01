/**
 * Created by Administrator on 2017/9/1.
 */
define(['jquery','template','util'],function($,template,util){
    //设置菜单选中-对应 讲师管理
    util.setMenu('/teacher/list');  //路径写死-不传递此时路径location.pathname\
    //获取编辑的讲师ID
    var tcId = util.qs('tc_id');
    if(tcId){
        //编辑操作（根据id调用后台接口，获取数据）
        $.ajax({
            type:'get',
            url : '/api/teacher/edit',
            data : {tc_id : tcId},//先查询，再返回
            dataType : 'json',
            success : function(data){
                //console.log(data);
                data.result.operate='编辑讲师'; //添加自定义属性
                //解析数据 渲染页面
                var html = template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
            }
        });
    }else{
        //添加讲师操作
        var html = template('teacherTpl',{operate : '添加讲师',tc_gender : 1});
        $('#teacherInfo').html(html);
    }
});













