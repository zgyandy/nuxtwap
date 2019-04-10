<template>
  <ul class="linkList dis-flex-wrap">
    <li>
      <a href="http://www.zhizuobiao.com/zyll/qianrushi/mqianrushi1/">
        <img src="../../assets/img/link01.png" alt = "物联网">
        <div>物联网</div>
      </a>
    </li>
    <li>
      <a href="http://www.zhizuobiao.com/zyll/python/mpython23/">
        <img src="../../assets/img/link02.png" alt = "人工智能">
        <div>人工智能</div>
      </a>
    </li>
    <li>
      <a href="http://www.zhizuobiao.com/zyll/dashuju/mdashuju2/">
        <img src="../../assets/img/link03.png" alt = "大数据">
        <div>大数据</div>
      </a>
    </li>
    <li>
      <a href="http://www.zhizuobiao.com/zyll/shujufenxi/mshujufenxi1/">
        <img src="../../assets/img/link04.png" alt = "数据分析">
        <div>数据分析</div>
      </a>
    </li>
    <li>
      <a href="http://www.zhizuobiao.com/zyll/java/mjava1/">
        <img src="../../assets/img/link05.png" alt = "Java">
        <div>Java</div>
      </a>
    </li>
    <li>
      <a href="http://www.zhizuobiao.com/zyll/h5/mh51/">
        <img src="../../assets/img/link06.png" alt = "WEB前端">
        <div>WEB前端</div>
      </a>
    </li>
    <li>
      <a :href="$store.state.domain + '/video/'">
        <img src="../../assets/img/link07.png" alt = "讲堂">
        <div>讲堂</div>
      </a>
    </li>
    <li>
      <a href="http://m.zhizuobiao.com/knowledge/">
        <img src="../../assets/img/link08.png" alt = "知识库">
        <div>知识库</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less">
.linkList {
  height: 4.25 - 0.8rem;
  width: 7.5 - 0.8rem;
  padding: 0.4rem;
  background: #fff;
  li {
    width: 1.13rem;
    height: 1.54rem;
    margin-right: 0.4rem;
    text-align: center;
    img {
      width: 1.13rem;
      height: 1.12rem;
      display: block;
    }
    a {
      color: #000;
      div {
        font-size: 0.26rem;
        margin-top: 0.17rem;
      }
    }
  }
  li:nth-child(4n + 4) {
    margin-right: 0;
  }
}
</style>
