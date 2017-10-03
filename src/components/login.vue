<template>
  <div id="container">
      <div id="avator">
        <div id="ava-sc1"></div>
        <div id="ava-sc2"></div>
        <div id="ava-img"><img src="../assets/logo.png"></div>
      </div>
      <div id="mainsite">
        <div id="login">
          <input type="text" id="login-id" v-model="user_id" placeholder="QQ号">
          <input type="password" id="login-passwd" v-model="user_passwd" placeholder="密码">
          <div id="login-submit" @click="signin">登 录</div>
          <div id="login-tip">接受<span>服务条款</span> ，并同意同步该账号的信息。</div>
        </div>
      </div>

  </div>
</template>

<script>
import apiLogin from '@/api/login'

export default {
  data () {
    return {
      user_id: '',
      user_passwd: ''
    }
  },
  methods: {
    async signin () {
      console.log(this.user_id, this.user_passwd)
      console.log(await apiLogin({ user_id: this.user_id, user_passwd: this.user_passwd }))
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
  overflow hidden
  
  #avator
    size 100vw 100vw
    overflow hidden
    position relative
    z-index 0
    
    #ava-img
      size 25vw
      middleAbsolute ()
      margin-top -(@height / 1.6)
      border-radius 50%
      overflow hidden
      border 4px solid rgba(240, 240, 240, .5)
      box-shadow 0px 0px 2px 2px rgba(240, 240, 240, .2)
      
      img
        size 100%
        background white
      
    #ava-sc1
      size 200vw 200vw
      absolute -40vw -50vw
      background linear-gradient(to bottom, #1e95e6, #1e95e6 50%, #32499f 50%, #32499f)
      transform-origin center
      animation openScroll 1s ease forwards
      @keyframes openScroll {
        from {transform: rotate(0); opacity: 0}
        to {transform: rotate(-25deg); opacity: 1}
      }
    
    #ava-sc2
      size 200vw 100vw
      absolute 50vw -50vw
      background white
      transform-origin center
      animation openScroll2 1s ease forwards
      @keyframes openScroll2 {
        trom {transform: rotate(0); opacity: 0}
        to {transform: rotate(15deg); opacity: 1}
      }
    
  #mainsite
    margin-top -20vw
    flex 1
    overflow hidden
    background white

    input
      text-align center
      display block
      outline none
      height 10vw
      padding 1vw 0
      line-height @height
      font-size 7vw
      size 60vw auto
      relative 4vw auto
      box-shadow none
      border-bottom 1px solid #eee
      border-top none
      border-left none
      border-right none
  
    #login-submit
      relative 3vw auto
      background #0088f9
      margin-top 10vw
      size 65vw 14vw
      font-weight 300
      border-radius 1vw
      color white
      font-size 5.5vw
      text-align center
      line-height @height
    
    #login-tip
      size 60vw auto
      font-size 3.8vw
      color #999
      relative 0 auto
      
      span
        font-size inherit
        color #74b9f0
</style>
