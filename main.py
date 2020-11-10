def on_forever():
    for X in range(5):
        led.plot(4 - X, X)
        Y = 0
        while Y <= X - 1:
            led.plot(4 - Y, X)
            led.plot(4 - X, Y)
            Y += 1
        basic.pause(100)
    basic.clear_screen()
basic.forever(on_forever)
