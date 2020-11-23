const app = Vue.createApp({
  data() {
    return {
      enteredGoalVal: "",
      goals: [],
    };
  },
  watch: {},
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalVal);
      this.enteredGoalVal = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
