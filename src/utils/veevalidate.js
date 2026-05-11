import { defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n';
import zh from '@vee-validate/i18n/dist/locale/zh_CN.json';
import { all } from '@vee-validate/rules';
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});


localize({ zh });
export default configure({
  generateMessage: localize(
    'zh', {
    names: {
      username: '用户名',
      password: '密码',
      confirmation: '确认密码',
      code: '验证码',
      nickname: '昵称'
    },
    messages: {
      required: ' {field}不能为空',
      email: ' {field}格式不对',
      confirmed:'两次密码输入不一致，请重输'
    },
  }
),
});

