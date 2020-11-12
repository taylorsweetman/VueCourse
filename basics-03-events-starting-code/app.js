const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.userName;
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.userName = event.target.value + ' ' + lastName;
    }, 
    submitForm() {
      alert('Form Submitted!');
    }
  }
});

app.mount('#events');
