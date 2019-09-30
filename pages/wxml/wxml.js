// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstname: 'kebi',
    lastname: 'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 23,
    movies: ['西游记', '红楼梦', '三国演义', '水浒传'],
    nums: [
      [10, 14, 34, 56],
      [34, 56, 34, 54],
      [47, 81, 38, 20]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    const score = this.data.score;
    if(score < 95) {
      this.setData({
        score: this.data.score + 6
      })
    } else {
      this.setData({
        score: 100
      })
    }
  }
})