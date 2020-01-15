<template>
  <div id="app">
    <vue-form-config :params="params" @nextStep="nextStep"> </vue-form-config>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      params: {
        config: {
          align: "left",
          width: "100%",
          labelWidth: "150px",
          labelSuffix: "",
          btn: [
            {
              key: "nextStep",
              text: "***",
              show: true
            }
          ]
        },
        data: []
      }
    };
  },
  mounted() {},
  components: {},
  methods: {}
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
