document.addEventListener("DOMContentLoaded", function() {
	const links = document.querySelectorAll('a');
	links.forEach(link => {
		if (link.hostname !== window.location.hostname) {
			link.target = '_blank';
		}
	});
});