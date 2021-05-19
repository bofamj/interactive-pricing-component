const btn = document.getElementById('btn');
const slider = document.getElementById('sliderr');
const pris = document.getElementById('pris');
const slid = document.getElementById('slid');
const brog = document.querySelector('.brog');

pris.innerHTML = '$' + slider.value;

btn.addEventListener('mousemove', function() {
	slider.oninput = function() {
		brog.style.width = this.value + '%';
		pris.innerHTML = '$' + this.value;
		slid.style.left = this.value + '%';
	};
});
