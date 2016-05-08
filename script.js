var view = document.getElementById('show_location');
function display_location(a) {
	view.innerHTML = "X: " + a.clientX + "; " + "Y: " + a.clientY + "; "  + new Date();
} 