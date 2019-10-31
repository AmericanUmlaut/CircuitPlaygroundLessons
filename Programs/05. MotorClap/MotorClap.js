let state = 0
input.onLoudSound(function () {
    state += 1
    if (state == 1) {
        servos.A1.run(0)
    } else if (state == 2) {
        servos.A1.run(100)
    } else if (state == 3) {
        servos.A1.run(-100)
        state = 0
    }
})

