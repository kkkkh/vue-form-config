export const param = {
  config: {
    btnPosition: "right",
    align: "center",
    //   width: "",
    isBottom: false,
    //   inline: true,
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
    // {
    //     label: "审核区域",
    //     keyName: "reviewStatus",
    //     defaultValue: "1",
    //     placeholder: "",
    //     type: "radio",
    //     nodisabled: true,
    //     options: [{ label: "1", labelName: "审核通过" }, { label: "2", labelName: "审核不通过" }],
    //     tick: val => {
    //         debugger;
    //     }
    // },
    // {
    //     label: "审核意见",
    //     keyName: "reviewComment",
    //     defaultValue: "",
    //     placeholder: "请输入审核意见",
    //     type: "input",
    //     novisible: false,
    //     noreadonly: true,
    //     maxlength: 200,
    //     hideLink: {
    //         keyName: "reviewStatus",
    //         value: "1"
    //     },
    //     rules: [
    //         {
    //             required: true,
    //             message: "请输入审核意见",
    //             trigger: "blur"
    //         }
    //     ]
    // },
    // {
    //     label: "",
    //     cutTitle: "我已认真阅读，并同意以企业和法人身份签署以下协议：",
    //     type: "checkbox",
    //     keyName: "commit",
    //     defaultValue: [],
    //     novisible: false,
    //     hideLink: {
    //         keyName: "reviewStatus",
    //         value: "2"
    //     },
    //     options: [
    //         {
    //             label: "1",
    //             labelName: '<span id="payAgree">付款承诺函</span>'
    //         }
    //     ],
    //     rules: [
    //         {
    //             required: true,
    //             message: "请阅读付款承诺函并勾选",
    //             trigger: "change"
    //         }
    //     ]
    // },
    // {
    //     label: "",
    //     type: "checkbox",
    //     keyName: "white",
    //     defaultValue: [],
    //     novisible: false,
    //     hideLink: {
    //         keyName: "reviewStatus",
    //         value: "2"
    //     },
    //     options: [
    //         {
    //             label: "1",
    //             labelName: '<span id="whiteAgree">信条服务协议</span>'
    //         }
    //     ],
    //     rules: [
    //         {
    //             required: true,
    //             message: "请阅读信条服务协议并勾选",
    //             trigger: "change"
    //         }
    //     ]
    // },
    // {
    //     label: "",
    //     type: "checkbox",
    //     keyName: "confirm",
    //     defaultValue: [],
    //     novisible: true,
    //     cutTitle: "我已认真阅读，并同意以企业和法人身份签署以下协议：",
    //     hideLink: {
    //         keyName: "reviewStatus",
    //         value: "2"
    //     },
    //     options: [
    //         {
    //             label: "1",
    //             labelName: '<span id="signConfirm">签收明细及回执</span>'
    //         }
    //     ],
    //     rules: [
    //         {
    //             required: true,
    //             message: "请阅读签收明细及回执并勾选",
    //             trigger: "change"
    //         }
    //     ]
    // },
    // {
    //     label: "",
    //     type: "checkbox",
    //     keyName: "transfer",
    //     defaultValue: [],
    //     novisible: true,
    //     cutTitle: "我已认真阅读，并同意以企业和法人身份签署以下协议：",
    //     hideLink: {
    //         keyName: "reviewStatus",
    //         value: "2"
    //     },
    //     options: [
    //         {
    //             label: "1",
    //             labelName: '<span id="transferConfirm">转让确认函</span>'
    //         }
    //     ],
    //     rules: [
    //         {
    //             required: true,
    //             message: "请阅读转让确认函并勾选",
    //             trigger: "change"
    //         }
    //     ]
    // }
    {
      label: "注册资本（万元）",
      keyName: "companyRegisterCapital",
      defaultValue: "",
      placeholder: "请输入注册资本",
      type: "input",
      // sub: {
      //   keyName: "RMB",
      //   type: "select",
      //   defaultValue: "RMB",
      //   slot: "append",
      //   options: [
      //     {
      //       label: "人民币",
      //       value: "RMB"
      //     }
      //   ]
      // },
      // disabled:true,
      rules: [
        {
          required: true,
          message: "请输入注册资本",
          trigger: "blur"
        },
        {
          type: "reg",
          default: false,
          // validator: "mobile",
          reg: /^([1-9]\d{0,6}(\.\d{1,6})?|0\.\d{1,6})$/,
          text: "只能输入数字，整数最大7位，小数最大6位",
          // text: "手机号格式不正确",
          trigger: "blur"
        }
      ]
    }
    // {
    //     label: "企业经营到期日期",
    //     keyName: "expiryDateTaxRegistration",
    //     defaultValue: "",
    //     placeholder: "请输入日期",
    //     type: "datePicker",
    //     checkLink: {
    //         label: "长期",
    //         keyName: "expiryDateTaxRegLong",
    //         defaultValue: "1",
    //         plusValue: "1",
    //         reduceValue: null,
    //         disabled: false,
    //         tick: val => {
    //             debugger;
    //         }
    //     }
    // }
    // {
    //     label: "法人证件到期日期",
    //     keyName: "cetificateEndDate",
    //     defaultValue: "",
    //     placeholder: "请选择日期",
    //     type: "datePicker",
    //     tick: val => {
    //         debugger;
    //     },
    //     rules: [
    //         //   {
    //         //   required: true,
    //         //   message: "请选择法人证件到期日期",
    //         //   trigger: "blur"
    //         // }
    //     ],
    //     checkLink: {
    //         label: "长期",
    //         keyName: "amountEnd",
    //         defaultValue: "",
    //         plusValue: "1",
    //         reduceValue: null,
    //         disabled: false,
    //         tick: val => {
    //             debugger;
    //         }
    //     }
    // }
    // {
    //   label: "企业授权书",
    //   keyName: "enterpriseAuthor",
    //   urlKeyName: "filePath",
    //   valueKeyName: "fileId",
    //   apiUrl: this.fileServerIp,
    //   defaultValue: "111",
    //   type: "upload",
    //   uploadType: "image",
    //   uploadUrl: "",
    //   action: "/saas-online-server/api?apiName=uploadAccountFile",
    //   accept: "image/jpg,image/jpeg,image/png,.pdf",
    //   name: "fileList",
    //   limitSize: 10, //单位 M
    //   html:
    //     "企业操作人需要上传企业的授权书才允许使用平台，授权书模板下载",
    //   rules: [
    //     {
    //       required: true,
    //       message: "请上传企业授权书",
    //       trigger: "change"
    //     }
    //   ],
    //   data: {}
    // }，
    //   {
    //     label: "金额范围",
    //     keyName: "amountStart",
    //     defaultValue: "",
    //     placeholder: "请输入金额",
    //     type: "input",
    //     maxlength: 200,
    //     width: "100px",
    //     rules: [
    //       {
    //         reg: /^([1-9]\d{0,8}(\.\d{1,2})?|0\.0[1-9]|0\.[1-9]\d{0,1})$/,
    //         default: false,
    //         type: "reg",
    //         text: "请输入正确金额",
    //         trigger: "blur"
    //       }
    //     ]
    //   },
    //   {
    //     label: "-",
    //     keyName: "amountEnd",
    //     defaultValue: "",
    //     placeholder: "请输入金额",
    //     type: "input",
    //     maxlength: 200,
    //     width: "100px",
    //     rules: [
    //       {
    //         reg: /^([1-9]\d{0,8}(\.\d{1,2})?|0\.0[1-9]|0\.[1-9]\d{0,1})$/,
    //         default: false,
    //         type: "reg",
    //         text: "请输入正确金额",
    //         trigger: "blur"
    //       },
    //       {
    //         type: "value",
    //         associated: "amountStart",
    //         associatedSign: ">",
    //         text: "不能小于起始金额",
    //         trigger: "blur"
    //       }
    //     ]
    //   },
    //   {
    //     type: "areaSelect",
    //     area: [
    //       {
    //         keyName: "province",
    //         type: "select",
    //         label: "注册地域",
    //         placeholder: "请选择省份",
    //         defaultValue: "",
    //         options: [],
    //         rules: [
    //           {
    //             required: true,
    //             message: "请选择省份",
    //             trigger: "blur"
    //           }
    //         ],
    //         link: {
    //           keyName: "city",
    //           tick: val => {
    //             this.getCityOpt(val);
    //           }
    //         }
    //       },
    //   {
    //     keyName: "city",
    //     placeholder: "请选择城市",
    //     type: "select",
    //     defaultValue: "",
    //     options: [],
    //     rules: [
    //       {
    //         required: true,
    //         message: "请选择城市",
    //         trigger: "blur"
    //       }
    //     ]
    //   }
    // ]
    //   }
  ]
};
