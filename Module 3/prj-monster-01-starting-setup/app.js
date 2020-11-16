function getRandomHit(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
    };
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      this.monsterHealth -= getRandomHit(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= getRandomHit(8, 15);
    },
    specialAttack() {
      this.currentRound++;
      this.monsterHealth -= getRandomHit(10, 25);
      this.attackPlayer();
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    hideSpecial() {
      return this.currentRound % 3 !== 0;
    },
  },
});

app.mount("#game");
