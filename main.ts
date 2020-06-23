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
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    a = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    a = 2
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    a = 0
    b = 0
    c = 0
    list = []
})
let a = 0
let c = 0
let b = 0
let list: number[] = []
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (0 == 0) {
    	
    } else if (0 == 0) {
    	
    } else {
    	
    }
})
