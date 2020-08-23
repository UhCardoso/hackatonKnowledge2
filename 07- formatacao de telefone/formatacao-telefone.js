function formatar() {
	let telefone = document.getElementById('telefone').value;
	let telFormat = []
	if(telefone.length != 11) {
		console.log("Quantidade de numeros incorreta");
	} else {
		for(let i in telefone) {
			if(i == 0) {
				telFormat.push('(');
				telFormat.push(telefone[i]);
			}
			if(i > 0 && i < 2 ) {
				telFormat.push(telefone[i]);
			}
			if(i == 2) {
				telFormat.push(') ');
				telFormat.push(telefone[i]);
			}
			if( i > 2 && i < 7) {
				telFormat.push(telefone[i]);
			}
			if(i == 7) {
				telFormat.push('-');
				telFormat.push(telefone[i]);
			}
			if(i > 7) {
				telFormat.push(telefone[i]);
			}
		}

		let numFinal = telFormat.join('');

		document.getElementById('telefone').type = "text";
		document.getElementById('telefone').value = numFinal;
	}
}