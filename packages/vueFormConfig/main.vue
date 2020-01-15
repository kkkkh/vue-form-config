<template>
  <div
    :class="{
      'vue-form-container': true,
      'vue-form-bottom': defaultConfig.isBottom
    }"
  >
    <!-- <h3>{{defaultConfig.title}}</h3> -->
    <title-header :title="defaultConfig.title"></title-header>
    <el-form
      :inline="defaultConfig.inline"
      :style="`width:${defaultConfig.width};${align}`"
      class="vue-form"
      :model="form"
      :ref="defaultConfig.ref"
      :label-width="defaultConfig.labelWidth"
      :label-suffix="defaultConfig.labelSuffix"
      :inline-message="false"
      :label-position="defaultConfig.labelPosition"
    >
      <div v-if="init">
        <div
          :class="['form-item', defaultConfig.inline ? 'form-item-inline' : '']"
          v-for="(item, index) in params.data"
          :key="index"
        >
          <div
            class="cut-title"
            v-if="item.cutTitle && !item.novisible && !cutTitleVisible(item)"
          >
            <h2>{{ item.cutTitle }}</h2>
          </div>
          <div
            :class="[
              'form-item-area',
              defaultConfig.inline ? 'form-item-area-inline' : ''
            ]"
            v-if="item.type === 'areaSelect'"
          >
            <div v-for="(area, areaIndex) in item.area" :key="areaIndex">
              <vue-form-item
                :class="`vue-form-item-${area.keyName}`"
                v-if="!area.novisible && !cutTitleVisible(area)"
                :item="area"
                :form="form"
                :readonly="defaultConfig.readonly"
                :disabled="defaultConfig.disabled"
              >
              </vue-form-item>
            </div>
          </div>
          <div v-else>
            <vue-form-item
              :class="`vue-form-item-${item.keyName}`"
              v-if="!item.novisible && !cutTitleVisible(item)"
              :item="item"
              :form="form"
              :readonly="defaultConfig.readonly"
              :disabled="defaultConfig.disabled"
            >
            </vue-form-item>
          </div>
        </div>
        <div
          :style="`text-align:${defaultConfig.btnPosition}`"
          :class="[defaultConfig.inline ? 'form-btn-inline' : '']"
        >
          <el-button
            :style="item.width ? 'width:' + item.width : 'width:auto'"
            :type="item.type"
            v-for="(item, index) in defaultConfig.btn"
            v-show="item.show"
            :key="index"
            :disabled="disabledObj[item.key] ? true : false"
            @click="btnHandle(item.key, item.novalidate)"
          >
            {{ item.text }}
          </el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import vueFormItem from "./formItem";
import titleHeader from "./header";
import defaultParams from "./params";
// import { setTimeout } from 'timers';
export default {
  name: "vue-form-config",
  props: {
    params: {
      type: Object,
      default: () => {
        return defaultParams;
      }
    }
  },
  computed: {
    align() {
      // debugger
      if (!this.defaultConfig.inline) {
        return this.defaultConfig.align === "center"
          ? "margin:0 auto"
          : this.defaultConfig.align === "right"
          ? "margin:0 0 0 auto"
          : "";
      } else {
        return `text-align:${this.defaultConfig.align}`;
      }
    },
    defaultConfig() {
      const obj = {};
      // debugger
      for (let key in defaultParams.config) {
        // debugger
        if (this.params.config[key] === undefined) {
          obj[key] = defaultParams.config[key];
        } else {
          obj[key] = this.params.config[key];
        }
      }
      return obj;
    },
    dataStore() {
      return JSON.parse(JSON.stringify(this.params.data));
    }
  },
  components: {
    vueFormItem,
    titleHeader
  },
  data() {
    return {
      form: {},
      disabledObj: {
        nextStep: false,
        saveStep: false
      },
      init: false
    };
  },
  mounted() {
    // debugger
    // this.$nextTick(()=>{
    // setTimeout(()=>{
    //     this.params.data.forEach((item)=>{
    //         // if(item.type === 'areaSelect'){//省市
    //         //         item.keyName.forEach((name,index)=>{
    //         //             if(item.defaultValue.length > 0){
    //         //                 this.$set(this.form,name,item.defaultValue[index]);
    //         //             }else{
    //         //                 this.$set(this.form,name,'')
    //         //             }
    //         //         })
    //         // }else{
    //         if(item.type === 'areaSelect'){//省市
    //             item.area.forEach((child)=>{
    //                 this.$set(this.form,child.keyName,child.defaultValue);
    //             })
    //         }else{
    //             this.$set(this.form,item.keyName,item.defaultValue);
    //         }
    //         if(item.sub) this.$set(this.form,item.sub.keyName,item.sub.defaultValue);
    //     })
    // },1000)
    this.updateForm();
    this.init = true;
    // })
  },
  provide: function() {
    return {
      refValidate: this.refValidate
    };
  },
  watch: {
    dataStore: {
      handler: function(newVal, oldVal) {
        // debugger;
        for (let i = 0, len = newVal.length; i < len; i++) {
          //这里转为json字符串，作对比，
          //例如日期值为数组，对数组的转化处理，
          //特此说明
          const newVlaue = JSON.stringify(newVal[i].defaultValue);
          const oldVlaue = JSON.stringify(oldVal[i].defaultValue);
          if ((newVal[i] && !oldVal[i]) || newVlaue !== oldVlaue) {
            // debugger;
            this.updateForm();
            break;
          }
        }
      },
      deep: true
    }
  },
  methods: {
    cutTitleVisible(item) {
      if (item.hideLink) {
        if (item.hideLink.type == undefined || item.hideLink.type === "hide") {
          return this.form[item.hideLink.keyName] === item.hideLink.value;
        } else if (item.hideLink.type === "show") {
          return this.form[item.hideLink.keyName] !== item.hideLink.value;
        } else {
          return false;
        }
      } else {
        return false;
      }
      // return (
      //   item.hideLink &&
      //   item.hideLink.value === this.form[item.hideLink.keyName]
      // );
    },
    updateForm() {
      // debugger;
      this.params.data.forEach(item => {
        // debugger;
        if (item.type === "noKeyName") return;
        if (item.type === "areaSelect") {
          //省市
          item.area.forEach(child => {
            this.$set(this.form, child.keyName, child.defaultValue);
            if (child.checkLink)
              this.$set(
                this.form,
                child.checkLink.keyName,
                child.checkLink.defaultValue
              );
          });
        } else {
          this.$set(this.form, item.keyName, item.defaultValue);
        }
        if (item.sub) {
          this.$set(this.form, item.sub.keyName, item.sub.defaultValue);
        } else if (item.checkLink) {
          this.$set(
            this.form,
            item.checkLink.keyName,
            item.checkLink.defaultValue
          );
        }
      });
    },
    refValidate(keyName) {
      // debugger
      let validaterRes;
      this.$refs[this.defaultConfig.ref].validateField(keyName, res => {
        if (res) {
          validaterRes = false;
        } else {
          validaterRes = true;
        }
      });
      return validaterRes;
    },
    btnHandle(type, novalidate) {
      this[type](type, novalidate);
    },
    lastStep() {
      this.$emit("lastStep");
    },
    nextStep(key, novalidate) {
      if (novalidate) {
        this.disabledObj[key] = true;
        this.$emit("nextStep", this.form, key, this.cancelDisabled);
      } else {
        this.$refs[this.defaultConfig.ref].validate(valid => {
          if (valid) {
            // debugger
            this.disabledObj[key] = true;
            this.$emit("nextStep", this.form, key, this.cancelDisabled);
          } else {
            return false;
          }
        });
      }
    },
    saveStep(key, novalidate) {
      if (novalidate) {
        this.disabledObj[key] = true;
        this.$emit("saveStep", this.form, key, this.cancelDisabled);
      } else {
        this.$refs[this.defaultConfig.ref].validate(valid => {
          if (valid) {
            this.disabledObj[key] = true;
            this.$emit("saveStep", this.form, key, this.cancelDisabled);
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      }
    },
    cancelDisabled(key) {
      this.disabledObj[key] = false;
    },
    resetStep() {
      // debugger
      this.$refs[this.defaultConfig.ref].resetFields();
    }
  }
};
</script>

<style lang="less">
.vue-form-container {
  &.vue-form-bottom {
    padding-bottom: 20px;
  }
  .form-item-area {
    display: flex;
    &.form-item-area-inline {
      display: inline-block;
      div {
        display: inline-block;
      }
    }
    // flex-grow: 1;
    // > div:first-child {
    //   .el-form-item {
    //     display: flex !important;
    //   }
    //   .el-form-item__label {
    //     flex-shrink: 0;
    //   }
    //   .el-form-item__content {
    //     margin-left: 0 !important;
    //   }
    // }
    > div + div {
      flex-grow: 1;
      flex-shrink: 1;
      .el-form-item__label {
        padding: 0 12px;
        text-align: center;
        width: auto !important;
        &::before {
          content: "" !important;
          margin-right: 0 !important;
        }
      }
      .el-form-item__content {
        margin-left: 12px !important;
      }
    }
  }
  .form-btn-inline {
    display: inline-block;
  }
  .form-item-inline {
    display: inline-block;
  }
  h3 {
    padding: 30px 0;
    font-size: 30px;
  }
  .vue-form {
    // padding: 0 0 30px 0;
    .el-form-item {
      text-align: left;
    }
  }
  .cut-title {
    text-align: left;
    h2 {
      margin: 10px 0;
    }
  }
}
</style>
