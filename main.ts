basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    }
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
