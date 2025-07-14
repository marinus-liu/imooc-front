<template>
    <div>
        <div class="  clearfix" id="nav" style="background-color: #ccc !important;">
            <div class="layui-container">
<div class="layui-row new_header clearfix">
                <div class="layui-col-md9">
                    <div id="logo" class="logo"><a href="/" target="_self" title="首页"><img title="慕课网"
                                src="../assets/logo.png"></a></div>
                    <div class="nav-items">
                        <ul class="nav-item">
                            <li>
                                标题1
                            </li>
                            <li>
                                标题2
                            </li>
                            <li>
                                标题3
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="layui-col-md3">
                    <div class="header-right">
                        <div id="login-area">
                            <ul class="header-unlogin clearfix newcomer-box">
                                <li class="header-signin">
                                    <a href="//www.imooc.com/user/newlogin" id="js-signin-btn">登录</a> / <a
                                        href="//www.imooc.com/user/newsignup" id="js-signup-btn">注册</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
<style lang="scss" scoped>
.new_header {
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
}
</style>