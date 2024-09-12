input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.LogoUp, function () {
    Index = randint(0, tekstliste.length - 1)
    basic.showString("" + (tekstliste[Index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
let Index = 0
let tekstliste: string[] = []
tekstliste = ["CHINISSE", "RUSSIAN", "KOREA"]
game.startCountdown(30000)
