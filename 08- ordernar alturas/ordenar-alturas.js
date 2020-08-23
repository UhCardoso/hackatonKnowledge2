function criarInputs() {
	//MANIPULACAO DE TAGS HTML
	let num = document.getElementById('num-alturas').value;
	num = parseInt(num);

	let caixa = document.getElementById('caixa');
	caixa.innerHTML = '';

	for(let i = 1; i <= num; i++) {
		let input = document.createElement('input');
		caixa.appendChild(input);
		input.setAttribute('id', 'altura'+i);
		input.setAttribute('type', 'number');
		input.setAttribute('placeholder', 'Digite a altura '+i);
	}

	let botao = document.createElement('button');
	botao.innerHTML = 'inserir alturas';
	botao.setAttribute('onclick', 'ordenarAlturas('+num+')');
	caixa.appendChild(botao);
}


function ordenarAlturas(num) {
	//LOGICA DO PROGRAMA
	let alturas = [];

	for(let i = 1; i <= num; i++) {
		toString(i)
		let altura = document.getElementById('altura'+i).value;
		altura.replace(',','.');
		alturas.push(altura);
		parseInt(i);
	}

	alturas.sort().reverse();

	let caixa = document.getElementById('caixa');
	let h1 = document.createElement('h1')
	caixa.innerHTML = " ";
	h1.innerHTML ="Alturas | maior > menor";
	caixa.appendChild(h1);

	let listAlturas = document.createElement('div');

	for(let i in alturas) {
		alturas[i] = alturas[i].replace(".",",");
		let alturaAtual = document.createElement('p');
		alturaAtual.innerHTML = alturas[i];
		caixa.appendChild(alturaAtual);
		let hr = document.createElement('hr');
		caixa.appendChild(hr);
	}
}