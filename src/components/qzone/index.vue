<template>
  <div id="container">
      <div id="title">
        <router-link to="/user">BACK</router-link>
        消息
      </div>
      <div id="mainsite" @click="count">
        <div id="qzone-cover" style="background-image:url(https://www.coderming.com/Welcome2017/src/1.jpg)"></div>
        <div class="qzone-item" v-for="x in d">
          <div class="qi-avator"></div>
          <div class="qi-title">王某某
            <span>时间</span>
          </div>
          <div class="qi-content">这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'function',
      hh: '',
      d: [...Array(20)]
    }
  },
  computed: {
    qzone () {
      return this.$store.state.qzone 
    },
  },
  methods: {
    count () {
      console.log(this.$store.commit('qzPlus'))
      console.log(this.$store);
    },
    changeinp (...args) {
      console.log(this, args);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../style/utils.styl'

#container
  display flex
  flex-direction column
  size 100vw 100vh
  
  #title
    fixed 0 0
    size 100vw 12vw
    background rgba(255, 255, 255, .7)
    color #000
    text-align center
    line-height @height
    
  #mainsite
    flex 1
    overflow auto
    
    #qzone-cover
      size 100vw 80vw
      background no-repeat center center / cover
    
    .qzone-item
      size 100vw auto
      border-top 3vw solid #ececec
      padding 3vw 0 5vw
      box-sizing border-box
      
      .qi-avator
        float left
        size 13vw 13vw
        border-radius 50%
        border 1px solid #e1e1e1
        margin 2vw 3vw
      
      .qi-title
        float right
        size 80vw 13vw
        textFlow ()
        line-height 7vw
        margin 3vw 0 0
        clear right
        span
          display block
          font-size 3.8vw
          color #999
          
      .qi-content
        clear both
        font-size 4.5vw
        color #333
        padding 2vw 3vw
      


  tab-bar
    size 100vw 20vw
</style>
