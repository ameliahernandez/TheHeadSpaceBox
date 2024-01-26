input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(1500)
        basic.showLeds(`
            . # # # .
            # # . # #
            # . . . #
            # # . # #
            . # # # .
            `)
        basic.pause(500)
    }
    Relaxcounter += 1
    basic.pause(2000)
    basic.showString("R")
    basic.pause(100)
    basic.showString("E")
    basic.pause(100)
    basic.showString("L")
    basic.pause(100)
    basic.showString("A")
    basic.pause(100)
    basic.showString("X")
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Relaxcounter))
})
let Relaxcounter = 0
Relaxcounter = 0
