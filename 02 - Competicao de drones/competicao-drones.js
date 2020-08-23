function prepararLista() {
	let dronesExistentes = [20,15,40,11,16,22,60];
	let dronesMenutencao = [15, 16, 22];
	let dronesDisponiveis = [];
	let dronesDispAux = [];
	let dronesDipsFinal = [];
		
	for(let i in dronesExistentes) {
		if(dronesMenutencao.indexOf(dronesExistentes[i]) == -1) {
			dronesDisponiveis.push(dronesExistentes[i]);
		}
	}

	dronesDisponiveis = dronesDisponiveis.sort()

	for(let i in dronesDisponiveis) {
		if( i < 3) {
			dronesDispAux.push(dronesDisponiveis[i])
		}
	}

	console.log(dronesDispAux.reverse());

	for (let i in dronesDispAux) {
		dronesDipsFinal.push(dronesExistentes.indexOf(dronesDispAux[i]));
	}

	console.log(dronesDipsFinal);

	document.getElementById('id1').innerHTML = dronesDipsFinal[0]
	document.getElementById('id2').innerHTML = dronesDipsFinal[1]
	document.getElementById('id3').innerHTML = dronesDipsFinal[2]

	document.getElementById('valor1').innerHTML = dronesDispAux[0]
	document.getElementById('valor2').innerHTML = dronesDispAux[1]
	document.getElementById('valor3').innerHTML = dronesDispAux[2]
}