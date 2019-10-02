// components/my-tab-control/my-tab-control.js
Component({
  // 组件的属性列表
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemClick(event) {
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })
      //3. 通知页面内部的点击事件
      this.triggerEvent('itemclick', {index, title: this.properties.titles[index]}, {})
    }
  }
})
