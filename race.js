var startButton = new Vue({
    el: '.startButton',

    data: {
        tina: 0,
        louise: 0,
        interval: 0,
    },

    methods: {
        startRace: function (event) {
            this.interval = setInterval(this.progressPlayers, 800)
        },

        progressPlayers: function () {
            this.tina += Math.floor(Math.random() * 5) + 1
            this.louise += Math.floor(Math.random() * 5) + 1
            this.tinaStyles
            this.louiseStyles
            this.checkVictory()
        },

        checkVictory: function () {
            if (this.tina >= 80 || this.louise >= 80)
                clearInterval(this.interval)
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
