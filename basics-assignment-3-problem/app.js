const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    getResult() {
      setTimeout(this.setToZero, 5000);
    },
  },
  computed: {
    getResult() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count === 37) {
        return this.count;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.count += num;
    },
    setToZero() {
      this.count = 0;
    },
  },
});

app.mount("#assignment");
