function verificar(senha) {
	let forca = 0;
	if(senha.length < 4) {
		console.log('precisa ter no minimo 4 caracteres')

	} else if(senha.length >= 4 && senha.length <= 7) {
		forca += 10
		console.log('senha fraca')

	} else if(senha.length > 7) {
		forca +=25
	}

	if(senha.length >= 5 && senha.match(/[a-z]+/)) {
		forca += 10
	}

	if(senha.length >= 6 && senha.match(/[A-Z]+/)) {
		forca += 20
	}

	if(senha.length >= 7 && senha.match(/[!@#$%&*/]/)) {
		forca += 25
	}

	resultadoForca(forca)
	resultadoEmissor();
}

function resultadoForca(forca) {
	let barra = document.getElementById("progresso")
	let barraSenha = document.getElementById("barra-senha")

	if(forca < 30) {
		console.log('fraca');
		barra.style.background = "red";
		barra.style.width ="35%";
	} else if(forca >= 30 && forca < 50) {
		barra.style.background = "yellow";
		barra.style.width ="55%";
	} else if(forca >= 50 && forca < 70) {
		barra.style.background = "blue";
		barra.style.width ="75%";
	} else if(forca >= 70 < 100) {	
		barra.style.background = "green";
		barra.style.width ="100%";
	}
}

function resultadoEmissor() {
	console.log(senha)
}