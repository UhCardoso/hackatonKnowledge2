function validar() {
	let numCartao = document.getElementById('num-cartao').value;
	let soma = 0;

	//verificar cartao menor ou igual a 15 digitos
	if(numCartao.length <= 15) {
	
		for(let i in numCartao) {
			if(i%2 == 0) {
				soma += numCartao[i] *1;
			} else {
				if(numCartao[i*2] > 9){
					soma+= (numCartao[i]*2)-9;
				} else {
					soma+= (numCartao[i]*2);
				}
			}
		}

	//verificar cartao maior ou igual a 16 digitos
	} else if(numCartao.length >= 16) {

		for(let i in numCartao) {
			if(i%2 == 0) {
				if(numCartao[i]*2 > 9) {
					soma += (numCartao[i] *2)-9;
				} else {
					soma += numCartao[i] *2;
				}
			} else {
				soma+= numCartao[i]*1;
			} 
		}
	}

	let invalidez = 0;

	if(soma%10 == 0) {
		console.log('Cartao valido!')
		let resultado = document.getElementById('campo-result');
		resultado.innerHTML = 'Cartão válido!';
		resultado.style.background = 'green';
		resultado.style.border = "1px solid black";
		resultado.style.color = "white";
	} else {
		invalidez = 1;
		console.log('Cartao invalido!');
		let resultado = document.getElementById('campo-result');
		resultado.innerHTML = 'Cartão Inválido!';
		resultado.style.background = 'red';
		resultado.style.border = "1px solid black";
		resultado.style.color = "white";
	}

	let emissor = null;
	if(invalidez == 0) {
		if(numCartao.indexOf(4) == 0) {
			emissor = "Emissor: Visa";
		} else if(numCartao.indexOf(51) == 0 || numCartao.indexOf(52) == 0 || numCartao.indexOf(53) == 0 || numCartao.indexOf(54) == 0 || numCartao.indexOf(5) == 0) {
			emissor = "Emissor: Mastercard";
		} else if(numCartao.indexOf(36) == 0 || numCartao.indexOf(38) == 0) {
			emissor = "Emissor: Dinners Club";
		} else if(numCartao.indexOf(6011) == 0 || numCartao.indexOf(65) == 0) {
			emissor = "Emissor: Discover";
		} else if(numCartao.indexOf(35) == 0) {
			emissor = "Emissor: JCB"
		} else if(numCartao.indexOf(34) == 0 || numCartao.indexOf(37) == 0) {
			emissor = "Emissor: American Express";
		} else {
			emissor = "Emissor: Erro ao identificar bandeira do cartão"
		}
	} else {
		emissor = "Emissor: Erro ao identificar bandeira do cartão"
	}

	bandeira = document.getElementById('bandeira');
	bandeira.innerHTML = emissor;
}