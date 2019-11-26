#在element-ui基础上封装
#form表单
#只需要配置object，即可完成表单的所有信息

## 使用案例
```js
import Vue from 'vue'
import vueFormConfig from 'vue-form-config'
Vue.use(vueFormConfig)
```
```html
<vue-form-config 
    :params="params"
    @lastStep="lastStep"
    @saveStep="saveStep"
    @nextStep="nextStep">
</vue-form-config>
```
```js
data(){
    return {
        params:{
            config:{
                title:{
                    main:'标题',
                    sub:'副标题'
                },
                labelPosition:'right',
                labelWidth:'150px',
                width:'600px',
                align:'left',
                labelSuffix:'：',
                readonly:false,
                disabled:false,
                btnPosition:'center',
                btn:[
                    {
                        key:'lastStep',
                        show:true,
                        text:'上一步'
                    },
                    {
                        key:'nextStep',
                        show:true,
                        text:'提交',
                        novalidate:true//不验证
                    },
                    {
                        key:'saveStep',
                        show:true,
                        text:'保存',
                    },{
                        key:'resetStep',
                        show:true,
                        text:'重置'
                    }
                ],
                data:[
                    //通用input类型
                    {
                        label:'****',
                        keyName:'name',
                        defaultValue:'',
                        disabled:true,
                        maxlength:11,
                        type:'input',
                        rules:[
                            {
                                required: true,
                                message: '请输入****',
                                trigger: 'blur' 
                            },
                            { min: 1, max: 11, message:'', trigger: 'blur' },
                            {
                                type:'reg',
                                default:false,
                                reg:/[\u4e00-\u9fa5]|\(|\)/,
                                text:'公司名称输入有误，请重新输入',
                                trigger:'blur',
                            }
                        ],
                    }, 
                ]
            },
        }
    }
},
methods:{
    lastStep(){
        
    },
    nextStep(from,key,cancle){
        //from为表单值对象
        //要在ajax提交表单form后，无论成功失败
        //执行cancle(key)，消掉按钮置灰状态
    },
    saveStep(from,key,cancle){
        //from为表单值对象
        //要在ajax提交表单form后，无论成功失败
        //执行cancle(key)，消掉按钮置灰状态
    },
}

```

<!--config|传入对象|Object|--|--|---->
## Form config Attributes
参数 | 说明 | 类型| 可选值 | 默认值 | 其他
---|---|---|---|---|---
**config**|传入对象|Object|--|--|
title.main|主标题|String|--|默认不显示|无值不显示
title.sub|副标题|String|--|--|支持html
width|表单整体宽度|String|--|600px| --
align|表单整体位置|String|right/left/center|left|--
inline|行内表单模式|boolean|--|false|--
labelPosition|表单域标签的位置|String|right/left/top|right|--
labelWidth|表单域标签的宽度|String|--|150px|--
labelSuffix|表单域标签的后缀|String|--|：（中文冒号）|--
readonly|全局只读|boolean|--|false|只对input类型起作用
disabled|全局置灰<br>（不可操作）|boolean|--|false|除input类型外起作用
btnPosition|表单底部按钮位置|String|right/left/center|center|--
btn|按钮|array|--|--|只有saveStep/nextStep默认验证，<br>并返回表单数据
*key| 按钮类型 |string|lastStep/nextStep/resetStep/saveStep|--|（上一步/提交/重置/保存）
*show|按钮状态|boolean|--|--|（显示/隐藏）
*text|按钮文案|string|--|--|（自定义）
*novalidate|是否验证|boolean|--|false|设为true，nextStep/saveStep不再验证
*width|按钮宽度|string|--|--

## Form data Attributes(通用)
参数 | 说明 | 类型| 可选值 | 默认值 | 其他
---|---|---|---|---|---
**data**|传入数组|array|--|--|--
*type|表单类型|string|input<br>radio<br>checkbox<br>select<br>verifyCode<br>...|--|插件核心
*label|标签文本|string|--|--|--
*keyName|标签字段|string|--|--|--
*defaultValue|默认值|string|--|--|--
*placeholder|输入框占位文本|string|--|--|--
*maxlength|最大输入值|number|--|--|--
*minlength|最小输入值|number|--|--|--
*disabled|不可操作<br>（置灰）|boolean|--|false|--
*nodisabled<br>（全局disabled配合使用）|不置灰|boolean|--|false|全局disabled为true，单文本框不置灰，设为true
*noreadonly<br>（全局readonly配合使用）|不只读|boolean|--|false|全局readonly为true，单文本框不只读，设为true
*novisible|当前文本框显示隐藏|boolean|--|false|默认显示
*cutTitle|输入框上说明文案|string|--|--|（不支持html字符串）
*info|输入框后说明文案|string|--|--|（支持html字符串）
*width|输入框宽度|string|--|--|--
*rules|验证规则|array|--|--|支持el-ui的固定验证规则（见++rules el-ui Attributes++），<br>不支持el-ui自定义的validator，<br>自定义（见++rules 自定义 Attributes++）

### type=input
参数 | 说明 | 类型| 可选值 | 默认值 | 其他
---|---|---|---|---|---
*inputType|input类型的子类|string|text/passwaord/textarea|text|(普通输入框/密码输入框/文本域)
*showWordLimit|是否显示输入字数统计|boolean||false|配合maxLength
```js
//密码
{
    label:'登录密码',
    keyName:'password',
    defaultValue:'',
    placeholder:'请设置8-15位包含数字和字母的登录密码',
    type:'input',
    inputType:'password',
    disabled:true,
    rules:[
        {
            required: true,
            message: '请输入登录密码',
            trigger: 'blur',
        },{
            type:'reg',
            default:true,
            validator:'password',
            trigger:'blur',
        },
    ],
}, 
//确认密码类型
{
    label:'确认密码',
    keyName:'confirmPassword',
    defaultValue:'',
    placeholder:'请再次输入密码',
    type:'input',
    inputType:'password',
    rules:[
        {
            required: true,
            message: '请输入确认密码',
            trigger: 'blur'
        },{
            type:'value',
            associated:'password',
            text:'两次密码输入不一致',
            trigger:'blur',
        },
    ],
},
```
参数 | 说明 | 类型 | 可选值 | 备注
---|---|---|---|---|---
*sub|输入框携带下拉框|objct||值为一个普通select类型配参
*icon|输入框图标|object||可配合iconfont使用，需引iconfont链接
|type|类型|tring|css/js|css渲染为i标签、js渲染为svg标签
|name|图标名称|string|
|fix|图标输入框位置|string|prefix/suffix|输入框头部/输入框尾部
```js
//sub（input 带下拉框）
{
    label:'',
    keyName:'',
    defaultValue:'',
    placeholder:'',
    type:'input',
    sub:{
        keyName:'',
        type:'select',
        defaultValue:'',
        slot:'append',
        options:[
            {
                label:'***',
                value:'1'
            },{
                label:'***',
                value:'2'
            },
        ],
    },
    icon: {
        type: "css",
        name: "iconfont iconi-info",
        fix: "prefix"
    },
},
```
参数 | 说明 | 类型| 可选值  | 其他
---|---|---|---|---|---
*spreadLink|关联另一个字段,并控制其值|
||keyName|关联字段|string|
||tick|关联字段回调返回值|function|举例(val)=>{return val.toString()//进行处理}
```js
{
    label:'金额（元）',
    keyName:'amount',
    defaultValue:'',
    placeholder:'',
    type:'input',
    spreadLink:{
        keyName:'accountBig',
        tick:(val)=>{
            const value = Number(val)
            if(isNaN(value)) return ''
            return numberChineseFormat(value)//转为大写
        }
    }
}
```
参数 | 说明 | 类型| 可选值 
---|---|---|---|---|---
*hideLink|关联另一个字段,并控制其文本框显示隐藏|
||keyName|关联字段|string|
||value|关联字段隐藏的值|||
```js
{
    label: "",
    type:'',
    keyName:'commit',
    defaultValue:[],
    hideLink: {
        keyName: "reviewStatus",
        value: "2"
    },
}
```
参数 | 说明 | 类型| 可选值 
---|---|---|---|---|---
*checkLink|输入框后边添加一个控制checkbox|
||keyName|标签字段|string|
||defaultValue|默认值|string||
||label|文本|string|
||plusValue|预设勾选中返回值||
||reduceValue|预设取消勾选返回值||
||disabled|置灰|boolean|
||tick|勾选操作回调|function|

```js
checkLink: {
    label: "长期",
    keyName: "amountEnd",
    defaultValue: "",
    plusValue: "1",
    reduceValue: null,
    disabled: false,
    tick: val => {
        debugger;
    }
}
```

### type=verifyCode （验证码）
参数 | 说明 | 类型 | 默认值 | 其他
---|---|---|---|---|---
*noAssociated|是否使用关联验证字段控制|boolean|false|
*associated|关联验证字段|string||填写手机号字段,进行验证；noAssociated为true时，associated无效；为false时，有效；或者无配置，默认有效
*sendNumber|使用固定手机号码|string||noAssociated为true时，才有效；noAssociated为false，无效；或者无配置，默认无效
*imageUrl|图片验证码url|string||
*sendKeyName|回调tickCb第一个参数中字段|||用于取回手机号码的值，字段体现在tickCb第一个参数中
*tickCb|验证回调|function|function(form,success,fail)|data = {sendKeyName:手机号码value，graphCode:图片验证码value},<br>success（成功回调），<br>fail（失败回调）
```js
{
    label:'手机验证码',
    keyName:'validateCode',
    sendKeyName:'mobile',
    defaultValue:'',
    placeholder:'',
    type:'verifyCode',
    associated:'contactMobile',
    maxlength:4,
    imageUrl:()=>{
        // debugger
        return `${getUrlPath('/getGraphCode')}?token=${this.token}&graphCodeType=${registerCode.graphCodeType}`
    },
    // disabled:true,
    tickCb:(data,success,fail)=>{
        this.sendMobileCode({...data,...registerCode},success,fail)
        //data {mobile:'136*******',graphCode:'****'}
    },
},
```

### type=checkbox（多选框）
参数 | 说明 | 类型| 参考值 | 默认值
---|---|---|---|---|---
*defaultValue|默认值|array|[]||
*options|选项|array|{label:'1',labelName:'北京'，label:'2',labelName:'上海'}|label为值，labelName显示文案<br>（支持html字符串）
```js
{
    label:'',
    type:'checkbox',
    keyName:'check',
    defaultValue:['1'],
    options:[
        {
            label:'1',
            labelName:'<span>***</span>',
        },
        ...
    ],
}
```

### type=radio（单选框）
参数 | 说明 | 类型| 参考值 | 默认值 
---|---|---|---|---|---
*defaultValue|默认值|string|||
*options|选项|array|{label:'1',labelName:'北京'，label:'2',labelName:'上海'}|label为值，labelName显示文案<br>（不支持html字符串）
*border|是否有边框| boolean||false
```js
{
    label:'',
    keyName:'',
    defaultValue:'1',
    type:'radio',
    options:[{
        label:'1',
        labelName:'***',
    },{
        label:'2',
        labelName:'***',
    }],
}
```
### type=select（下拉框）
参数 | 说明 | 类型| 参考值 | 默认值 | 其他
---|---|---|---|---|---
*options|选项|array|{value:'1',label:'海淀'，label:'2',labelName:'朝阳'}|value为值，<br>label显示文案
*filterable|	是否可搜索|	boolean	||	false
*remote| 是否为远程搜索| boolean |	|false
*tick|	远程搜索方法|function|function(data){} data:{keyName:'bank'，bank:value}|	|
*slot | 输入框的下拉选择位置 |string| prepend/append | |（输入框前置内容/输入框后置内容）|用于ype="input" 下拉选择，sub参数
*link | 关联其他输入框|object|-|-|用于areaSelect地域联动
||keyName|关联字段|-||下拉选择后，关联字段输入框会置空
||tick|关联回调|-|function(val){} val为选择的值|下拉选择后，调取此回调函数
```js
{
    label:'',
    keyName:'',
    defaultValue:'',
    placeholder:'',
    type:'select',
    filterable:true,
    remote:true,
    options:[],
    tick:(data)=>{
        this.getBusinessList(data)
    }
},
```

### type=areaSelect (地域联动)
参数 | 说明 | 类型| 其他
---|---|---|---|---|---
*area|地域联动配置|array|||内部为多个select类型对象
    ||使用select属性
```js
{
    label:'注册地域',
    type:'areaSelect',
    area:[
        {
            keyName:'province',
            placeholder:'请选择省份',
            defaultValue:'',
            options:[],
            rules:[
                {
                    required: true,
                    message: '请选择省份',
                    trigger: 'blur'
                },
            ],
            link:{
                keyName:'city',
                tick:(val)=>{
                    this.getCityOpt(val)
                }
            }
        },
        {
            keyName:'city',
            placeholder:'请选择城市',
            defaultValue:'',
            options:[],
            rules:[
                {
                    required: true,
                    message: '请选择城市',
                    trigger: 'blur'
                },
            ],
        },
    ]
},
```
### type=upload（上传）
参数 | 说明 | 类型| 可选值 | 其他
---|---|---|---|---|---
uploadType |上传子类型|string|image/file|
urlKeyName|uploadType='image'上传成功图片回显使用字段，<br>uploadType='file'上传成功文件名称回显字段|string
valueKeyName|上传成功，取值使用字段|string
apiUrl|上传成功，路径服务地址|string
action|上传地址|string
name|上传文件formData，文件字段名称
data|上传其他参数|object
accept|上传类型|string||image/jpg,image/jpeg,image/png,.pdf
limitSize|上传大小（M）|number|
html|提示文案|string||（支持html字符串）
tick|上传前和上传后的回调处理函数|object|before/success/fail/error(回调函数)|（上传前/成功/失败/报错）<br />before需要返回值成功改为true,不成功为false
uploadUrl |照片回显|string|
```js
{
    label:'',
    keyName:'',
    urlKeyName:'filePath',
    valueKeyName:'fileId',
    apiUrl:this.fileServerIp,
    defaultValue:'',
    type:'upload',
    uploadType:'image',
    action:'/saas-online-server/api?apiName=uploadAccountFile',
    accept:'image/jpg,image/jpeg,image/png,.pdf',
    name:'fileList',
    limitSize:10,//单位 M
    html:'请上传',
    tick:{
        before:()=>{
            return this.example()
        },
        after:()=>{
             this.example()
        }
    },
    rules:[
        {
            required: true,
            message: '请上传',
            trigger: 'blur'
        },
    ],
    data:{
        businessSceneId:'',
        fileType:'',
        reqId:''
    },
},
```
### type=datePicker（日期）
参数 | 说明 | 类型| 可选值 |默认值
---|---|---|---|---|---
*pickerOptions|当前时间日期选择器特有的选项|object|
||disabledDate|设置禁用状态，参数为当前日期，要求返回 Boolean|
*originDefaultValue|可选，选择器打开时默认显示的时间|Date|
*dateType|日期类型|string|year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange|date
*rangeSeparator|选择范围时的分隔符|string||'至'
*startPlaceholder|范围选择时开始日期的占位内容|string||'开始日期'
*endPlaceholder|范围选择时结束日期的占位内容|string||'结束日期'
*tick|关联回调|function|function(val){} val为选择的值|选择日期后，调取此回调函数
```js
{
    label:'',
    keyName:'',
    defaultValue:'',
    placeholder:'',
    type:'datePicker',
    pickerOptions:{
        disabledDate(time) {
            return time.getTime() < Date.now()+ (1000*60*60*24*15)
        },
    },
    originDefaultValue:new Date(Date.now()+ (1000*60*60*24*15)),,
},
```
### type=text (纯文本)
参数 | 说明 | 类型| 其他
---|---|---|---|---|---
*color|纯文本文字颜色|string|默认'#414141'

### rules el-ui Attributes 
参数 | 说明 | 类型| 可选值 
---|---|---|---|---|---
required | 是否必填 |boolean|true
max|长度最大|number
min|长度最小|number
message|验证不通过，提示文案|string
trigger|验证触发事件|string|blur,change

### rules 自定义 Attributes 
参数 | 说明 | 类型| 可选值 
---|---|---|---|---|---
type|验证规则类型|string|reg/value||正则验证/值验证
default|是否使用默认正则验证|boolean|||只对reg类型有效
reg（deafult为false有效）|验证正则|regex|
validator（deafult为true有效）|默认正则表达式类型|string|mobile/telephone/password/fax/email/bankCard/personId||手机号/固话/密码/传真/电子邮件/银行卡号/身份证，内置正则验证（见++内置regex++）
associated|值验证关联字段|string|||只对value类型有效，用于验证关联字段的值，是否一致（确认密码验证使用）
associatedSign|值验证与关联字段的关联关系|string|=/>/<
text|验证不通过，提示文案|string
trigger|验证触发事件|string|blur,change

### 内置 regex 
参数 | 正则 |文案提示
---|---|---
mobile|/^1\d{10}$/|请输入正确的手机号码
telephone|/^([0]{1})(\d{2,3}-)\d{7,8}$/|电话格式有误，请重新输入
password|/^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/|请输入包含数字和字母8-15位密码
fax|/^([0]{1})(\d{2,3}-)\d{7,8}$/|传真格式有误，请重新输入
email|/^\w+([-+.]\w+)\*@\w+([-.]\w+)\*\.\w+([-.]\w+)*$/|邮箱格式有误，请重新输入
bankCard|/^\[0-9]{1,35}$/|银行卡号格式有误，请重新输入
personId|/(^\d{18}$)|(^\d{17}(\d|X|x)$)/|身份证号格式有误，请重新输入

```js
rules:[
        {
            required: true,
            message: '请输入',
            trigger: 'blur',
        },{ 
            min: 1, 
            max: 11, 
            message:'长度1-11', 
            trigger: 'blur' 
        },{
            type:'reg',
            default:true,
            validator:'mobile',
            trigger:'blur',
            text:'格式不正确',
        },{
            type:'reg',
            default:false,
            reg:/^\d{8}$/,
            trigger:'blur',
            text:'格式不正确',
        },{
            type:'value',
            associated:'password',
            text:'两次密码输入不一致',
            trigger:'blur',
        },
    ],
```
### 事件
(添加lastStep/nextStep/saveStep按钮，关联对应事件)
参数 | 说明 | 类型 | 其他
---|---|---|---|---|---
@lastStep|lastStep关联事件|function|无表单验证
@nextStep|nextStep关联事件|function|function(from,key,cancel){}<br>from为表单值对象,要在ajax提交表单form后，无论成功失败,执行cancle(key)，消掉按钮置灰状态
@saveStep|同上



### 辅助函数
```js
//配合vue开发使用
export const defaultValue = {
    methods: {
        //表单回显 *
        addFaultValue(resData, params = 'params') {
            // debugger
            this[params].data = this[params].data.map(item => {
                const val = resData[item.keyName]
                if (item.type === 'areaSelect') {
                    const itemArea = item.area.map(child => {
                        if (resData[child.keyName]) {
                            child.defaultValue = resData[child.keyName]
                            return child
                        } else {
                            return child
                        }
                    })
                    item.area = itemArea
                    return item
                } else if (val !== undefined && val !== null) {
                    item.defaultValue = val
                    return item
                } else {
                    return item
                }
            })
        },
        //表单清空 *
        clearFaultValue(params = 'params') {
            this[params].data = this[params].data.map(item => {
                if (item.type === 'areaSelect') {
                    const itemArea = item.area.map(child => {
                        child.defaultValue = ''
                        return child
                    })
                    item.area = itemArea
                    return item
                } else if (item.type === 'checkbox') {
                    item.defaultValue = []
                    return item
                } else {
                    item.defaultValue = ''
                    return item
                }
            })
        },
        //设置options
        setOptions(keyName, opts, paramsName = 'params') {
            const index = this[paramsName].data.findIndex(item => item.keyName === keyName)
            if (index > -1) this[paramsName].data[index].options = opts
        },
        //请求数据 设置options
        apiSetOptions(apiMoundle, api, params = {}, keyName, opt) {
            service[apiMoundle][api](params)// 请求方法可根据项目具体进行修改
                .then(res => {
                    if (res.resultCode === 'SUCCESS') {
                        let options = []
                        if (res.body) {
                            options = res.body.map(item => {
                                return {
                                    label: item[opt.label],
                                    value: item[opt.value]
                                }
                            })
                        }
                        this.setOptions(keyName, options)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        //搜索 远程加载 设置options
        searchSetOptions(data, params, apiName, opt, num = 0) {
            const val = data[data.keyName]
            if (val !== '' && val.length >= num) {
                product[apiName](params).then(res => {
                    if (res.body) {
                        const options = res.body.map(item => {
                            return {
                                label: item[opt.label],
                                value: item[opt.value]
                            }
                        })
                        this.setOptions(data.keyName, options)
                    } else {
                        this.setOptions(data.keyName, [])
                    }
                })
            } else {
                this.setOptions(data.keyName, [])
            }
        },
        setUse(keyName, key, value) {
            const index = this.params.data.findIndex(item => item.keyName === keyName)
            if (index > -1) this.params.data[index][key] = value
        },
        //options 回显
        dataSetoptions(keys, form) {
            keys.forEach(item => {
                const opt = {}
                if (item.type === 'select') {
                    opt.label = form[item.keyName + 'Name']
                    opt.value = form[item.keyName + 'Id']
                } else if (item.type === 'radio') {
                    opt.labelName = form[item.keyName + 'Name']
                    opt.label = form[item.keyName + 'Id']
                }
                this.setOptions(item.keyName + 'Id', [opt])
            })
        },
        //查找option 对应 label
        findLabel(keyName, value, op = { label: 'label', value: 'value' }) {
            // debugger
            const index = this.params.data.findIndex(item => item.keyName === keyName)
            const item = this.params.data[index].options.find(item => item[op.value] === value)
            return item[op.label]
        },
    }
}

```



