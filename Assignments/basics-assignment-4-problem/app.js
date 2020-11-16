const app = Vue.createApp({
  data() {
    return {
      userData: "",
      userColor: "",
      toggleSel: false,
    };
  },
  computed: {
    colorStyle() {
      return { "background-color": this.userColor };
    },
    boxStyle() {
      let styleArr = [];
      if (this.toggleSel === true) {
        styleArr.push("hidden");
      } else {
        styleArr.push("visible");
      }

      if (this.userData === "user1") {
        styleArr.push("user1");
      } else if (this.userData === "user2") {
        styleArr.push("user2");
      }

      return styleArr;
    },
  },
  methods: {
    flipToggle() {
      this.toggleSel = !this.toggleSel;
    },
  },
});

app.mount("#assignment");
