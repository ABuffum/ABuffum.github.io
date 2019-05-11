function toggleWorkOn() {
	var drop = document.getElementById("workDropdown");
	if (drop.style.display == 'block') {
		drop.style.display = 'none';
	} else {
		drop.style.display = 'block';
	}
}
function toggleWorkOff() {
	var drop = document.getElementById("workDropdown");
	drop.style.display = 'none';
}





function readMoreLess(toggle, button) {
	var moreText = document.getElementById(toggle);
	var btn = document.getElementById(button);
	if (moreText.style.display == 'none') {
		moreText.style.display = 'inline';
		btn.innerHTML = 'Read Less';
	}
	else {
		moreText.style.display = 'none';
		btn.innerHTML = 'Read More';
	}
}