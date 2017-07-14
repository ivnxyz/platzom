const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
	it('Si la palabra termina en "ar", se le quitan esas dos letras.', function () {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})
	it('Si la palabra inicia con Z, se le agrega "pe" al final.', function () {
		const translation = platzom("Zorro")
		const secondTranslation = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(secondTranslation).to.equal("Zarppe")
	})
	it('Si la palabra tiene 10 o más letras, se debe partir a la mitad y unir con un guión.', function () {
		const translation = platzom("Babilonios")
		expect(translation).to.equal("Babil-onios")
	})
	it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.', function () {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})