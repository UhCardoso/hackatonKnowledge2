function verificarNumero() {
	let numero = document.getElementById('numero').value;
	let i = 0;
	let resultado = 0;

	for(i = 2; i <= numero/2; i++) {
		if(numero%i==0) {
			resultado++
			break;
		}
	}

	if(resultado == 0) {
		console.log("é primo")
		document.getElementById("resultado").innerHTML= "o número "+numero+" é primo";
		document.getElementById("resultado").style.background = 'green';
	} else {
		console.log('nao é primo')
		document.getElementById("resultado").innerHTML= "o número "+numero+" não é primo";
		document.getElementById("resultado").style.background = 'red';
	}
}