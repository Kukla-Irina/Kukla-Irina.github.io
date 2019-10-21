1
function applyRed() {
    var firstDiv = document.querySelector('div');
    firstDiv.style.color = 'red';
}
	function applyMoreRed() {
	var paragraphs = document.querySelectorAll('div');
	for(var div of paragraphs)
	div.style.color = 'red';
}
	function applyBlue() {
	var paragraphs = document.querySelectorAll('p');
	for(var p of paragraphs)
	p.style.color = 'blue';
	}

	function applyCLone() {
		var h1 = document.querySelector('h1');
		var copy = h1.cloneNode(true);
		var header = document.querySelector('header');
		header.appendChild(copy);
	}

	function applyMark() {
	var p = document.querySelector('p');
	p.setAttribute('mark', '')
	}

	function applyUndo() {
	var p = document.querySelector('p');
	p.removeAttribute('mark');

	}

	function applyBonus() {

		var em = document.createElement('em');
		var strong = document.querySelector('strong');
		var main = document.querySelector('main');
		em.textContent = 'Bonus fact. The dialling code for Russia is 007.';
		main.insertBefore(em, strong);
	}

	function applyNice() {
		var em = document.createElement('em');
	var strong = document.querySelector('strong');
	var main = document.querySelector('main');
	em.textContent = 'Ooops. At least it looks nice now.';
	main.replaceChild(em, strong);
	}
