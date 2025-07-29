<template>
    <div class="layui-container  layui-panel">
        <div class="layui-tab layui-tab-brief">
            <ul class="layui-tab-title">
                <li>
                    <RouterLink :to="{ name: 'login' }">
                        登录
                    </RouterLink>

                </li>
                <li class="layui-this">找回密码</li>
            </ul>

            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show"></div>

                <div>
                    <a href="" class="layui-btn">使用手机找回</a>
                    <a href="" class="layui-btn">使用邮箱找回</a>
                </div>
                <Form class="layui-form layui-form-pane" v-slot="{ errors }">
                    <div class="layui-form-item">
                        <label class="layui-form-label">邮箱</label>
                        <div class="layui-input-inline">
                            <Field type="email" name="username" placeholder="请输入邮箱" autocomplete="off"
                                class="layui-input" rules="required|email" v-model="username" />
                        </div>
                        <div class="error layui-form-mid">

                            {{ errors.username }}

                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-row">
                            <label class="layui-form-label">验证码</label>
                            <div class="layui-input-inline">
                                <Field type="text" name="code" placeholder="请输入验证码" autocomplete="off"
                                    class="layui-input" rules="required" v-model="code" />
                            </div>

                            <div class="layui-form-mid svg" v-html="svg" @click="_getCode()"></div>
                        </div>

                        <div class="error ">
                            {{ errors.code }}

                        </div>
                    </div>
                    <button class="layui-btn" @click="submit()">提交</button>
                </Form>

            </div>
        </div>

    </div>
</template>

<script>
import { Field, Form } from 'vee-validate'
import { getCaptchaCode, forget } from '@/api/login'

export default {
    name: 'forget',
    data() {
        return {
            svg: '',
            username: '',
            code: '',
            errorMsg: []
        }
    },
    components: {
        Form,
        Field
    },
    
    mounted() {
        this._getCode()
    },
    methods: {
        _getCode() {
            getCaptchaCode().then((res) => {
                // console.log(res)
                if (res.code === 200) {
                        this.svg = res.data
                    }
                /* if (res.status === 200) {
                    res = res.data
                    console.log(res)
                    
                } */

            })
        },
        submit(){
            forget({
                username: this.username,
                code: this.code
            }).then( (res ) => {
                console.log(res)
                if(res.code === 200){
                    alert('邮件发送成功')
                }
            })
        }
        /* checkForm(values) {
            console.log(values)
            console.log(JSON.stringify(values, null, 2));
            this.errorMsg = []
            if (!this.username) {
                this.errorMsg.push('用户名不能为空')
            }
            if (!this.code) {
                this.errorMsg.push('验证码不能为空')
            }

            console.log(this.errorMsg)
        }, */

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