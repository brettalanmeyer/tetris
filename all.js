const gear = document.getElementById('gear');
const settings = document.getElementById('settings');

gear.addEventListener('click', function() {
	settings.classList.toggle('open');
});

new Game();
