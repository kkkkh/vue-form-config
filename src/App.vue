<template>
  <div id="app">
    <vue-form-config :params="param" @nextStep="nextStep"></vue-form-config>
    <!-- <el-input v-model="textarea">
      <svg class="icon" slot="prefix" aria-hidden="true">
        <use xlink:href="#iconi-info"></use>
      </svg>
    </el-input> -->
  </div>
</template>

<script>
// import { setTimeout } from 'timers';
// import param from "@/params/add";
// import param from "@/params/test";
// import param from '@/params/upload'
export default {
  name: "app",
  data() {
    return {
      param: {
        config: {
          btnPosition: "right",
          align: "center",
          btn: [
            {
              key: "nextStep",
              show: true,
              type: "primary",
              text: "下一步",
              disabled: false
            },
            {
              key: "resetStep",
              show: true,
              type: "primary",
              text: "重置",
              disabled: false
            }
          ]
        },
        data: [
          {
            label: "金额",
            keyName: "amount",
            defaultValue: "",
            placeholder: "请输入金额",
            type: "input",
            rules: [
              {
                type: "value",
                associated: "amountTotal",
                associatedSign: "<",
                text: "金额大于最终金额"
              }
            ]
          },
          {
            label: "最终金额",
            keyName: "amountTotal",
            defaultValue: "",
            placeholder: "请输入金额",
            type: "input"
            // rules: [
            //   {
            //     type: "value",
            //     associated: "amount",
            //     associatedSign: ">",
            //     text: "不能小于金额"
            //   }
            // ]
          }
        ]
      }
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.param.data[0].uploadUrl =
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571984892766&di=6428e89b66b43af7bafbb97218eb5785&imgtype=0&src=http%3A%2F%2Fepaper.jwb.com.cn%2Fjwb%2Fresfile%2F2018-10-02%2F05%2Fcxyy8a20_s.jpg";
    // }, 5000);
  },
  components: {},
  methods: {
    getCityOpt(val) {},
    nextStep(form, key, cancel) {}
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
