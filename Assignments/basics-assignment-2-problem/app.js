const app = Vue.createApp({
  data() {
    return {
      alertMessage: "Hello There",
      outputA: "",
      outputB: "",
    };
  },
  methods: {
    setOutputA(event) {
      this.outputA = event.target.value;
    },
    setOutputB(event) {
      this.outputB = event.target.value;
    },
    showAlert() {
      alert(this.alertMessage);
    },
  },
});

app.mount("#assignment");
