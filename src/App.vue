<template>
  <div class="layui-container">
    <form class="layui-form layui-form-pane" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-block">
          <input type="text" name="用户名" required lay-verify="required" placeholder="请输入标题" autocomplete="off"
            class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <input type="password" name="密码" required lay-verify="required" placeholder="请输入密码" autocomplete="off"
            class="layui-input">
        </div>
        <div class="layui-form-mid " v-html="svg"></div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-block">
          <input type="text" name="title" required lay-verify="required" placeholder="请输入验证码" autocomplete="off"
            class="layui-input">
        </div>
      </div>
      <button class="layui-btn">登录</button>
      <a href="http://www.layui.com" class="imooc-link">找回密码</a>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'app',
  data () {
    return {
      svg: ''
    }
  },
  mounted() {
    axios.get('http://localhost:3000/demo').then((res) => {
      if ( res.status === 200){
        let obj =  res.data
        if (obj.code === 200) {
          this.svg =  obj.data
        }
      }
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}

.layui-container {
  background: #fff;
}

input {
  width: 190px;
}

.imooc-link {
  margin-left: 10px;

  &:hover {
    color: #009688;
  }
}
</style>
