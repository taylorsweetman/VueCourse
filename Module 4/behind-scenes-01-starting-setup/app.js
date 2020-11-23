const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    /* saveInput(event) {
      this.currentUserInput = event.target.value;
    }, */
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// How Vue works is below

/* const data = {
  message: "Hello",
  longMessage: "Hello World",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World";
      target.message = value;
    }
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Taylor is cool";
console.log(proxy.longMessage);
console.log(proxy.message); */
