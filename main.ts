let rock_papar_sissirs = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    rock_papar_sissirs = 1
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    rock_papar_sissirs = 3
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    rock_papar_sissirs = 2
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playMelody("C D E F G A B C5 ", 200)
    basic.pause(100)
    if (rock_papar_sissirs == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playTone(131, music.beat(BeatFraction.Breve))
    }
    if (rock_papar_sissirs == 2) {
        basic.showLeds(`
            # # . . .
            # # # . .
            . # # # .
            . . # # #
            . . . # #
            `)
        music.playTone(330, music.beat(BeatFraction.Breve))
    }
    if (rock_papar_sissirs == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            . # . # .
            `)
        music.playTone(988, music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
	
})
