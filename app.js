const TOKEN = 'token'
App({
  globalData: {
    token: ''
  },
  onLaunch: function () {
    // 1.先从缓存中取出 token
    const token = wx.getStorageSync(TOKEN)

    // 2. 判断 token 是否有值
    if(token && token.length !== 0) { // 已经有 token ,验证 token 是否过去
      // 验证 token 是否过期
      this.check_token(token)   // 验证 token 是否过期
    } else { // 没有 token, 进行登录操作
      this.login()
    }
  },
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errCode) {
          console.log('token 有效')
          this.globalData.token = token
        }
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  login() {
    // 登录操作
    wx.login({
      // code 只有5分钟的有效期
      success: (res) => {
        // 1. 获取 code
        const code = res.code;
        // 2.将 code 发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.取出 token
            const token = res.data.token;
            console.log(token)
            // 2.将 token 保存在 globalData 中
            this.globalData.token = token;
            // 3. 进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
