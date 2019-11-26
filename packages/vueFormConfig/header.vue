<template>
    <div :style="`padding: 0 50px;`" v-if="title.main">
        <div class="info-title clearfix">
            <div class="info-title-l">{{title.main}}</div>
        </div>
        <div class="line"></div>
        <div class="enterprise-form-info" v-if="title.sub">
            <div style="text-align:left" v-html="title.sub">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style scoped lang="less">
.info-title {
    height: 50px;
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(38, 41, 47, 1);
    line-height: 33px;
    margin: 30px 0px 0px 19px;
    position: relative;
    text-align: left;
    .info-title-l {
        float: left;
        font-weight: bold;
    }
    .info-title-r {
        float: right;
    }
}
.info-title::before {
    content: '';
    width: 6px;
    height: 20px;
    background-color: #4285f4;
    position: absolute;
    top: 7px;
    left: -19px;
}
.line {
    // width: 980px;
    height: 1px;
    background: rgba(204, 207, 217, 1);
    margin: 15px auto 22px;
}
.enterprise-form-info {
    font-size: 14px;
    font-weight: 400;
    color: rgba(66, 133, 244, 1);
    line-height: 20px;
    margin:0 0 20px 0 ;
}
</style>
