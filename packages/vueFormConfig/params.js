export default {
  config: {
    title: {
      align: "left"
    },
    width: "600px",
    align: "left",
    ref: "vueform",
    labelPosition: "right",
    labelWidth: "150px",
    labelSuffix: "：",
    readonly: false,
    disabled: false,
    btnPosition: "center",
    inline: false,
    isBottom: true,
    row: 1,
    btn: [
      {
        key: "lastStep",
        show: false,
        text: "上一步"
      },
      {
        key: "nextStep",
        show: false,
        text: "下一步"
      },
      {
        key: "resetStep",
        show: false,
        text: "重置"
      }
    ]
  },
  data: [
    // {
    //     label:'公司名称(全称)',
    //     keyName:'companyName',
    //     defaultValue:'',
    //     placeholder:'',
    //     type:'input',
    //     // disabled:true,
    //     rules:[
    //         {
    //             required: true,
    //             message: '请输入公司名称',
    //             trigger: 'blur'
    //         }
    //     ],
    //     fix:{
    //         type:'append',
    //         text:'人民币元',
    //     }
    // },
    // {
    //     label:'是否三证合一',
    //     keyName:'unit',
    //     defaultValue:1,
    //     placeholder:'',
    //     type:'radio',
    //     options:[{
    //         label:1,
    //         labelName:'三证合一',
    //     },{
    //         label:0,
    //         labelName:'非三证合一',
    //     }]
    // },
    // {
    //     label:'统一社会信用代码',
    //     keyName:'socialCreditCode',
    //     defaultValue:'',
    //     placeholder:'',
    //     type:'input',
    //     disabled:'true',
    // },
    // {
    //     label:'企业性质',
    //     keyName:'nature',
    //     defaultValue:1,
    //     placeholder:'',
    //     type:'select',
    //     width:'100%',
    //     options:[
    //         {
    //             label:'私营企业',
    //             value:1
    //         },
    //         {
    //             label:'国营企业',
    //             value:2
    //         },
    //     ]
    // },
    // {
    //     label:'所属行业',
    //     keyName:'field',
    //     defaultValue:1,
    //     placeholder:'',
    //     type:'select',
    //     options:[
    //         {
    //             label:'IT行业',
    //             value:1
    //         },
    //         {
    //             label:'教育行业',
    //             value:2
    //         },
    //     ],
    // },
    // {
    //     label:'实缴资本',
    //     keyName:'factCapital',
    //     defaultValue:'',
    //     placeholder:'',
    //     type:'input',
    //     sub:{
    //         keyName:'capitalType',
    //         type:'select',
    //         defaultValue:1,
    //         slot:'append',
    //         options:[
    //             {
    //                 label:'人民币',
    //                 value:1
    //             },
    //             {
    //                 label:'美元',
    //                 value:2
    //             },
    //         ],
    //     }
    // },
    // {
    //     label:'法人手机号',
    //     keyName:'phone',
    //     defaultValue:'',
    //     placeholder:'',
    //     type:'input',
    //     rules:[{
    //         required: true,
    //         message: '请输入手机号码',
    //         trigger: 'blur'
    //     },
    //     // {
    //     //     validator:(rule, value, callback) => {
    //     //         var reg = /^(\+86)?\s*1[34578]\d{9}$/;
    //     //         if (!reg.test(value)) {
    //     //             callback(new Error('请输入正确的手机号码'));
    //     //         } else {
    //     //             callback();
    //     //         }
    //     //     },
    //     //     trigger:'blur'
    //     // },
    //     {
    //         default:false,
    //         reg:/^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/,
    //         text:'请输入包含数字和字母8-15位密码',
    //         validator:'password',
    //         trigger:'blur',
    //     }
    //     // {
    //     //     default:true,
    //     //     validator:'mobile',
    //     //     trigger:'blur'
    //     // }
    //     ],
    // },
    // {
    //     label:'公司电话',
    //     keyName:'companyTelephone',
    //     defaultValue:'',
    //     placeholder:'',
    //     type:'input',
    //     rules:[
    //         // {
    //         //     required: true,
    //         //     message: '请输入电话号码',
    //         //     trigger: 'blur'
    //         // },
    //         {
    //             default:true,
    //             validator:'companyTel',
    //             trigger:'blur',
    //         }
    //     ],
    // },
    // {
    //     label:'注册地域',
    //     keyName:[],
    //     defaultValue:[],
    //     placeholder:['请选择省份','请选择城市'],
    //     type:'areaSelect',
    // },
    // {
    //     label:'验证码',
    //     keyName:'verifyCode',
    //     defaultValue:'',
    //     placeholder:'',
    //     type:'verifyCode',
    //     associated:'phone',
    //     tickCb:()=>{
    //         // eslint-disable-next-line no-console
    //         console.log('发起请求')
    //     }
    // },
  ]
};
