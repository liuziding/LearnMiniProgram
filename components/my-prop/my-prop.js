// components/my-prop/my-prop.js
Component({
  properties: {
    title: {
      type: String,
      value: '我是默认的标题',
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['titleclass']
})
