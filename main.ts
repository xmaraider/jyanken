radio.onReceivedNumber(function (receivedNumber) {
    list = []
    b = list[0]
    c = list[1]
    list.push(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallSquare)
    a = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    a = 0
    b = 0
    c = 0
    list = []
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    a = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    a = 2
})
let a = 0
let c = 0
let b = 0
let list: number[] = []
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(9)
    if (c == 1) {
        if (b == 1) {
            if (a == 1) {
                basic.showIcon(IconNames.Asleep)
            } else if (a == 2) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        } else if (b == 2) {
            if (a == 1) {
                basic.showIcon(IconNames.Sad)
            } else if (a == 2) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Asleep)
            }
        } else {
            if (a == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (a == 2) {
                basic.showIcon(IconNames.Asleep)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
    } else if (c == 2) {
        if (b == 1) {
            if (a == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (a == 2) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Asleep)
            }
        } else if (b == 2) {
            if (a == 1) {
                basic.showIcon(IconNames.Sad)
            } else if (a == 2) {
                basic.showIcon(IconNames.Asleep)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        } else {
            if (a == 1) {
                basic.showIcon(IconNames.Asleep)
            } else if (a == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
    } else if (c == 0) {
        if (b == 1) {
            if (a == 1) {
                basic.showIcon(IconNames.Asleep)
            } else if (a == 2) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        } else if (b == 2) {
            if (a == 1) {
                basic.showIcon(IconNames.Sad)
            } else if (a == 2) {
                basic.showIcon(IconNames.Asleep)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            if (a == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (a == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Asleep)
            }
        }
    } else {
        if (b == 1) {
            if (a == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (a == 2) {
                basic.showIcon(IconNames.Asleep)
            } else {
                basic.showIcon(IconNames.Confused)
            }
        } else if (b == 2) {
            if (a == 1) {
                basic.showIcon(IconNames.Asleep)
            } else if (a == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            if (a == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (a == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Asleep)
            }
        }
    }
})
