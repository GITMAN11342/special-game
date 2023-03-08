input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        # # . # #
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 F D A C5 - C5 - ", 500)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        # # . # #
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("A - G D B - - G ", 500)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        # # . # #
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("D A C5 B C5 G C5 C5 ", 500)
    }
})
