<template>
  <div id="app">
    <vue-form-config :params="params" @nextStep="nextStep"> </vue-form-config>
  </div>
</template>

<script>
// import params from "@/params/dbqu";
export default {
  name: "app",
  data() {
    return {
      // params: params
      params: {
        config: {
          isBottom: false,
          align: "left",
          labelPosition: "right",
          btnPosition: "center",
          labelWidth: "120px",
          width: "100%",
          inline: false,
          labelSuffix: "",
          readonly: true,
          row: 2,
          btn: [
            {
              key: "resetStep",
              show: true,
              width: "130px",
              type: "",
              text: "重置",
              icon: "iconfont icon-reset",
              size: "small",
              width: "72px"
            },
            {
              key: "nextStep",
              width: "130px",
              show: true,
              type: "primary",
              text: "搜索",
              icon: "iconfont icon-xinbaniconshangchuan-",
              width: "72px",
              size: "small"
            },
            {
              key: "saveStep",
              width: "130px",
              show: true,
              type: "primary",
              text: "导出",
              icon: "",
              width: "72px",
              size: "small"
            }
          ]
        },
        data: [
          {
            label: "操作人角色",
            keyName: "userRole",
            defaultValue: "",
            placeholder: "请选择操作人角色",
            type: "select",
            options: [],
            rules: [
              {
                required: true,
                message: "请选择操作人角色",
                trigger: "change"
              }
            ]
          },
          {
            label: "操作人手机号",
            keyName: "mobile",
            defaultValue: "",
            placeholder: "请输入手机号码",
            type: "input",
            maxlength: 11,
            // disabled:true,
            rules: [
              {
                required: true,
                message: "请输入手机号码",
                trigger: "blur"
              },
              {
                type: "reg",
                default: true,
                validator: "mobile",
                trigger: "blur"
              }
            ]
          },
          {
            label: "操作人姓名",
            keyName: "name",
            defaultValue: "",
            placeholder: "请输入操作人名称",
            type: "input",
            maxlength: 20,
            rules: [
              {
                required: true,
                message: "请输入操作人名称",
                trigger: "blur"
              },

              {
                min: 2,
                max: 20,
                message: "格式有误，请重新输入",
                trigger: "blur"
              },
              {
                default: false,
                type: "reg",
                reg: /^[\u4E00-\u9FA5\uf900-\ufa2d·]{2,20}$/,
                text: "格式有误，请重新输入",
                trigger: "blur"
              }
            ]
          },
          {
            label: "操作人证件号码",
            keyName: "cetificateNo",
            defaultValue: "",
            placeholder: "请输入证件号码",
            type: "input",
            maxlength: 18,
            sub: {
              width: "120px",
              keyName: "cetificateType",
              type: "select",
              defaultValue: 0,
              slot: "append",
              options: [
                {
                  label: "二代身份证",
                  value: 0
                }
              ]
            },
            rules: [
              {
                required: true,
                message: "请填写操作人证件号码",
                trigger: "blur"
              },
              {
                type: "reg",
                default: true,
                validator: "personId",
                trigger: "blur"
              }
            ]
          },
          {
            label: "操作人邮箱",
            keyName: "email",
            defaultValue: "",
            placeholder: "请输入操作人邮箱",
            type: "input",
            maxlength: 30,
            rules: [
              {
                type: "reg",
                default: true,
                validator: "email",
                trigger: "blur"
              }
            ]
          },
          {
            label: "企业授权书",
            keyName: "enterpriseAuthor",
            urlKeyName: "thumbnailFileURL",
            // urlKeyName: 'filePath',
            valueKeyName: "fileId",
            apiUrl: this.fileServerIp,
            defaultValue: "",
            type: "upload",
            uploadType: "image",
            uploadUrl: "",
            action: "/saas-online-server/api?apiName=uploadAccountFile",
            accept: "image/jpg,image/jpeg,image/png,.pdf",
            name: "fileList",
            limitSize: 10, //单位 M
            html: `<div class="upload-container">
                        <span>企业操作人需要上传企业的授权书才允许使用平台，授权书<span id="module-download" class="module-download">模板下载</span></span>
                        <span class="upload-message">（文件上传格式：.jpg/.jpeg/.png/.pdf，大小：10M）</span>
                    </div>`,
            rules: [
              {
                required: true,
                message: "请上传企业授权书",
                trigger: "change"
              }
            ],
            data: {
              // ...baseParam(),
              businessSceneId: this.businessSceneId,
              fileType: "A108"
              // reqId
            },
            tick: {
              before: async () => {
                debugger;
                const val = await this.deleteUrl("A108");
                // debugger
                return val;
              },
              success: () => {
                this.queryAccountFile();
              },
              error: err => {
                this.uploadError(err);
              },
              fail: res => {
                this.uploadFail(res);
              }
            }
          }
        ]
      }
    };
  },
  mounted() {},
  components: {},
  methods: {
    nextStep() {},
    setUse(keyName, key, value, paramsName = "params") {
      // debugger
      const index = this[paramsName].data.findIndex(
        item => item.keyName === keyName
      );
      if (index > -1) this[paramsName].data[index][key] = value;
      // if (index > -1) {
      //     this.$set(this[paramsName].data[index], key, value)
      // }
    }
  }
};
</script>

<style lang="less">
#app {
  width: 1500px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
