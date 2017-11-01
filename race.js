var startButton = new Vue({
    el: '.startButton',

    data: {
        tina: 0,
        louise: 0,
        interval: 0,
        tin: null,
        lou: null,
    },

    methods: {
        startRace: function (/*event, race*/) {
            this.interval = setInterval(this.progressPlayers, 400)
        },

        progressPlayers: function () {
            this.tina += Math.floor(Math.random() * 5) + 1
            this.louise += Math.floor(Math.random() * 5) + 1
            this.tinaStyles
            this.louiseStyles
            this.checkVictory()
        },

        checkVictory: function () {
            if (this.tina >= 80 || this.louise >= 80) {
                clearInterval(this.interval)
                this.declareWin()
            }
        },

        declareWin: function () {
            if (this.tina > this.louise) {
                document.getElementById("tina").style.left = "40vw"
                document.getElementById("louise").style.visibility = "hidden"
            }
            else {
                document.getElementById("louise").style.left = "40vw"
                document.getElementById("tina").style.visibility = "hidden"
            }
        },

        reset: function () {
            this.tina = 0
            this.louise = 0
            document.getElementById("louise").style.visibility = "visible"
            document.getElementById("tina").style.visibility = "visible"
            this.tinaStyles
            this.louiseStyles
        },
    },

    computed: {
        tinaStyles: function () {
            document.getElementById("tina").style.left = this.tina + "vw"
        },

        louiseStyles: function () {
            document.getElementById("louise").style.left = this.louise + "vw"
        },
    },
})
