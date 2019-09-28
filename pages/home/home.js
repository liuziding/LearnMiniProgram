// pages/home/home.js
Page({
  data: {
    name: '刘自定',
    age: 18,
    counter: 0,
    students: [
      { id: 110, name: '张三', age: 17 },
      { id: 111, name: '李四', age: 18 },
      { id: 112, name: '王五', age: 19 },
      { id: 113, name: '赵六', age: 20 },
    ]
  },
  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})