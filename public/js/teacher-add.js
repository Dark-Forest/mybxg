/**
 * Created by Administrator on 2017/9/1.
 */
define(['jquery', 'template', 'util','datepicker','language'], function ($, template, util) {
    //设置菜单选中-对应 讲师管理
    util.setMenu('/teacher/list');  //路径写死-不传递此时路径location.pathname\
    //获取编辑的讲师ID
    var tcId = util.qs('tc_id');
    if (tcId) {
        //编辑操作（根据id调用后台接口，获取数据）
        $.ajax({
            type: 'get',
            url: '/api/teacher/edit',
            data: {tc_id: tcId},//先查询，再返回
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                data.result.operate = '编辑讲师'; //添加自定义属性
                //解析数据 渲染页面
                var html = template('teacherTpl', data.result);
                $('#teacherInfo').html(html);
                //提交编辑讲师表单---有数据才能操作-写在success回调函数中
                submitForm('/api/teacher/update');  //--再次提交
            }
        });
    } else {
        //添加讲师操作
        var html = template('teacherTpl',{operate : '添加讲师',tc_gender : 1});
        $('#teacherInfo').html(html);

        //提交添加讲师表单---/api/teacher/add
        submitForm('/api/teacher/add');
    }
    //提交表单公用方法
    function submitForm(url) {
        //为提交按钮绑定点击事件
        $('#teacherBtn').click(function () {
            $.ajax({
                type: 'post',  //编辑后与添加的提交，都是post
                url: url,
                data: $('#teacherForm').serialize(),  //得到所有表单数据，传给data
                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                    if(data.code == 200){
                        location.href = '/teacher/list';//返回列表页
                    }
                }
            });
        });
    }
});













