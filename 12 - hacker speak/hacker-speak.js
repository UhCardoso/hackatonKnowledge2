function codificar() {
	let frase = document.getElementById('frase').value
	frase = frase.toLowerCase();
	let fraseAux = [];
	
	for(let i in frase) {
		if(frase[i] == 'a') {
			fraseAux.push('4');
		} else if(frase[i] == 'e') {
			fraseAux.push('3');
		} else if(frase[i] == 'g') {
			fraseAux.push('6');
		} else if(frase[i] == 'i') {
			fraseAux.push('1');
		} else if(frase[i] == 'o') {
			fraseAux.push('0');
		} else if(frase[i] == 's') {
			fraseAux.push('5')
		} else if (frase[i] == 't') {
			fraseAux.push('7');
		} else {
			fraseAux.push(frase[i]);
		}

	}
	
	fraseAux = fraseAux.join("");

	let result = document.getElementById('result').innerHTML = fraseAux;
}