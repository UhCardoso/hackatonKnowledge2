function converterReal(valor) {
	if(valor >= 0) {
		let numero = valor.replace('.', "");
		numero = valor.replace(",",".");
		centavos = numero * 100;

		console.log(centavos)
		document.getElementById('valor-centavos').value = centavos;
	} else {
		document.getElementById('valor-centavos').value = "digite um valor numerico";
	}
}

function converterCentavos(valor) {
	if(valor >= 0) {
		let numero = valor.replace('.', "");
		numero = valor.replace(",",".");
		real = numero / 100;

		console.log(real)
		document.getElementById('valor-real').value = real;
	} else {
		document.getElementById('valor-real').value = "digite um valor numerico";
	}
}