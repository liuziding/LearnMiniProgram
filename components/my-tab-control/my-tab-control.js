// components/w-tab-control/w-tab-control.js
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
    itemClick(e) {
      // 1. 设置最新的 index
      this.setData({
          currentIndex: e.currentTarget.dataset.index
      })

      // 3.通知页面内部的点击事件
      this.triggerEvent('tabclick', {index: this.data.currentIndex}, {})
    }
  }
})