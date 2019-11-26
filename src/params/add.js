export default {
    config: {
        align: "left",
        labelPosition: "left",
        btnPosition: "left",
        labelWidth: "100px",
        width: "100%",
        inline: true,
        btn: [
            {
                key: "nextStep",
                show: true,
                type: "primary",
                text: "提交"
            }
        ]
    },
    data: [
        {
            label: "审核区域",
            keyName: "reviewStatus",
            defaultValue: "1",
            placeholder: "",
            type: "radio",
            border: true,
            options: [{ label: "1", labelName: "审核通过" }, { label: "2", labelName: "审核不通过" }]
        },
        {
            label: "审核意见",
            keyName: "reviewComment",
            defaultValue: "",
            placeholder: "请输入审核意见",
            type: "input",
            maxlength: 200,
            hideLink: {
                keyName: "reviewStatus",
                value: "1"
            },
            rules: [
                {
                    required: true,
                    message: "请输入审核意见",
                    trigger: "blur"
                }
            ]
        },
        {
            label: "    ",
            type: "checkbox",
            keyName: "factor",
            defaultValue: [],
            hideLink: {
                keyName: "reviewStatus",
                value: "2"
            },
            options: [
                {
                    label: "1",
                    labelName: '<span id="factorBook">保理合同</span>'
                }
            ]
        },
        {
            label: " ",
            type: "checkbox",
            keyName: "trans",
            defaultValue: [],
            hideLink: {
                keyName: "reviewStatus",
                value: "2"
            },
            options: [
                {
                    label: "1",
                    labelName: '<span id="transBook">应收账款转让协议</span>'
                }
            ],
            rules: [
                {
                    required: true,
                    message: "请阅读应收账款转让协议并勾选",
                    trigger: "change"
                }
            ]
        },
        {
            label: "下载",
            type: "noKeyName",
            text: "下载模板"
            // url: "http://www.baidu.com",
            // color: "#4285f4",
            // download: true
        },
        // {
        //     label:'合作的金融机构',
        //     keyName:'jigou',
        //     defaultValue:'',
        //     placeholder:'请选择金融机构',
        //     type:'select',
        //     options:[{
        //         label:'蚂蚁金融',
        //         value:1,
        //     }],
        //     rules:[
        //         {
        //             required: true,
        //             message: '请选择金融机构',
        //             trigger: 'blur'
        //         }
        //     ]
        // },
        // {
        //     label:'供应商名称(债权人)',
        //     keyName:'gongyinshang',
        //     defaultValue:'',
        //     placeholder:'',
        //     type:'select',
        //     filterable:true,
        //     remote:true,
        //     options:[],
        //     info:'只可向已在平台注册的供应商进行签发',
        //     rules:[{
        //         required: true,
        //         message: '请输入供应商',
        //         trigger: 'blur'
        //     }],
        //     tick:(data)=>{
        //         // this.getBankList(data)
        //     }
        // },
        // {
        //     label:'金额（元）',
        //     keyName:'account',
        //     defaultValue:'',
        //     placeholder:'',
        //     type:'input',
        //     spreadLink:{
        //         keyName:'accountBig',
        //         tick:(val)=>{
        //             return parseInt(val)*100
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
        //     label:'承诺付款日期',
        //     keyName:'date',
        //     defaultValue:'',
        //     placeholder:'',
        //     type:'datePicker',
        //     pickerOptions:{
        //         disabledDate(time) {
        //             return time.getTime() < Date.now()+ (1000*60*60*24*15)
        //         },
        //     },
        //     originDefaultValue:new Date(Date.now()+ (1000*60*60*24*15)),
        //     info:'只可签发15天以后到期的白条',
        //     rules:[
        //         {
        //             required: true,
        //             message: '请选择日期',
        //             trigger: 'blur'
        //         }
        //     ]
        // },
        // {
        //     label: "摘要",
        //     keyName: "remark",
        //     defaultValue: "",
        //     placeholder: "123",
        //     type: "input",
        //     icon: {
        //         type: "js",
        //         name: "iconweibiaoti38",
        //         fix: "prefix"
        //     },
        //     // inputType:'textarea',
        //     maxlength: 40
        //     // showWordLimit:true
        // },
        // {
        //     label: "摘要",
        //     keyName: "remark",
        //     defaultValue: "",
        //     placeholder: "123",
        //     type: "input",
        //     // inputType:'textarea',
        //     maxlength: 40,
        //     icon: {
        //         type: "css",
        //         name: "iconfont iconi-info",
        //         fix: "prefix"
        //     }
        //     // showWordLimit:true
        // },
        // {
        //     label: "法人证件号",
        //     keyName: "cetificateNo",
        //     defaultValue: "",
        //     placeholder: "请输入二代身份证号码",
        //     maxlength: 18,
        //     type: "input",
        //     rules: [
        //         {
        //             required: true,
        //             message: "请输入身份证号码",
        //             trigger: "blur"
        //         },
        //         {
        //             type: "reg",
        //             default: true,
        //             validator: "personId",
        //             trigger: "blur"
        //         }
        //     ],
        //     sub: {
        //         keyName: "cetificateType",
        //         type: "select",
        //         defaultValue: 0,
        //         slot: "append",
        //         width: "120px",
        //         options: [
        //             {
        //                 label: "二代身份证",
        //                 value: 0
        //             }
        //         ]
        //     }
        // },
        {
            label: "摘要",
            keyName: "remark",
            defaultValue: "",
            placeholder: "123",
            type: "input",
            // inputType:'textarea',
            maxlength: 40
            // showWordLimit:true
        },
        {
            label: "摘要",
            keyName: "remark",
            defaultValue: "",
            placeholder: "123",
            type: "input",
            // inputType:'textarea',
            maxlength: 40
            // showWordLimit:true
        },
        {
            label: "摘要",
            keyName: "remark",
            defaultValue: "",
            placeholder: "123",
            type: "input",
            // inputType:'textarea',
            maxlength: 40
            // showWordLimit:true
        }
    ]
};
