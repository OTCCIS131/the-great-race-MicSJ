var startButton = new Vue({
    el: '#startButton',

    data: {
        tina: 0,
    },

    methods: {
        startRace: function (event) {
            debugger
            setInterval(function () { progressPlayers() }, 1000)
        },

        progressPlayers: function () {
            this.tina += Math.random() * 5
        },

    },

    computed: {

    },
})
