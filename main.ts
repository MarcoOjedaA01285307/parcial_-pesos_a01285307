input.onButtonPressed(Button.A, function () {
    basic.showNumber(pesos)
    basic.showString("MXN")
    basic.showString("=")
    Dolares = pesos / 21.29
    basic.showNumber(Dolares)
    basic.showString("USD")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pesos)
    basic.showString("MXN")
    basic.showString("=")
    Euros = pesos / 25.29
    basic.showNumber(Euros)
    basic.showString("EUR")
})
let Euros = 0
let Dolares = 0
let pesos = 0
basic.showString("Marco ojeda A01285307 ")
pesos = randint(1, 80)
basic.forever(function () {
	
})
