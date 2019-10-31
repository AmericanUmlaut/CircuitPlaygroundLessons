let HALF_SECOND = 0
HALF_SECOND = 500000
servos.A1.run(50)
forever(function () {
    servos.A1.setAngle(0)
    control.waitMicros(HALF_SECOND)
    servos.A1.setAngle(90)
    control.waitMicros(HALF_SECOND)
    servos.A1.setAngle(180)
    control.waitMicros(HALF_SECOND)
})

