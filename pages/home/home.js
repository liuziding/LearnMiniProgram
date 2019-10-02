// pages/home/home.js
import request from '../../service/network.js'
Page({
  data: {

  },
  
  onLoad: function(options) {
    // 1. 原生的方式发送网络请求
    // this.get_data_origin()

    //2. 使用封装的 request 发送网络请求
    // Promise 最大的好处就是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/api/v1/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    // 发送最简单的 get 请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/v1/recommend',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // 2.get 请求，但是携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/v1/home/data',
    //   method: 'post',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    // 3.post 请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        type: 'LiuZiDing',
        age: 18
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
})