function getRandomHit(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      log: [],
    };
  },
  watch: {
    playerHealth(val) {
      if (val === 0 && this.monsterHealth > 0) {
        this.winner = "monster";
      } else if (val === 0) {
        this.winner = "draw";
      }
    },
    monsterHealth(val) {
      if (val === 0 && this.playerHealth > 0) {
        this.winner = "player";
      } else if (val === 0) {
        this.winner = "draw";
      }
    },
  },
  methods: {
    healPlayer() {
      this.currentRound++;
      const healVal = getRandomHit(8, 20);
      this.playerHealth += healVal;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.addLogMsg("player", "heal", healVal);
      this.attackPlayer();
    },
    attackMonster() {
      this.currentRound++;
      const attackVal = getRandomHit(5, 12);
      this.monsterHealth -= attackVal;
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      this.addLogMsg("player", "attack", attackVal);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackVal = getRandomHit(8, 15);
      this.playerHealth -= attackVal;
      if (this.playerHealth < 0) {
        this.playerHealth = 0;
      }
      this.addLogMsg("monster", "attack", attackVal);
    },
    specialAttack() {
      this.currentRound++;
      const attackVal = getRandomHit(10, 25);
      this.monsterHealth -= attackVal;
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      this.addLogMsg("player", "special-attack", attackVal);
      this.attackPlayer();
    },
    startFresh() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.log = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMsg(who, what, val) {
      this.log.unshift({
        actionBy: who,
        actionType: what,
        actionVal: val,
      });
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
