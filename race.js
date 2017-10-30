var startButton = new Vue({
    el: '#startButton',

    data: {
        tina: 0,
    },

    methods: {
        starRace: function (event) {
            setInterval(() => { this.progressPlayers() }, 100)
        },

        progressPlayers: function () {
            this.tina += Math.random(5 - 1)
        },

    },

    computed: {

    },
})
