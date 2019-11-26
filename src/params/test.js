export default {
    config: {
        // title:{
        //     main:'基本信息'
        // },
        btnPosition: "right",
        align: "center",
        width: "100%",
        // inline: true,
        btn: [
            {
                key: "nextStep",
                show: true,
                type: "primary",
                text: "下一步",
                disabled: false
                // novalidate:true
            },
            {
                key: "resetStep",
                show: true,
                type: "primary",
                text: "重置",
                disabled: false
            }
        ]
        // readonly:true,
        // disabled:true,
    },
    data: [
        {
            type: "areaSelect",
            area: [
                {
                    keyName: "province",
                    type: "select",
                    label: "注册地域",
                    placeholder: "请选择省份",
                    defaultValue: "",
                    options: [],
                    rules: [
                        {
                            required: true,
                            message: "请选择省份",
                            trigger: "blur"
                        }
                    ],
                    link: {
                        keyName: "city",
                        tick: val => {
                            this.getCityOpt(val);
                        }
                    }
                },
                {
                    keyName: "city",
                    placeholder: "请选择城市",
                    defaultValue: "",
                    options: [],
                    type: "select",
                    rules: [
                        {
                            required: true,
                            message: "请选择城市",
                            trigger: "blur"
                        }
                    ]
                }
            ]
        }
        // {
        //     label: "开户行支行",
        //     keyName: "subbranch",
        //     defaultValue: "123213",
        //     type: "text"
        // },
        // {
        //     label:'开户行支行',
        //     keyName:'subbranch',
        //     defaultValue:'',
        //     placeholder:'请输入开户支行名称（至少四个汉字）',
        //     type:'select',
        //     width:'100%',
        //     clearable:true,
        //     options:[],
        //     rules:[{
        //         required: true,
        //         message: '请输入开户银行',
        //         trigger: 'change'
        //     }],
        // },
        // {
        //     width:'400px',
        //     // inputType:'password',
        //     label: "汉字",
        //     keyName: "namek",
        //     defaultValue: "",
        //     placeholder: "",
        //     type: "input",
        //     // spreadLink:{
        //     //     keyName:'name',
        //     //     tick:(val)=>{
        //     //         return val+""+"大写"
        //     //     }
        //     // }
        // },
        // {
        //     label: "数字",
        //     keyName: "name",
        //     defaultValue: "",
        //     // disab
        //     maxlength: 11,
        //     type: "datePicker",
        //     dateType: "daterange"
        // }
        // {
        //     label: "审核意见",
        //     keyName: "reviewComment",
        //     defaultValue: "",
        //     placeholder: "",
        //     type: "input",
        //     novisible:false,
        //     noreadonly:true,
        //     hideLink: {
        //         keyName: "reviewStatus",
        //         value: "1"
        //     },
        //     rules:[{
        //         required: true,
        //         message: '请输入审核意见',
        //         trigger: 'change'
        //     }],
        // },
        // {
        //     label: "",
        //     cutTitle:'我已认真阅读，并同意以企业和法人代表个人身份签署以下协议：',
        //     type:'checkbox',
        //     keyName:'commit',
        //     defaultValue:[],
        //     hideLink: {
        //         keyName: "reviewStatus",
        //         value: "2"
        //     },
        //     options:[
        //         {
        //             label:'1',
        //             labelName:'<span id="payAgreeBook">付款承诺书</span>',
        //         },
        //     ],
        //     rules:[
        //         {
        //             required: true,
        //             message: '请阅读付款承诺书并勾选',
        //             trigger: 'change'
        //         }
        //     ],
        // },
        // {
        //     label: "",
        //     type:'checkbox',
        //     keyName:'white',
        //     defaultValue:[],
        //     hideLink: {
        //         keyName: "reviewStatus",
        //         value: "2"
        //     },
        //     options:[
        //         {
        //             label:'1',
        //             labelName:'<span>白条服务协议</span>',
        //         },
        //     ],
        //     rules:[
        //         {
        //             required: true,
        //             message: '请阅读白条服务协议并勾选',
        //             trigger: 'blur'
        //         }
        //     ],
        // },
        // {
        //     label:'金额（元）',
        //     keyName:'amount',
        //     defaultValue:'2132132',
        //     placeholder:'请输入债权金额',
        //     type:'input',
        //     spreadLink:{
        //         keyName:'accountBig',
        //         tick:(val)=>{
        //             const value = Number(val)
        //             if(isNaN(value)) return ''
        //             return value+'sss'
        //         }
        //     },
        // },
        // {
        //     label:'大写金额（元）',
        //     keyName:'accountBig',
        //     disabled:true,
        //     defaultValue:'',
        //     placeholder:'',
        //     type:'input',
        // },
        // {
        //     label:'金额（元）',
        //     keyName:'amount',
        //     defaultValue:'2222',
        //     placeholder:'请输入债权金额',
        //     type:'input',
        //     spreadLink:{
        //         keyName:'accountBig',
        //         tick:(val)=>{
        //             // debugger
        //             const value = Number(val)
        //             // console.log(isNaN(val))
        //             if(isNaN(value)) return ''
        //             // return numberChineseFormat(value)
        //             return value * 11
        //         }
        //     },
        //     rules:[
        //         {
        //             required: true,
        //             message: '请选择金额',
        //             trigger: 'blur'
        //         }
        //     ]
        // },
        // {
        //     label:'大写金额（元）',
        //     keyName:'accountBig',
        //     disabled:true,
        //     defaultValue:'',
        //     placeholder:'',
        //     type:'input',
        // },
        // {
        //     label:'开户行支行',
        //     keyName:'subbranch',
        //     defaultValue:'',
        //     placeholder:'请输入开户支行名称（至少四个汉字）',
        //     type:'select',
        //     width:'100%',
        //     clearable:true,
        //     options:[{
        //         label:"1",
        //         value:1
        //     }],
        //     rules:[{
        //         required: true,
        //         message: '请输入开户银行',
        //         trigger: 'change'
        //     }],
        // },
        // {
        //     label:'开户行支行',
        //     keyName:'subbranch',
        //     defaultValue:'',
        //     placeholder:'请输入开户支行名称（至少四个汉字）',
        //     type:'select',
        //     width:'100%',
        //     clearable:true,
        //     options:[{
        //         label:"1",
        //         value:1
        //     }],
        //     rules:[{
        //         required: true,
        //         message: '请输入开户银行',
        //         trigger: 'blur'
        //     }],
        //     novisible:true,
        // },
        // {
        //     label:'注册手机号',
        //     keyName:'contactMobile',
        //     maxlength:15,
        //     defaultValue:'',
        //     placeholder:'请输入联系人手机号码',
        //     type:'input',
        //     // disabled:true,
        //     rules:[
        //         {
        //             required: true,
        //             message: '请输入联系人手机号码',
        //             trigger: 'blur'
        //         },{
        //             type:'reg',
        //             default:true,
        //             validator:'mobile',
        //             trigger:'blur',
        //         }
        //     ],
        // },
        // {
        //     label:'手机验证码',
        //     keyName:'validateCode',
        //     sendKeyName:'mobile',
        //     defaultValue:'',
        //     placeholder:'请输入验证码',
        //     type:'verifyCode',
        //     associated:'contactMobile',
        //     imageUrl:()=>{
        //         // debugger
        //         // return `${getUrlPath('/getGraphCode')}?token=${this.token}&graphCodeType=${registerCode.graphCodeType}`
        //     },
        //     // disabled:true,
        //     tickCb:(data,success,fail)=>{
        //         this.sendMobileCode({...data,...registerCode},success,fail)
        //     },
        //     // info:'215362713',
        //     rules:[
        //         {
        //             required: true,
        //             message: '请输入验证码',
        //             trigger: 'blur'
        //         }
        //     ],
        // },
        // {
        //     label:'企业名称(全称)',
        //     keyName:'companyName',
        //     defaultValue:'',
        //     // disabled:true,
        //     placeholder:'请输入企业名称(全称)',
        //     valueFormat:'yyyy-MM-dd',
        //     type:'datePicker',
        //     rules:[
        //         {
        //             required: true,
        //             message: '请选择省份',
        //             trigger: 'blur'
        //         },
        //       ],
        //     checkLink:{
        //         linkName:'companyName',
        //         value:false,
        //         label:'永久',
        //         mValue:new Date(Date.now()+100*(365*24*60*60*1000))//加一个转换时间的函数
        //     }
        //     // sub:{
        //     //     keyName:'capitCurrency',
        //     //     type:'select',
        //     //     defaultValue:'RMB',
        //     //     slot:'append',
        //     //     options:[
        //     //         {
        //     //             label:'人民币',
        //     //             value:'RMB'
        //     //         },
        //     //     ],
        //     // }
        // },
        // {
        //   label:'时间',
        //   keyName:'date',
        //   defaultValue:'2019-01-01',
        //   valueFormat:'yyyy-MM-dd',
        //   // disabled:true,
        //   placeholder:'请输入企业名称(全称)',
        //   type:'datePicker',
        // },
        // {
        //   label:'审核',
        //   keyName:'shenhe',
        //   // disabled:true,
        //   defaultValue:0,
        //   type:'radio',
        //   options:[
        //     {
        //       label:1,
        //       labelName:'同意',
        //     },{
        //       label:0,
        //       labelName:'不同意',
        //     }
        //   ]
        // },
        // {
        //     cutTitle:'发票邮寄信息：',
        //   label:'意见',
        //   keyName:'remark',
        //   defaultValue:'',
        //   placeholder:'请输入企业名称(全称)',
        //   type:'input',
        //   noreadonly:true,
        //   hideLink:{
        //     keyName:'shenhe',
        //     value:1
        //   }
        // },
        // {
        //   label:'意见',
        //   keyName:'remark',
        //   defaultValue:'',
        //   placeholder:'请输入企业名称(全称)',
        //   type:'input',
        //   noreadonly:true,
        //   hideLink:{
        //     keyName:'shenhe',
        //     value:1
        //   }
        // },
        // {
        //     cutTitle:'发票邮寄信息：',
        //     label:'注册地域',
        //     type:'areaSelect',
        //     area:[
        //         {
        //             keyName:'province',
        //             placeholder:'请选择省份',
        //             defaultValue:'',
        //             options:[],
        //             rules:[
        //                 {
        //                     required: true,
        //                     message: '请选择省份',
        //                     trigger: 'blur'
        //                 },
        //             ],
        //             link:{
        //                 keyName:'city',
        //                 tick:(val)=>{
        //                     this.getCityOpt(val)
        //                 }
        //             }
        //         },
        //         {
        //             keyName:'city',
        //             placeholder:'请选择城市',
        //             defaultValue:'',
        //             options:[],
        //             rules:[
        //                 {
        //                     required: true,
        //                     message: '请选择城市',
        //                     trigger: 'blur'
        //                 },
        //             ],
        //         },
        //     ]
        // },
        // {
        //     type:'checkbox',
        //     keyName:'check',
        //     defaultValue:[],
        //     options:[
        //         {
        //             label:'1',
        //             labelName:'<span>sasadds</span>',
        //         },
        //     ],
        //     // rules:[
        //     //     {
        //     //         required: true,
        //     //         message: '请输入验证码',
        //     //         trigger: 'blur'
        //     //     }
        //     // ],
        // },
    ]
};
