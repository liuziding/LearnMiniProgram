// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      this.triggerEvent('increment', {name: 'why', age: 18}, {})
    },
    handleDecrement() {
      this.triggerEvent('decrement', { name: 'what', age: 20 }, {})
    },
  }
})
