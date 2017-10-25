the-great-race-MicSJ

data:
    racing: false
    winner: null
    player A: 0
    player B: 0
    interval: 0

methods:
    startRace()
    progressPlayers()
    checkVictory()
    declareVictory()
    reset()

computed:
    winning()
    playerAClass()
    playerBClass()
    playerAStyle()
    playerBStyle()

this.interval = setInterval(fn, ms)
clearInterval(this.interval)