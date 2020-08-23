function sortearLetra() {
	let alfabeto = [];
	alfabeto[0] = 'a';
	alfabeto[1] = 'b';
	alfabeto[2] = 'c';
	alfabeto[3] = 'd';
	alfabeto[4] = 'e';
	alfabeto[5] = 'f';
	alfabeto[6] = 'g';
	alfabeto[7] = 'h';
	alfabeto[8] = 'i';
	alfabeto[9] = 'j';
	alfabeto[10] = 'k';
	alfabeto[11] = 'l';
	alfabeto[12] = 'm';
	alfabeto[13] = 'n';
	alfabeto[14] = 'o';
	alfabeto[15] = 'p';
	alfabeto[16] = 'q';
	alfabeto[17] = 'r';
	alfabeto[18] = 's';
	alfabeto[19] = 't';
	alfabeto[20] = 'u';
	alfabeto[21] = 'v';
	alfabeto[22] = 'w';
	alfabeto[23] = 'x';
	alfabeto[24] = 'y';
	alfabeto[25] = 'z';

	let letra = alfabeto[(Math.floor(Math.random()*25))];

	document.getElementById('letra').innerHTML = 'Letra sorteada: <span id="letra2">'+letra+'</span>';
}

function verificar() {
	let letra = document.getElementById('letra2').innerHTML
	
	let nome = document.getElementById('nome').value;
	let cidade = document.getElementById('cidade').value;
	let animal = document.getElementById('animal').value
	let profissao = document.getElementById('profissao').value;
	let fruta = document.getElementById('fruta').value;
	let cor = document.getElementById('cor').value;
	let pais = document.getElementById('pais').value;

	nome = nome.split(',');
	cidade = cidade.split(',');
	animal = animal.split(',');
	profissao = profissao.split(',');
	fruta = fruta.split(',');
	cor = cor.split(',');
	pais = pais.split(',');

	/*console.log(nome)
	console.log(cidade)
	console.log(animal)
	console.log(profissao)
	console.log(fruta)
	console.log(cor)
	console.log(pais)*/
	let resultNome = 0;

	for(let i in nome) {
		if(nome[i].indexOf(letra) != 0) {
			document.getElementById('nome').value = "palavra incorreta";
			document.getElementById('nome').style.color = 'red';
		} else if(nome[i].indexOf(letra) == 0) {
			document.getElementById('nome').value = "palavra certa!";
			document.getElementById('nome').style.color = 'green';
		}
	}

	for(let i in cidade) {
		if(cidade[i].indexOf(letra) != 0) {
			document.getElementById('cidade').value = "palavra incorreta";
			document.getElementById('cidade').style.color = 'red';
		} else if(cidade[i].indexOf(letra) == 0) {
			document.getElementById('cidade').value = "palavra certa!";
			document.getElementById('cidade').style.color = 'green';
		}
	}

	for(let i in animal) {
		if(animal[i].indexOf(letra) != 0) {
			document.getElementById('animal').value = "palavra incorreta";
			document.getElementById('animal').style.color = 'red';
		} else if(animal[i].indexOf(letra) == 0) {
			document.getElementById('animal').value = "palavra certa!";
			document.getElementById('animal').style.color = 'green';
		}
	}

	for(let i in profissao) {
		if(profissao[i].indexOf(letra) != 0) {
			document.getElementById('profissao').value = "palavra incorreta";
			document.getElementById('profissao').style.color = 'red';
		} else if(profissao[i].indexOf(letra) == 0) {
			document.getElementById('profissao').value = "palavra certa!";
			document.getElementById('profissao').style.color = 'green';
		}
	}

	for(let i in fruta) {
		if(fruta[i].indexOf(letra) != 0) {
			document.getElementById('fruta').value = "palavra incorreta";
			document.getElementById('fruta').style.color = 'red';
		} else if(fruta[i].indexOf(letra) == 0) {
			document.getElementById('fruta').value = "palavra certa!";
			document.getElementById('fruta').style.color = 'green';
		}
	}

	for(let i in cor) {
		if(cor[i].indexOf(letra) != 0) {
			document.getElementById('cor').value = "palavra incorreta";
			document.getElementById('cor').style.color = 'red';
		} else if(cor[i].indexOf(letra) == 0) {
			document.getElementById('cor').value = "palavra certa!";
			document.getElementById('cor').style.color = 'green';
		}
	}

	for(let i in pais) {
		if(pais[i].indexOf(letra) != 0) {
			document.getElementById('pais').value = "palavra incorreta";
			document.getElementById('pais').style.color = 'red';
		} else if(pais[i].indexOf(letra) == 0) {
			document.getElementById('pais').value = "palavra certa!";
			document.getElementById('pais').style.color = 'green';
		}
	}
}