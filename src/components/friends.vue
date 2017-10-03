<template>
  <div id="container">
      <div id="title">
        消息
      </div>
      <div id="mainsite" @click="count">
        <div class="chat" v-for="item in chat">
          <img class="chat-icon" src="../assets/logo.png"></img>
          <div class="chat-title">{{ qzone }}这事测试为你这事测试为你这事测试为你这事测试为你这事测试为你这事测试为你<span class="chat-time">19:00</span></div>
          <div class="chat-para">这事测试为你这事测试为你这事测试为你这事测试为你这事测试为你这事测试为你这事测试为你这事测试为你</div>
        </div>
      </div>
      <tab-bar activebar="2"></tab-bar>
  </div>
</template>

<script>
import tabBar from './tabBar'

export default {
  components: {
    tabBar,
  },
  data () {
    return {
      msg: 'function',
      chat: [...Array(20)]
    }
  },
  computed: {
    qzone () {
      return this.$store.state.qzone
    }
  },
  methods: {
    count () {
      console.log(this.$store.commit('qzPlus'))
      console.log(this.$store.commit('qzPlus'))
      console.log(this.$store);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/utils.styl'

#container
  display flex
  flex-direction column
  size 100vw 100vh
  
  #title
    size 100vw 12vw
    background #3b59c6
    color #fff
    text-align center
    line-height @height
    
  #mainsite
    flex 1
    overflow auto
    
    .chat
      relative 0
      padding-left 18vw
      padding-top 3vw
      padding-bottom 3vw
      border-bottom 1px solid #f4f4f4
      display flex
      flex-direction column
      
      .chat-icon
        size 13vw
        absolute 0 -14vw
        border-radius 50%
        
      div
        padding 1vw
        
      .chat-title
        font-size 5vw
        textFlow ()
        flex 1
        relative 0
        padding-right 13vw
        
        .chat-time
          display block
          font-size 3.6vw
          color #999
          float right
          absolute 0
          right 0
          top 0
          padding-right 2vw
          line-height 2.4em
      
      .chat-para
        font-size 3.8vw
        color #777
        flex 1
        textFlow ()
        padding-right 5vw
  
  tab-bar
    size 100vw 20vw
</style>
