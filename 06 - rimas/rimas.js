function verificar() {
	let frase1 = document.getElementById('frase1').value;
	let frase2 = document.getElementById('frase2').value;

	frase1 = frase1.split('').reverse().join('');
	frase2 = frase2.split('').reverse().join('');

	console.log(frase1.substr(0, 4));
	console.log(frase2.substr(0, 4));
	let rima = 0;

	if(frase1 == frase2) {
		rima = 1;
	} else {
		frase1 = frase1.substr(0, 2);
		frase2 = frase2.substr(0, 2);

		if(frase1 == frase2) {
			rima = 1
		}
	}

	if(rima != 0) {
		document.getElementById('result').style.height = '20px';
		document.getElementById('result').innerHTML = "As frases rimam";
		document.getElementById('result').style.background = "green";
	} else {
		document.getElementById('result').style.height = '20px';
		document.getElementById('result').innerHTML = "As frases não rimam";
		document.getElementById('result').style.background = "red";
	}
}