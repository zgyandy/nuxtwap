<template>
  <div class="footBox">
    <div class="footBar">
      <ul>
        <li>
          <a :href="$store.state.domain">
            <img class="foundIcon" v-show="pathName == 'found'" src="../../assets/img/found1.png" alt="">
            <img class="foundIcon" v-show="pathName !== 'found'" src="../../assets/img/found.png" alt="">
            <p :class="{redColor : pathName == 'found'}">发现</p>
          </a>
        </li>
        <li>
          <a :href="$store.state.domain + '/video/'">
            <img class="forumIcon" v-show="pathName === 'forum'" src="../../assets/img/video1.png" alt="">
            <img class="forumIcon" v-show="pathName !== 'forum'" src="../../assets/img/video.png" alt="">
            <p :class="{redColor : pathName == 'forum'}">讲堂</p>
          </a>
        </li>
        <li>
          <a :href="$store.state.domain + '/mall/'">
            <img class="mallIcon" src="../../assets/img/mall.png" alt="">
            <p>商城</p>
          </a>
        </li>
        <li>
          <a :href="$store.state.domain + '/knowledge/'">
            <img class="konwledgeIcon" src="../../assets/img/knowledge.png" alt="">
            <p>知识</p>
          </a>
        </li>
        <li>
          <a :href="$store.state.domain + '/my/'">
            <img class="myIcon" src="../../assets/img/my.png" alt="">
            <p>我的</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  props: ['pathName'],
  // computed: {
  //   ...mapState ({
  //     counter: state => state.counter
  //   })
  // }
};
</script>

<style scoped lang="less">
.footBox {
  width: 7.5rem;
  height: 0.98rem;
  .footBar {
    width: 7.5rem;
    height: 0.98rem;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    background: #fff;
    border-top: 1px solid  #dadada;
    z-index: 90;
    ul {
      height: .98rem;
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      li {
        width: .6rem;
        font-size: .2rem;
        line-height: .4rem;
        a {
          color: #000;
        }
        .foundIcon {
          width: .49rem;
          height: .36rem;
        }
        .forumIcon {
          width: 0.39rem;
          height: 0.39rem;
        }
        .mallIcon {
          width: 0.38rem;
	        height: 0.38rem;
        }
        .konwledgeIcon {
          width: 0.36rem;
	        height: 0.38rem;
        }
        .myIcon {
          width: 0.4rem;
          height: 0.38rem;
        }
      }
    }
  }
}
</style>
