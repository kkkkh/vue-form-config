const reg = [
    {
        validator:'mobile',
        reg:/^1\d{10}$/,
        text:'请输入正确的手机号码',
    },
    {
        validator:'telephone',
        reg:/^([0]{1})(\d{2,3}-)\d{7,8}$/,
        text:'电话格式有误，请重新输入',
    },
    {
        reg:/^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/,
        text:'请输入包含数字和字母8-15位密码',
        validator:'password',
    },
    {
        reg:/^([0]{1})(\d{2,3}-)\d{7,8}$/,
        text:'传真格式有误，请重新输入',
        validator:'fax',
    },
    {
        reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        text:'邮箱格式有误，请重新输入',
        validator:'email',
    },
    {
        reg: /^[0-9]{1,35}$/,
        text:'银行卡号格式有误，请重新输入',
        validator:'bankCard',
    },
    {
        reg:/(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        text:'身份证号格式有误，请重新输入',
        validator:'personId',
    }
]
export default reg