var startButton = new Vue({
    el: '.startButton',

    data: {
        tina: 0,
        gene: 0,
        interval: 0,
    },

    methods: {
        startRace: function (event) {
            this.interval = setInterval(this.progressPlayers, 800)
        },

        progressPlayers: function () {
            this.tina += Math.floor(Math.random() * 5) + 1
            this.gene += Math.floor(Math.random() * 5) + 1
            this.tinaStyles
            this.geneStyles
            this.checkVictory
        },

        checkVictory: function () {
            clearInterval(this.interval)
        },
    },

    computed: {
        tinaStyles: function () {
            document.getElementById("tina").style.left = this.tina + "vw"
        },

        geneStyles: function () {
            document.getElementById("gene").style.left = this.gene + "vw"
        },
    },
})
