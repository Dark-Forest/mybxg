/**
 * Created by Administrator on 2017/9/6.
 */
define(['jquery','template','util','bootstrap','form'],function($,template,util){
    // 设置导航菜单选中
    util.setMenu('/course/list');
    // 获取课程ID
    var csId = util.qs('cs_id');
    // 查询课时数据
    $.ajax({
        type : 'get',
        url : '/api/course/lesson',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data){
            // 渲染数据
            var html = template('lessonTpl',data.result);
            $('#lessonInfo').html(html);

            //处理添加功能 -- 内容为空
            $('#addBtn').click(function(){
                //渲染模态框模板
                var html = template('modalTpl',{operate : '添加课时'});
                $('#modalInfo').html(html);
                // 显示弹窗
                $('#chapterModal').modal();
            });
            //处理编辑功能--编辑是列表，不用id
            $('.editLesson').click(function(){
                // 先查询数据
                $.ajax({
                   type : 'get',
                    url : '/api/course/chapter/edit',
                    data :{ct_id : $(this).attr('data-ctId')},
                    dataType :'json',
                    success : function(data){
                        //渲染模态框模板
                        data.result.operate = '编辑课时';
                        var html = template('modalTpl',data.result);
                        $('#modalInfo').html(html);
                        // 显示弹窗
                        $('#chapterModal').modal();
                    }
                })
            });
        }
    });
});











