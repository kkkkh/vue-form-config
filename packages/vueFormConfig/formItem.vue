<script>
// import { pca, pcaa } from 'area-data'; // v5 or higher
import subItem from "./subItem";
import validateCode from "./validateCode";
import ImageVerificationPop from "./imageVerificationPop";
// import 'vue-area-linkage/dist/index.css';
export default {
    components: {
        subItem,
        ImageVerificationPop
    },
    render(createElement) {
        this.createElement = createElement;
        // debugger;
        const subItemEle = createElement(subItem, {
            style: {
                display: this.item.hideLink && this.form[this.item.hideLink.keyName] === this.item.hideLink.value ? "none" : "block"
            },
            class: {
                "vue-form-item": true,
                "vue-form-code": this.item.type === "verifyCode" ? true : false
            },
            props: {
                item: this.item,
                form: this.form
            },
            scopedSlots: {
                [this.item.type]: props => {
                    // debugger;
                    return createElement(
                        "div",
                        {
                            class: {
                                "vue-form-flex": this.item.type === "verifyCode" ? true : false
                                // 'vue-form-info':this.item.info? true:false,
                            }
                        },
                        [
                            this[this.item.type](props),
                            this.item.checkLink
                                ? createElement(
                                      "el-checkbox",
                                      {
                                          props: {
                                              value:
                                                  this.form[this.item.checkLink.keyName] === this.item.checkLink.plusValue ? true : false,
                                              disabled: this.dateDisabled(this.item.checkLink)
                                          },
                                          style: {
                                              "margin-left": "14px"
                                          },
                                          on: {
                                              input: val => {
                                                  // debugger;
                                                  if (val) {
                                                      this.form[this.item.checkLink.keyName] = this.item.checkLink.plusValue;
                                                  } else {
                                                      this.form[this.item.checkLink.keyName] = this.item.checkLink.reduceValue;
                                                  }
                                                  this.item.checkLink.tick && this.item.checkLink.tick(val);
                                              }
                                          }
                                      },
                                      this.item.checkLink.label
                                  )
                                : "",
                            this.item.info
                                ? createElement("span", {
                                      domProps: {
                                          innerHTML: this.item.info
                                      },
                                      style: {
                                          "margin-left": "14px"
                                      }
                                  })
                                : ""
                        ]
                    );
                }
            }
        });
        if (this.item.type === "verifyCode") {
            return createElement("div", [
                createElement("image-verification-pop", {
                    props: {
                        imgShow: this.imgShow,
                        src: this.item.imageUrl
                    },
                    on: {
                        tick: () => {
                            this.imgShow = false;
                        },
                        chooseValue: graphCode => {
                            const form = {
                                [this.item.sendKeyName]: this.item.noAssociated ? this.item.sendNumber : this.form[this.item.associated],
                                graphCode
                            };
                            this.item.tickCb(form, this.sendSuccess, this.sendFail);
                        }
                    },
                    ref: "imageVerificationPop"
                }),
                subItemEle
            ]);
        } else {
            return subItemEle;
        }
    },
    data() {
        return {
            imgShow: false,
            validateCodeEle: ""
            // uploadUrl:'',
        };
    },
    props: {
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        item: {
            type: Object
        },
        form: {
            type: Object
        }
    },
    provide: function() {
        return {
            refValidate: this.refValidate
        };
    },
    inject: ["refValidate"],
    methods: {
        sendSuccess() {
            this.imgShow = false;
            this.$refs.validateCode.timeRun();
        },
        sendFail() {
            this.$refs.imageVerificationPop.getCode();
        },
        noKeyName({ props }) {
            const attrs = props.url
                ? {
                      href: props.url,
                      target: "_blank"
                  }
                : {};
            if (props.download) attrs.download = props.text;
            return this.createElement(
                "a",
                {
                    attrs,
                    style: {
                        "text-decoration": "none"
                    }
                },
                [
                    this.createElement(
                        "span",
                        {
                            style: {
                                color: props.color
                            }
                        },
                        props.text
                    )
                ]
            );
        },
        upload({ props }) {
            const textChild = this.createElement("div", {
                domProps: {
                    innerHTML: props.html
                }
            });
            var child;
            var bro;
            const deleteEle = this.createElement("i", {
                class: "el-icon-error",
                style: {
                    "margin-left": "6px",
                    cursor: "pointer"
                },
                on: {
                    click: () => {
                        this.form[props.keyName] = "";
                        props.uploadUrl = "";
                        // props.defaultValue = '';
                    }
                }
            });
            // debugger
            if (this.form[props.keyName]) {
                if (props.uploadType === "file") {
                    bro = this.createElement("span", {}, [props.uploadUrl, deleteEle]);
                } else if (props.uploadType === "image") {
                    // debugger;
                    child = this.createElement("img", {
                        class: {
                            avatar: true
                        },
                        domProps: {
                            src: props.uploadUrl
                        }
                    });
                }
            } else {
                if (props.uploadType === "file") {
                    // debugger
                    child = this.createElement("el-button", "上传");
                } else if (props.uploadType === "image") {
                    child = this.createElement("i", {
                        class: {
                            "el-icon-plus": true,
                            "avatar-uploader-icon": true
                        }
                    });
                }
            }
            return [
                textChild,
                bro
                    ? bro
                    : this.createElement(
                          "el-upload",
                          {
                              class: {
                                  "avatar-uploader": props.uploadType === "image" ? true : false
                              },
                              props: {
                                  action: props.action,
                                  "show-file-list": false,
                                  accept: props.accept,
                                  name: props.name,
                                  data: props.data,
                                  "on-progress": () => {
                                      //后加
                                  },
                                  "on-success": (response, file, fileList) => {
                                      // debugger
                                      if (response.resultCode === "SUCCESS") {
                                          const value = response.body;
                                          props.uploadUrl =
                                              props.uploadType === "file"
                                                  ? value[props.urlKeyName]
                                                  : props.apiUrl + value[props.urlKeyName]; //返回路径 的 字段名
                                          this.form[props.keyName] = value[props.valueKeyName]; //返回值 的 字段名
                                          this.refValidate(props.keyName);
                                          props.tick && props.tick.success();
                                      } else {
                                          props.tick && props.tick.fail(response);
                                      }
                                  },
                                  "before-upload": file => {
                                      const isLt = file.size / 1024 / 1024 < props.limitSize;
                                      if (!isLt) {
                                          this.$message.error("单个文件大小不超过" + props.limitSize + "M");
                                          return isLt;
                                      } else {
                                          if (props.tick) {
                                              return props.tick.before();
                                          } else {
                                              return isLt;
                                          }
                                      }
                                  },
                                  "on-error": err => {
                                      props.tick && props.tick.error(err);
                                  }
                              }
                          },
                          [child]
                      )
            ];
        },
        areaSelect({ props }) {
            // debugger
            return props.area.map(item => {
                return this.select({ props: item });
            });
            // return  this.createElement('area-select',{
            //     props: {
            //         disabled:props.disabled === undefined?false:props.disabled,
            //         placeholders:props.placeholder === undefined?[]:props.placeholder,
            //         data:props.data===3?pcaa:pca,
            //         type:props.valueType=== undefined?'text':props.valueType,
            //         level:props.level === undefined?1:props.level,
            //         disableLinkage:props.disableLinkage === undefined?true:props.disableLinkage,
            //         value:[],
            //         // value:[this.form[props.keyName1],this.form[props.keyName2]],
            //         size:'large',
            //     },
            //     on: {
            //         input: (event)=> {
            //             debugger
            //             this.form[props.keyName[0]]= event[0]
            //             this.form[props.keyName[1]]= event[1]
            //         }
            //     },
            // })
        },
        text({ props }) {
            return this.createElement("div", {
                style: {
                    color: props.color ? props.color : "#414141"
                },
                domProps: {
                    innerHTML: this.form[props.keyName]
                }
            });
        },
        verifyCode({ props }) {
            return [
                this.input({ props }),
                this.createElement(validateCode, {
                    props: {
                        form: this.form,
                        associated: props.associated,
                        noAssociated: props.noAssociated,
                        imgShow: this.imgShow
                    },
                    ref: "validateCode",
                    on: {
                        tick: () => {
                            this.imgShow = true;
                            this.$refs.imageVerificationPop.getCode();
                        }
                    }
                })
            ];
        },
        dateDisabled(props) {
            if ((this.disabled || props.disabled) && !props.nodisabled) {
                return true;
            } else {
                return false;
            }
        },
        datePicker({ props }) {
            return this.createElement("el-date-picker", {
                props: {
                    type: !props.dateType ? "date" : props.dateType,
                    value: this.form[props.keyName],
                    disabled: this.dateDisabled(props),
                    "value-format": props.valueFormat ? props.valueFormat : "yyyy-MM-dd",
                    "picker-options": props.pickerOptions,
                    "default-value": props.originDefaultValue,
                    "range-separator": !props.rangeSeparator ? "至" : props.rangeSeparator,
                    "start-placeholder": !props.startPlaceholder ? "开始日期" : props.startPlaceholder,
                    "end-placeholder": !props.endPlaceholder ? "结束日期" : props.endPlaceholder
                },
                attrs: {
                    placeholder: props.placeholder ? props.placeholder : ""
                },
                on: {
                    input: val => {
                        // debugger
                        this.form[props.keyName] = val;
                        props.tick && props.tick(val);
                    }
                }
            });
        },
        input({ props }) {
            // debugger
            let icon;
            if (props.icon && props.icon.type === "js") {
                icon = this.createElement(
                    "svg",
                    {
                        slot: props.icon.fix,
                        class: "icon ",
                        attrs: {
                            "aria-hidden": true,
                            style: `fill:${props.icon.color ? props.icon.color : "#c0c4cd"}`
                        }
                    },
                    [
                        this.createElement("use", {
                            attrs: {
                                "xlink:href": "#" + props.icon.name
                            }
                        })
                    ]
                );
            } else if (props.icon && props.icon.type === "css") {
                icon = this.createElement("i", {
                    slot: props.icon.fix,
                    class: props.icon.name,
                    attrs: {
                        style: `color:${props.icon.color ? props.icon.color : "#c0c4cd"}`
                    }
                });
            }
            return this.createElement(
                "el-input",
                {
                    props: {
                        readonly: this.readonly && !props.noreadonly ? true : false,
                        value: this.form[props.keyName],
                        disabled: props.disabled ? true : false,
                        type: props.inputType ? props.inputType : "text"
                    },
                    attrs: {
                        width: props.width ? props.width : "auto",
                        placeholder: props.placeholder ? props.placeholder : "",
                        maxlength: props.maxlength ? props.maxlength : "",
                        minlength: props.minlength ? props.minlength : "",
                        "show-word-limit": props.showWordLimit ? true : false
                    },
                    on: {
                        input: val => {
                            this.form[props.keyName] = props.inputType === "textarea" ? val : val.trim();
                            if (props.spreadLink) {
                                this.form[props.spreadLink.keyName] = props.spreadLink.tick(val);
                            }
                        },
                        blur: () => {
                            // debugger
                            if (props.blur && props.blur.status && this.refValidate(props.keyName)) {
                                // debugger
                                props.blur.cb(this.form[props.keyName]);
                            }
                        }
                    }
                },
                [icon, props.sub ? this.select({ props: props.sub }) : ""]
            );
            // <template slot="append">.com</template>
            // [
            //     createElement('i',{
            //         // class:{
            //         //     'el-input__icon':props.fix.icon,
            //         //     [props.fix.iconClass]:props.icon?true:false
            //         // },
            //         props:{
            //             slot:props.fix.type,
            //         }
            //     },props.fix.text)
            // ])
        },
        checkbox({ props }) {
            // debugger
            return this.createElement(
                "el-checkbox-group",
                {
                    props: {
                        value: this.form[props.keyName] || [],
                        disabled: (this.disabled || props.disabled) && !props.nodisabled ? true : false
                    },
                    on: {
                        input: event => {
                            this.form[props.keyName] = event;
                        }
                    }
                },
                props.options.map((optItem, index) => {
                    // debugger
                    return this.createElement(
                        "el-checkbox",
                        {
                            props: {
                                label: optItem.label,
                                key: optItem.label
                            }
                        },
                        [
                            this.createElement("span", {
                                domProps: {
                                    innerHTML: optItem.labelName
                                }
                            })
                        ]
                    );
                })
            );
        },
        radio({ props }) {
            return props.options.map((optItem, index) => {
                return this.createElement(
                    "el-" + props.type,
                    {
                        props: {
                            value: this.form[props.keyName],
                            key: index,
                            label: optItem.label,
                            border: props.border ? true : false,
                            disabled: (this.disabled || props.disabled) && !props.nodisabled ? true : false
                        },
                        on: {
                            input: event => {
                                this.form[props.keyName] = event;
                                props.tick && props.tick(event);
                            }
                        }
                    },
                    optItem.labelName
                );
            });
        },
        select({ props }) {
            return this.createElement(
                "el-select",
                {
                    style: {
                        width: props.width
                    },
                    class: {
                        subSlot: props.slot ? true : false
                    },
                    attrs: {
                        placeholder: props.placeholder ? props.placeholder : ""
                        // clearable:props.clearable?true:false,
                    },
                    props: {
                        disabled: props.disabled ? true : false,
                        value: this.form[props.keyName],
                        filterable: props.filterable ? true : false,
                        remote: props.remote ? true : false,
                        disabled: (this.disabled || props.disabled) && !props.nodisabled ? true : false,
                        clearable: props.clearable ? true : false,
                        "remote-method": val => {
                            // this.form[props.keyName]= val
                            console.log(val, "remote-method");
                            const data = {
                                keyName: props.keyName,
                                [props.keyName]: val
                            };
                            props.tick(data);
                        }
                    },

                    on: {
                        change: event => {
                            // debugger
                            // console.log(this.form.city)
                            // console.log(this.form)
                            // debugger
                            // console.log(event,'change')
                            this.form[props.keyName] = event;
                            if (props.link) {
                                if (props.link.keyName) this.form[props.link.keyName] = "";
                                props.link.tick(event);
                            }
                        }
                    },
                    slot: props.slot
                },
                props.options.map((optItem, index) => {
                    return this.createElement("el-option", {
                        props: {
                            value: optItem.value,
                            label: optItem.label
                        }
                    });
                })
            );
        }
    }
};
</script>

<style lang="less">
.vue-form-item {
    svg {
        width: 16px;
        height: 40px;
    }
    .delete-icon {
        width: 10px;
        height: 10px;
        background-color: #ef3232;
        color: #fff;
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
    }
    .vue-form-flex {
        width: 100%;
        display: flex;
        line-height: 40px;
        align-items: center;
        height: 40px;
        //     justify-content: space-between;
    }
    .subSlot {
        width: 100px;
        // width:auto;
    }
    // .area-select{
    //     height: 40px;
    //     line-height:26px;
    //     margin:0 20px 0 0 !important;
    // }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
.vue-form-code {
    .el-form-item__content {
        display: flex;
        .vue-form-flex {
            width: 100%;
            display: flex;
            line-height: 40px;
            align-items: center;
            height: 40px;
        }
    }
    .el-input {
        margin-right: 20px;
        // min-width:200px;
    }
}
</style>
