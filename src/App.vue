<template>
  <div class="layui-container">
    <Form class="layui-form layui-form-pane" v-slot="{ errors }" @submit="checkForm">
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-inline">
          <Field type="email" name="name" placeholder="请输入标题" autocomplete="off"
            class="layui-input"  rules="required|email"/>
        </div>   
   <div class="error layui-form-mid"> 
   
   {{ errors.name }}
   
   </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <Field type="password" name="password" placeholder="请输入密码" autocomplete="off"
            class="layui-input" rules="required"/>
        </div>
          <div class="error layui-form-mid"> 
    {{ errors.password }}
   
   </div>
        
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-inline">
          <Field type="text" name="code" placeholder="请输入验证码" autocomplete="off"
            class="layui-input" rules="required"/>
        </div>
          
        <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha()"></div>
        <div class="error "> 
    {{ errors.code }}
    
   </div>
      </div>
      <button class="layui-btn" >登录</button>
      <a href="http://www.layui.com" class="imooc-link">找回密码</a>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import {Field , Form, defineRule, configure} from 'vee-validate'
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zh from '@vee-validate/i18n/dist/locale/zh_CN.json';

defineRule('required', required);
defineRule('email', email);
localize({ zh });
configure({
  generateMessage: localize('zh', {
      names:{
        name:'用户名',
        password:'密码',
        code:'验证码'
      },
      messages: {
        required: ' {field} 不能为空',
        email: ' {field} 格式不对'
      },
  }),
});

export default {
  name: 'app',
   components: {
    Form,
    Field
  },
  data () {
    return {
      svg: '',
      name : '',
      code: '',
      password: '',
      errorMsg: []
    }
  },
  mounted() {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
      if ( res.status === 200){
        let obj =  res.data
        if (obj.code === 200) {
          this.svg =  obj.data
        }
      }
      console.log(res)
    })
    },
    checkForm (values) {
      console.log(values)
       console.log(JSON.stringify(values, null, 2));
     /*  this.errorMsg = []
      if(!this.name){
        this.errorMsg.push('用户名不能为空')
      }
      if(!this.code){
        this.errorMsg.push('验证码不能为空')
      }
      if(!this.password){
        this.errorMsg.push('密码不能为空')
      }
 */      console.log(this.errorMsg)
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
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
.error{
  color: red;
}
</style>
