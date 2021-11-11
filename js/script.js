const maxNum = document.getElementById('max_num');
const minNum = document.getElementById('min_num');
const generateBtn = document.getElementById('btn_generate');
const resetBtn = document.getElementById('reset_btn');
const massage = document.getElementById('message');
let arrayNum = [];

function getRandomInteger(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function generate(event) {
	event.preventDefault();
	let inputminValue = minNum.value;
	let inputmaxValue = maxNum.value;
	if (arrayNum.length === (inputmaxValue - inputminValue + 1)) {
		massage.innerText = 'Elements are over';
		generateBtn.setAttribute('disabled', 'disabled');
		minNum.setAttribute('disabled', 'disabled');
		maxNum.setAttribute('disabled', 'disabled');
		return;
	}
	if (inputminValue.length === 0 && inputmaxValue.length === 0) {
		output.innerText = 'Value must not be empty';
		return;
	}
	inputminValue = Number(inputminValue);
	inputmaxValue = Number(inputmaxValue);
	if (inputmaxValue <= inputminValue) {
		massage.innerText = 'Error';
		return;
	}
	if (Number.isInteger(inputminValue) === false && Number.isInteger(inputmaxValue) === false) {
		output.innerText = 'Only integer';
		return;
	}
	const random = getRandomInteger(inputminValue, inputmaxValue);
	if (!arrayNum.includes(random)) {
		arrayNum.push(random);
		massage.innerText = random;
		return;
	}
}
function reset(event) {
	event.preventDefault();
	massage.innerText = '';
	minNum.value = '';
	maxNum.value = '';
	arrayNum.length = 0;
	generateBtn.removeAttribute('disabled');
	minNum.removeAttribute('disabled');
	maxNum.removeAttribute('disabled');
}

generateBtn.addEventListener('click', generate);
resetBtn.addEventListener('click', reset);









