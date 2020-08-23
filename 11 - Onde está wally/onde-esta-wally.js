function mostrarPosicao() {
	let matriz = [
	  ["O", "O", "O", "O"],
	  ["O", "O", "O", "O"],
	  ["O", "O", "O", "O"],
	  ["O", "O", "O", "O"],
	  ["P", "O", "O", "O"],
	  ["O", "O", "O", "O"]
	]

	let posicao = 0;
	let posicaoAux = []

	for(let i in matriz) {
		for(let x in matriz[i]) {
			if(matriz[i] != matriz[i][x]) {
				posicao = matriz.indexOf(matriz[i])+","+matriz[i].indexOf(matriz[i][x]);
			}
		}
	}

 	for(let i in posicao) {
 		if(i == 2) {
 			posicaoAux.push(parseInt(posicao[i]+1));
 		} else if(i < 2){
 			posicaoAux.push(posicao[i]);
 		}
  	}

  	let posFinal = posicaoAux.join("")

  	document.getElementById('result').style.height = "20px"
  	document.getElementById('result').innerHTML = "A letra diferente está na posição: "+posFinal; 
 }