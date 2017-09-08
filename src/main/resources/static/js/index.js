var path = document.location.pathname;
var ctx = path.substring(0,path.substr(1).indexOf("/")+1);

var $, laytpl, form, layer, table, laypage, element;
layui.use(['laytpl', 'form','layer', 'table', 'laypage', 'element'], function () {
    $ = layui.$, laytpl = layer.laytpl, form = layui.form, layer = layui.layer, table = layui.table, laypage = layui.laypage, element = layui.element;

    $(function () {
        $("#user_item").bind('click', function(){
           layui.each($(".layui-nav-tree").find("li"), function () {
               this.remove();
           });
           var html = '<li class="layui-nav-item layui-this"><a id="user_manage">用户管理</a></li>\n' +
                      '<li class="layui-nav-item"><a id="role_manage">权限列表</a></li>\n' +
                      '<li class="layui-nav-item"><a id="permission_manage">权限管理</a></li>';
           $(".layui-nav-tree").append(html);
           showUserList();
        });

        $("#process_item").bind('click', function(){
            layui.each($(".layui-nav-tree").find("li"), function () {
                this.remove();
            });
            var html = '<li class="layui-nav-item layui-this"><a href="">流程定义</a></li>\n' +
                '<li class="layui-nav-item"><a href="">流程部署</a></li>';
            $(".layui-nav-tree").append(html);
        });

        $("#user_manage").bind('click', showUserList);
        $("#role_manage").bind('click', showRoleList);
        $("#permission_manage").bind('click', showPermissionList);

        document.querySelector('#aaa').addEventListener('click', function(){
            console.log("aaa");
        });

    });
});

