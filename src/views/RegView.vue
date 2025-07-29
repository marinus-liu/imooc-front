<template>
  <div class="layui-container  layui-panel">
    <div class="layui-tab layui-tab-brief">
      <ul class="layui-tab-title">
        <li> <RouterLink :to="{ name: 'login' }">
                        登录
                    </RouterLink>
                  </li>
        <li class="layui-this">注册</li>
      </ul>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show"></div>

        <Form class="layui-form layui-form-pane" v-slot="{ errors }" @submit="checkForm">
          <div class="layui-form-item">
            <div class="layui-row">
            <label class="layui-form-label">用户名</label>
            <div class="layui-input-inline">
              <Field type="email" name="username" placeholder="请输入标题" autocomplete="off" class="layui-input"
                rules="required|email" v-model="username" />
            </div>
             <div class="layui-form-mid " > 将会成为您唯一的登入名</div>
             </div>
            <div class="error ">

              {{ errors.username }}

            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">昵称</label>
            <div class="layui-input-inline">
              <Field type="text" name="nickname" placeholder="请输入喜欢的呢称" autocomplete="off" class="layui-input"
                rules="required" v-model="nickname" />
            </div>
            <div class="error layui-form-mid">
              {{ errors.nickname }}

            </div>

          </div>
          <div class="layui-form-item">
             <div class="layui-row">
            <label class="layui-form-label">密码</label>
            <div class="layui-input-inline">
              <Field type="password" name="password" placeholder="请输入密码" autocomplete="off" class="layui-input"
                rules="required|min:6|max:16" v-model="password" />
            </div>
            <div class="layui-form-mid " > 6到16个字符</div>
            </div>
            <div class="error ">
              {{ errors.password }}

            </div>

          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">确认密码</label>
            <div class="layui-input-inline">
              <Field type="password" name="confirmation" placeholder="请输入密码" autocomplete="off" class="layui-input"
                rules="required|confirmed:@password" v-model="confirmation" />
            </div>
            <div class="error layui-form-mid">
              {{ errors.confirmation }}

            </div>

          </div>
          <div class="layui-form-item">
            <div class="layui-row">
            <label class="layui-form-label">验证码</label>
            <div class="layui-input-inline">
              <Field type="text" name="code" placeholder="请输入验证码" autocomplete="off" class="layui-input"
                rules="required" v-model="code" />
            </div>

            <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha()"></div>
            </div>
            <div class="error ">
              {{ errors.code }}

            </div>
          </div>
          <button class="layui-btn">登录</button>
         
        </Form>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import { Field, Form } from 'vee-validate'

export default {
  name: 'reg',
  components: {
    Form,
    Field
  },
  data() {
    return {
      svg: '',
      name: '',
      code: '',
      password: '',
      confirmation:'',
      errorMsg: []
    }
  },
  mounted() {
    this.getCaptcha()
  },
  methods: {
    getCaptcha() {
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
        if (res.status === 200) {
          let obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
        console.log(res)
      })
    },
    checkForm(values) {
      console.log(values)
      console.log(JSON.stringify(values, null, 2));
      this.errorMsg = []
      if (!this.name) {
        this.errorMsg.push('用户名不能为空')
      }
      if (!this.code) {
        this.errorMsg.push('验证码不能为空')
      }
      if (!this.password) {
        this.errorMsg.push('密码不能为空')
      }
      console.log(this.errorMsg)
    },

  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}

.layui-container {
  background: #fff;
  margin-top: 50px;
}

.layui-form-pane {
  margin-top: 50px;
  margin-bottom: 50px;
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

.svg {
  position: relative;
  top: -15px;
}

.error {
  color: red;
}
</style>