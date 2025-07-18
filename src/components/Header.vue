<template>
    <div class="layui-nav">
        <ul lay-filter="">
            <li class="layui-nav-item"><a href="">最新活动</a></li>
            <li class="layui-nav-item layui-this"><a href="">产品</a></li>
            <li class="layui-nav-item"><a href="">大数据</a></li>
            <li class="layui-nav-item nav-parent">
                <a href="javascript:;">解决方案</a>
                <dl class="layui-nav-child"> <!-- 二级菜单 -->
                    <dd><a href="">移动模块</a></dd>
                    <dd><a href="">后台模版</a></dd>
                    <dd><a href="">电商平台</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item"><a href="">社区</a></li>
            </ul>
            <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item ">
                <a href="//www.imooc.com/user/newlogin" id="js-signin-btn">登录</a> 
                </li>
                <li class="layui-nav-item ">
                <a href="//www.imooc.com/user/newsignup" id="js-signup-btn">注册</a>
            </li>
<li class="layui-nav-item ">
    <i  onclick="layui.msg('正在通过QQ登录',{icon: 10, time: 0})" title="QQ登录" class="layui-icon layui-icon-login-qq"></i>
</li>
<li class="layui-nav-item ">
    <i  onclick="layui.msg('正在通过微信登录',{icon: 10, time: 0})" title="微信登录" class="layui-icon layui-icon-login-wechat"></i>
</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Header'
}

</script>
<style lang="scss" scoped>
.nav-parent:hover {
    .layui-nav-child {
        display: block;
    }

}
li.a{
    color:#fff;
}
.layui-icon{
 color: #ffb;
 font-size: 15px;
 margin-left: 5px;
}


/* .new_header {
    // width: 1152px !important;
    height: 72px;
    // margin: 0 auto;
    // font-size: 14px;
}
#logo a img{
    width:30px;
   margin-top: 20px;
    float: left;
}
.nav-items{
    height: 45px;
align-content: center;
}
ul {
    // list-style: none;
    // display: block;
    // list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
}

ul li {
    float: left;
    position: relative;
    margin-left: 15px;
}

.header_right {
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 72px;
}

#login-area {
    float: left;
    position: relative;
    margin-top: 10px;
} */
</style>