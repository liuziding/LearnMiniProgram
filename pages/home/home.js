// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中...',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗失败')
      },
      complete: function() {
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      // showCancel: false,
      // cancelText: '退出',
      success: function(res) {
        console.log(res)
        if(res.cancel) {
          console.log('用户点击了取消')
        } else {
          console.log('用户点了确定按钮')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载...',
      mask: true
    })
    setTimeout(() => {
      // 必须手动hideLoading 才会让 loading 消失
      wx.hideLoading()
    }, 5000)
  },
  handleShowactionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        switch(res.tapIndex) {
          case 0: console.log('相册');
            break;
          case 1: console.log('拍照');
            break;
          default:
            break;
        }
      }
    })
  },
  onShareAppMessage: function(options) {
    return {
      title: '你好，刘自定',
      path: '/pages/about/about',
      imageUrl: '../../assets/liuziding.jpg'
    }
  }
})