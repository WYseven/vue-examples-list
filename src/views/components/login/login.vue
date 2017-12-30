<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p>温馨提示：</p>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                    <p class="login-tip">未登录过的新用户，自动注册</p>
                    <p class="login-tip">注册过的用户可凭账号密码登录</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
// import Cookies from 'js-cookie';
import {loginMethod} from '@/methodsApi'
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    loginMethod({
                        username: this.form.userName,
                        password:  this.form.password
                    }).then((params) => {
                        if(params.data.code === 0){
                            this.$router.push('/base-examples')
                        }else if(params.data.code === 1) {
                            this.$Notice.warning({
                                title: '提醒',
                                desc: params.data.error_msg
                            });
                        }
                    })
                }
            });
        }
    }
};
</script>

<style>

</style>
