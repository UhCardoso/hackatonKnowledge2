function substituir() {
	let alfabeto = [];
	alfabeto[1] = 'a';
	alfabeto[2] = 'b';
	alfabeto[3] = 'c';
	alfabeto[4] = 'd';
	alfabeto[5] = 'e';
	alfabeto[6] = 'f';
	alfabeto[7] = 'g';
	alfabeto[8] = 'h';
	alfabeto[9] = 'i';
	alfabeto[10] = 'j';
	alfabeto[11] = 'k';
	alfabeto[12] = 'l';
	alfabeto[13] = 'm';
	alfabeto[14] = 'n';
	alfabeto[15] = 'o';
	alfabeto[16] = 'p';
	alfabeto[17] = 'q';
	alfabeto[18] = 'r';
	alfabeto[19] = 's';
	alfabeto[20] = 't';
	alfabeto[21] = 'u';
	alfabeto[22] = 'v';
	alfabeto[23] = 'w';
	alfabeto[24] = 'x';
	alfabeto[25] = 'y';
	alfabeto[25] = 'z';

	let string = document.getElementById('string').value;
	let stringAux = [];

	for(let i in string) {
		stringAux.push(alfabeto.indexOf(string[i]));
	}

	document.getElementById("result").innerHTML = stringAux;
}