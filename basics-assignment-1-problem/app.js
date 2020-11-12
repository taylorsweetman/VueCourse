const app = Vue.createApp({
    data() {
        return {
            myName: 'Taylor Sweetman',
            myAge: 29,
            picLink: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/tor.png'
        };
    },
    methods: {
        agePlus5() {
            return this.myAge + 5;
        },
        getRand() {
            return Math.random();
        }
    }
});

app.mount('#assignment');