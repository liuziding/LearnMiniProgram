// pages/home/h-recommed/h-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },
  data: {
    isLoad: false
  },
  // 组件的方法列表
  methods: {
    handleImageLoad() {
      if(!this.data.isLoad) {
        this.triggerEvent('imageload')
        this.data.isLoad = true
        console.log('图片加载完成')
      }
      
    }
  }
})
