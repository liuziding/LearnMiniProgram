// pages/home/home.js
// getApp() 获取App()产生的示例对象
// const app = getApp()
// const name = app.globalData.name;
// const age = app.globalData.age;

// 注册一个页面
// 页面
Page({
  // ----------- 2.初始化数据 -------------
  data: {
    message: '哈哈哈',
    list: []
  },
  // -------- 1.监听页面的生命周期函数 ---------
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/api/v1/recommend',
      success: (res) => {
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  },
  // 当页面初次渲染完成时
  onReady() {

  },
  // 当页面显示出来时
  onShow() {

  },
  // 当页面隐藏起来时
  onHide() {

  },
  onUnload() {

  },
  // ---------- 3.监听wxml中相关的一些事件 -------------
  handleGetUserInfo(event) {
    console.log('1111111111')
    console.log(event)
  },
  handleViewClick() {
    console.log('哈哈哈被点击了')
  },
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  onPullDownRefresh() {
    console.log('下拉刷新的事件')
  }
})