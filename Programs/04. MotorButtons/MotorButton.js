input.onSwitchMoved(SwitchDirection.Left, function () {
    servos.A1.run(100)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    servos.A1.run(0)
})
input.onSwitchMoved(SwitchDirection.Right, function () {
    servos.A1.run(-100)
})

