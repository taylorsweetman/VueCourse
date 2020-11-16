const app = Vue.createApp({
  data() {
    return {
      input: "",
      tasks: [],
      show: true,
    };
  },
  computed: {
    showText() {
      if (this.show) {
        return "Hide List";
      } else {
        return "Show List";
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.input);
    },
    toggleShow() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
