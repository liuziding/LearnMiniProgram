Page({
  data: {
    counter: 0,
    inNum: 20,
    deNum: 10,
    sliNum: 0,
    onOff: true
  },
  onLoad: function () {
    setInterval(() => {
      if(this.data.onOff) {
        if (this.data.sliNum < 100) {
          this.setData({
            sliNum: this.data.sliNum + 1
          })
        } else {
          this.setData({
            onOff: false
          })
        }
      } else {
        if (this.data.sliNum > 0) {
          this.setData({
            sliNum: this.data.sliNum - 1
          })
        } else {
          this.setData({
            onOff: true
          })
        }
      } 
    }, 100)
  },
  handleIncrement(event) {
    console.log('--------', event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleDecrement(event) {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleTabClick(event) {
    console.log(event)
  },
  handleIncrementCpn() {
    // 最终目的：修改 my-sel 中的counter
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    // 2. 通过 setData修改组件中的数组（不合理）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })
    // 3. 通过方法对数据进行修改
    my_sel.incrementCounter(this.data.inNum);
  },
  handleDecrementCpn() {
    this.selectComponent('.sel-class').decrementCounter(this.data.deNum);
  }
})
