var startButton = new Vue({
    el: '#startButton',

    data: {
        tina: 0,
        gene: 0,
    },

    methods: {
        startRace: function (event) {
            setInterval(this.progressPlayers, 1000)
        },

        progressPlayers: function () {
            this.tina += Math.floor(Math.random() * 5)
            this.gene += Math.floor(Math.random() * 5)
        },

    },

    computed: {
        tinaStyles() {
            return {
                left: $(this.tina)vw
            }
        },
    },
})
