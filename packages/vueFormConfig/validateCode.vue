
<template>
  <div>
    <el-button
      @click="imageVerification"
      type="primary"
      :disabled="codeTime !== 0"
    >
      {{ codeTime === 0 ? "获取验证码" : "剩余" + codeTime + "秒" }}
    </el-button>
    <!-- ref="ImageVerificationPop" -->
    <!-- :graph-code-type="graphCodeType1" -->
  </div>
</template>
<script>
export default {
  // inject: ['form'],
  props: {
    form: {
      type: Object
    },
    associated: {
      type: String
    },
    noAssociated: {
      default: () => false
    },
    imgShow: {
      type: Boolean
    }
  },
  data() {
    return {
      code: "",
      codeTime: 0,
      timer: null
      // imgShow:false
    };
  },
  inject: ["refValidate"],
  // components:{
  //     ImageVerificationPop
  // },
  methods: {
    // sendMobileCode(val){
    // this.$emit('tick',val);
    // this.imgShow = false;
    // this.getCode();
    // },
    timeRun() {
      this.codeTime = 60;
      this.timmer = setInterval(() => {
        if (this.codeTime === 0) {
          clearInterval(this.timmer);
        } else {
          this.codeTime--;
        }
      }, 1000);
      //发起请求
    },
    imageVerification() {
      if (this.noAssociated || this.refValidate(this.associated)) {
        this.$emit("tick");
      }
    }
  }
};
</script>

<style>
</style>