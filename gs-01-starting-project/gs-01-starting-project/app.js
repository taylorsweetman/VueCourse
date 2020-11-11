Vue.createApp({
  data() {
    return {
      goals: [],
      enteredVal: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredVal);
    },
    clearGoals() {
      this.goals = [];
    },
    wipeInput() {
      this.enteredVal = "";
    },
  },
}).mount("#app");

/* const buttonsArr = document.querySelectorAll('button');
const addButton = buttonsArr[0];
const clearButton = buttonsArr[1];
const input = document.querySelector('input');
const list = document.querySelector('ul');

function addGoal() {
    const enteredVal = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = enteredVal;
    list.appendChild(listItem);
    input.value = '';
}

function clearGoals() {
    const listItemArr = document.querySelectorAll('ul');

    listItemArr.forEach(element => {
        element.textContent = '';
    });
}


addButton.addEventListener('click', addGoal);
clearButton.addEventListener('click', clearGoals); */
