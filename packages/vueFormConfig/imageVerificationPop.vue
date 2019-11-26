<template>
  <el-dialog
    :visible.sync="imgPop"
    width="349px"
    class="iv-wrapper"
    id="iv-wrapper"
    @close="graphCode = ''"
    :close-on-click-modal="false"
    :modal-append-to-body="false"
    :append-to-body="true"
  >
    <div class="iv-dialog">
      <div class="iv-content">
        <p class="iv-title">输入图中验证码</p>
        <div class="iv-code-img">
          <img
            :src="imgSrc"
            class="verifica_img"
            id="changeCode"
            @click="getCode()"
          />
        </div>
        <p class="iv-code-tips">看不清？点击刷新</p>
        <el-input
          placeholder="输入验证码"
          v-model.trim="graphCode"
          class="iv-input"
          maxlength="4"
          @keyup.native="graphCodeInput(graphCode)"
        >
        </el-input>
        <div class="iv-btn">
          <el-button
            @click.prevent="sendCode"
            :disabled="btnFlag"
            class="iv-btn-styl"
            type="primary"
            >确认</el-button
          >
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  computed: {
    imgPop: {
      get() {
        return this.imgShow;
      },
      set(val) {
        this.$emit("tick", val);
      }
    },
    imgSrc() {
      return `${this.src()}&d=${this.random}`;
    }
  },
  // update(){
  //     this.getCode();
  // },
  props: ["imgShow", "src"],
  // props: ['graphCodeType','imgPop'],
  data() {
    return {
      btnFlag: true, // 按钮控制
      graphCode: "",
      // graphCodeType:1,
      random: 2
    };
  },
  watch: {
    graphCode(val) {
      if (val.length === 4) {
        this.btnFlag = false;
      } else {
        this.btnFlag = true;
      }
    }
  },
  methods: {
    getCode() {
      this.random = Math.random();
    },
    // 按钮控制
    graphCodeInput(graphCode) {
      // debugger
      // return
      this.graphCode = graphCode.replace(/[^\d]/g, ""); // 禁止输入字母和汉字
      // if (this.imgPopForm.code.length === 4) {
      //     this.btnFlag = false
      // } else {
      //     this.btnFlag = true
      // }
    },
    sendCode() {
      this.$emit("chooseValue", this.graphCode);
      this.graphCode = "";
      // this.random = Math.random()
    }
  }
};
</script>

<style scoped lang="less">
.iv-wrapper {
  .iv-dialog {
    text-align: center;
    .close-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 16px;
      height: 16px;
      background-color: red;
      cursor: pointer;
    }
    .iv-content {
      padding-bottom: 35px;
      .iv-title {
        /*margin-top: 29px;*/
        font-size: 18px;
        font-family: SourceHanSansCN-Regular;
        color: #232323;
        line-height: 27px;
      }
      .iv-code-img {
        width: 151px;
        height: 62px;
        margin: 44px auto 0;
        img {
          width: 100%;
        }
      }
      .iv-code-tips {
        margin-top: 15px;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        color: #cccfd9;
      }
      .iv-input {
        width: 173px;
        margin-top: 20px;
      }
      .iv-btn {
        text-align: center;
        margin-top: 39px;
        .iv-btn-styl {
          width: 260px;
        }
      }
    }
  }
}

.img-pop-style {
  width: 100%;
}
</style>
