const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
    counter(val) {
      if (val > 50) {
        this.counter = 0;
      }
    }
    /* userName(value) {
      if (value === '') {
        this.fullName = value;
      } else {
        this.fullName = value + ' Sweetman';
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullName = value;
      } else {
        this.fullName = this.userName + ' ' + value;
      }
    } */
  }, 
  computed: {
    getFullName() {
      console.log("running again");
      if (this.firstName === "" || this.lastName === "") {
        return "";
      } else {
        return this.firstName + " " + this.lastName;
      }
    },
  },
  methods: {
    outputFullName() {
      console.log("running again");
      if (this.firstName === "") {
        return "";
      }
      return this.firstName + " Sweetman";
    },
    clearName() {
      this.firstName = "";
      this.lastName = "";
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.firstName = event.target.value;
    },
    submitForm() {
      alert("Form Submitted!");
    },
  },
});

app.mount("#events");
