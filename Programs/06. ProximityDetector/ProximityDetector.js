let distance_inches = 0
let echo_duration = 0
function triggerUltrasonicSensor() {
    pins.A1.digitalWrite(true)
    pause(__internal.__timePicker(10))
    pins.A1.digitalWrite(false)
}
forever(function () {
    triggerUltrasonicSensor()
    echo_duration = pins.A2.pulseIn(PulseValue.High)
    distance_inches = echo_duration * 0.00665
    for (let index = 0; index <= 9; index++) {
        if (distance_inches - 3 <= index) {
            light.setPixelColor(index, 0xff0000)
        } else {
            light.setPixelColor(index, 0x000000)
        }
    }
})
