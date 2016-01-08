setInterval(function () {
	document.querySelector('h1').innerHTML = Number(new Date()).toString(36);
}, 1000);
