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
  watch: {},
  methods: {
    healPlayer() {
      this.currentRound++;
      this.playerHealth += getRandomHit(9, 16);
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.attackPlayer();
    },
    attackMonster() {
      this.currentRound++;
      this.monsterHealth -= getRandomHit(5, 12);
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      } else {
        this.attackPlayer();
      }
    },
    attackPlayer() {
      this.playerHealth -= getRandomHit(8, 15);
      if (this.playerHealth < 0) {
        this.playerHealth = 0;
      }
    },
    specialAttack() {
      this.currentRound++;
      this.monsterHealth -= getRandomHit(10, 25);
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      } else {
        this.attackPlayer();
      }
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
