export const param = {
  params: {
    config: {
      align: "left",
      // inline: true,
      width: "100%",
      // labelWidth: "auto",
      // labelSuffix: "",
      // isBottom: false,
      // align: "left",
      // labelPosition: "left",
      // btnPosition: "center",
      labelWidth: "150px",
      labelSuffix: "",
      // disabled: true,
      // width: "100%",
      // inline: true,
      // labelSuffix: "",
      btn: [
        {
          key: "nextStep",
          text: "查询",
          show: true
        }
      ]
    },
    data: [
      // {
      //   label: "审核区域",
      //   keyName: "reviewStatus",
      //   defaultValue: "1",
      //   placeholder: "",
      //   type: "radio",
      //   border: true,
      //   options: [
      //     { label: "1", labelName: "审核通过" },
      //     { label: "2", labelName: "审核不通过" },
      //     { label: "3", labelName: "审核*****" }
      //   ],
      //   rules: [
      //     {
      //       required: true,
      //       message: "请选择开始时间",
      //       trigger: "change"
      //     }
      //   ]
      // },
      {
        // cutTitle: "明细信息",
        label: "使用方式",
        keyName: "sceneType",
        defaultValue: "",
        type: "select",
        novisible: false,
        options: [{ label: 1, value: 1 }],
        spreadLink: {
          keyName: "relevantEnterpriseName",
          tick: () => {
            return 99;
          }
        }
      },
      {
        label: "额度关联企业名称",
        keyName: "relevantEnterpriseName",
        defaultValue: "",
        type: "input",
        novisible: false
      }
      // {
      //   label: "信条编号",
      //   keyName: "blankNoteNo",
      //   defaultValue: "",
      //   type: "input",
      //   novisible: false
      // },
      // {
      //   label: "额度范围(元)",
      //   keyName: "minQuotaAmount",
      //   defaultValue: "",
      //   type: "input",
      //   novisible: false
      // },
      // {
      //   label: "—",
      //   keyName: "maxQuotaAmount",
      //   defaultValue: "",
      //   type: "input",
      //   novisible: false
      // },
      // {
      //   label: "变更日期范围",
      //   keyName: "Date",
      //   defaultValue: "",
      //   type: "datePicker",
      //   novisible: false,
      //   dateType: "daterange"
      // }
      // {
      //   type: "areaSelect",
      //   area: [
      //     {
      //       keyName: "start",
      //       type: "datePicker",
      //       label: "生效时间",
      //       placeholder: "开始时间",
      //       defaultValue: "",
      //       rules: [
      //         {
      //           required: true,
      //           message: "请选择开始时间",
      //           trigger: "change"
      //         }
      //       ]
      //     },
      //     {
      //       keyName: "end",
      //       type: "datePicker",
      //       label: "-",
      //       placeholder: "结束时间",
      //       defaultValue: "",
      //       disabled: false,
      //       rules: [
      //         {
      //           required: true,
      //           message: "请选择结束时间",
      //           trigger: "change"
      //         }
      //       ],
      //       checkLink: {
      //         label: "长期",
      //         keyName: "expiryDateTaxRegLong",
      //         defaultValue: "1",
      //         plusValue: "1",
      //         reduceValue: null,
      //         disabled: false,
      //         tick: val => {
      //           // debugger;
      //           // if (val) {
      //           //   this.setUse("end", "disabled", true);
      //           // } else {
      //           //   this.setUse("end", "disabled", false);
      //           // }
      //         }
      //       }
      //     }
      //   ]
      // }
      // {
      //   label: "企业经营到期日期",
      //   keyName: "expiryDateTaxRegistration",
      //   defaultValue: "",
      //   placeholder: "请输入日期",
      //   type: "datePicker",
      //   disabled: false,
      //   rules: [],
      //   tick: val => {
      //     // debugger
      //     if (val) {
      //       this.setUse(
      //         "expiryDateTaxRegistration",
      //         "disabled",
      //         true,
      //         "checkLink"
      //       );
      //     } else {
      //       this.setUse(
      //         "expiryDateTaxRegistration",
      //         "disabled",
      //         false,
      //         "checkLink"
      //       );
      //     }
      //   },
      //   checkLink: {
      //     label: "长期",
      //     keyName: "expiryDateTaxRegLong",
      //     defaultValue: "",
      //     plusValue: "1",
      //     reduceValue: null,
      //     disabled: false,
      //     tick: val => {
      //       if (val) {
      //         this.setUse("expiryDateTaxRegistration", "disabled", true);
      //       } else {
      //         this.setUse("expiryDateTaxRegistration", "disabled", false);
      //       }
      //     }
      //   }
      // }
      // {
      //   cutTitle: "附件文档",
      //   label: "123",
      //   keyName: "fileType",
      //   apiUrl: "1234123213",
      //   defaultValue: "111111111111",
      //   type: "upload",
      //   uploadType: "file",
      //   action: `/pems-server/v1/contracts//files`,
      //   accept: "image/jpg,image/jpeg,image/png,.pdf",
      //   name: "file",
      //   limitSize: 10, //单位 M
      //   uploadUrl: "1234123213",
      //   uploadProp: {},
      //   tick: {
      //     look: val => {
      //       debugger;
      //     },
      //     delete: id => {
      //       debugger;
      //       // this.deleteId.call(this, {
      //       //   id,
      //       //   fileType: "Files::" + fileType
      //       // });
      //     },
      //     heighSuccess: (response, file, fileList) => {
      //       return this.success.call(this, response, fileType);
      //     }
      //   },
      //   data: {
      //     fileType: "Files::"
      //   }
      // }
    ]
  }
};
