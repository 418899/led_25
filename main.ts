let x = 0
let y = 0
let a = 0
function 燈數 (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14) {
        x = 0
        y = 17 - num
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    x = 0
    y = 0
    a = 0
    basic.clearScreen()
    for (let index = 0; index < 16; index++) {
        a += 1
        燈數(a)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    a = 0
    a = 0
    a = 0
    basic.clearScreen()
    for (let index = 0; index < 25; index++) {
        a += 1
        燈數2(a)
        basic.pause(100)
    }
})
function 燈數2 (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num < 17) {
        x = 0
        y = 17 - num
    } else if (num >= 17 && num < 20) {
        x = num - 16
        y = 1
    } else if (num >= 20 && num < 22) {
        x = 3
        y = num - 18
    } else if (num >= 22 && num < 24) {
        x = 24 - num
        y = 3
    } else if (num >= 24) {
        x = num - 23
        y = 2
    }
    led.plot(x, y)
}
