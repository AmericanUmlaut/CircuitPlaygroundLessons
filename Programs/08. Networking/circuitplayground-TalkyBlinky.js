input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(1)
    light.setPixelColor(2, 0x00ff00)
    light.setPixelColor(7, 0x000000)
})
network.onInfraredReceivedNumber(function (num) {
    if (num == 7) {
        light.showRing(
        `green green green green green green green green green green`
        )
    } else {
        light.showRing(
        `red red red red red red red red red red`
        )
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(7)
    light.setPixelColor(7, 0x00ff00)
    light.setPixelColor(2, 0x000000)
})

