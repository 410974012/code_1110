basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(4 - X, X)
        for (let Y = 0; Y <= X - 1; Y++) {
            led.plot(4 - X, Y)
            led.plot(4 - Y, X)
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
