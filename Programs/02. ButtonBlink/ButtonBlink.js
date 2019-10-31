input.buttonA.onEvent(ButtonEvent.Down, function () {
    light.setPixelColor(0, 0x00ff00)
    pins.A0.digitalWrite(true)
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
    light.setPixelColor(0, 0x000000)
    pins.A0.digitalWrite(false)
})

