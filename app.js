// 注册一个小程序示例
App({
  // 小程序初始化完成时
  onLaunch: function (options) {
    // 网络请求
    console.log('======3===')
    console.log(options)
    switch (options.scence) {
      case 1001:
        break;
    }
    // 获取用户信息
  },
  // 小程序显示出来时
  onShow: function (options) {
    console.log('=========')
    console.log(options)
    switch(options.scence) {
      case 1001:
        break;
    }
    // 2.获取用户的信息，并且获取用户信息之后，将用户的信息传递给服务器
  },
  // 小程序隐藏时
  onHide: function () {

  },
  // 小程序产生一些错误
  onError: function (msg) {
    
  },
  globalData: {
    name: 'LiuZiDing',
    age: 18
  }
})

