<template>
    <div class="layui-container  layui-panel">
        <div class="layui-tab layui-tab-brief">
            <ul class="layui-tab-title">
                <li class="layui-this">登录</li>
                <li>
                    <RouterLink :to="{ name: 'reg' }">
                        注册
                    </RouterLink>
                </li>
            </ul>
            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show"></div>

                <Form class="layui-form layui-form-pane" v-slot="{ errors }" @submit="checkForm">
                    <div class="layui-form-item">
                        <label class="layui-form-label">手机/邮箱</label>
                        <div class="layui-input-inline">
                            <Field type="email" name="username" placeholder="请输入标题" autocomplete="off"
                                class="layui-input" rules="required|email" v-model="username" />
                        </div>
                        <div class="error layui-form-mid">
                            {{ errors.username }}
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">密码</label>
                        <div class="layui-input-inline">
                            <Field type="password" name="password" placeholder="请输入密码" autocomplete="off"
                                class="layui-input" rules="required" v-model="password" />
                        </div>
                        <div class="error layui-form-mid">
                            {{ errors.password }}

                        </div>
                    </div>
                    <div class="layui-form-item">
                        <div class="layui-row">
                            <label class="layui-form-label">验证码</label>
                            <div class="layui-input-inline">
                                <Field type="text" name="code" placeholder="请输入验证码" autocomplete="off"
                                    class="layui-input" rules="required|length:4" v-model="code" />
                            </div>
                            <div class="layui-form-mid svg" v-html="svg" @click="_getCode()"></div>
                        </div>

                        <div class="error ">
                            {{ errors.code }}
                        </div>
                    </div>
                    <button class="layui-btn">登录</button>
                    <RouterLink :to="{ name: 'forget' }" class="imooc-link">
                        找回密码
                    </RouterLink>
                </Form>
                <div class="layui-form-item">
                    <span>或者使用社交账号登入</span>
                    <i onclick="layer.msg('正在通过QQ登入', {icon: 16, shade: 0.1, time:0})"
                        class="layui-icon layui-icon-login-qq" title="QQ登录"></i>
                    <i onclick="layer.msg('正在通过微信登入', {icon: 16, shade:0.1, time:0})"
                        class="layui-icon layui-icon-login-wechat" title="微信登录"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCaptchaCode } from '@/api/login'
import { Field, Form } from 'vee-validate'

export default {
    name: 'login',
    data() {
        return {
            svg: '',
            username: '',
            code: '',
            password: '',
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
        checkForm(values) {
            // console.log(values)
            // console.log(JSON.stringify(values, null, 2));
            this.errorMsg = []
            if (!this.username) {
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

.layui-icon-login-qq,
.layui-icon-login-wechat {
    font-size: 20px;
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