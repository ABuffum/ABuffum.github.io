function loadProjects(projects) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://www.abuffum.com/assets/files/projects.json');
	xhr.onload = function () {
		let proj = document.getElementById("Projects");
		//proj.innerHTML = "";
		projects.forEach(subset => proj.innerHTML += multiProjectShowcase(JSON.parse(xhr.responseText)[subset]));
		let pop = document.getElementById("populate");
		if (pop != null) pop.remove();
	}
	xhr.send();
}

function multiProjectShowcase(data) {
	var output = "";
	data.forEach(element => output += projectShowcase(element));
	return output;
}

function projectShowcase(data) {
	var name = data.title.toLowerCase().replace(/\s/g, '');
	var miniWidth = 48;
	if (data.images.length == 4) miniWidth = 23;
	else if (data.images.length == 3) miniWidth = 31.3;
	else if (data.images.length == 2) miniWidth = 48;
	else if (data.images.length == 8) minWidth = 48;
	var filters = '<div class="filterDiv filterShow ';
	if (typeof data.mediumTags != 'undefined') data.mediumTags.forEach(element => filters += 'tag_' + element.replace(/\s/g, '').toLowerCase() + ' ');
	if (typeof data.skillTags != 'undefined') data.skillTags.forEach(element => filters += 'tag_' + element.replace(/\s/g, '').toLowerCase() + ' ');
	if (typeof data.aspectTags != 'undefined') data.aspectTags.forEach(element => filters += 'tag_' + element.replace(/\s/g, '').toLowerCase() + ' ');
	if (typeof data.otherTags != 'undefined') data.otherTags.forEach(element => filters += 'tag_' + element.replace(/\s/g, '').toLowerCase() + ' ');
	if (typeof data.hiddenTags != 'undefined') data.hiddenTags.forEach(element => filters += 'tag_' + element.replace(/\s/g, '').toLowerCase() + ' ');
	filters += '">';
	var element = [
		filters,
		'<div class= "greyContainer" >',
		'<div class="splitBody" style="width:98%; background-color:#42484F; margin-top:10px; border-radius:7px; margin-left:1%">',
		'<div id="' + name + '" class="splitBody" style="width:96%; padding:0%;">'
	];
	if (typeof gameLink != 'undefined') element.push('<img src="' + data.coverImage + '" class="linkImage" style="float:left;width:100%;margin:2.5%" onclick="window.open(\'' + data.playLink + '\')">');
	else element.push('<img src="' + data.coverImage + '" class="linkImage" style="float:left;width:100%;margin:2.5%" onclick="window.open(this.src)">');

	element.push('<div style="margin-left:2.5%; width:100%;">');
	for (var i = 0; i < data.images.length; i++) {
		if (i == 0 || data.images.length == 8 && i % 2 == 0) element.push('<img src="' + data.images[i] + '" class="linkImage" style="margin-left:0; margin-bottom:10px; width:' + miniWidth + '%;" onclick="window.open(this.src)">');
		else element.push('<img src="' + data.images[i] + '" class="linkImage" style="margin-bottom:10px; width:' + miniWidth + '%;" onclick="window.open(this.src)">');
	}
	element.push('</div>');

	element.push('<div class="splitBody tagWrapperFlexbox" style="width:99%; margin-top:0;">');
	
	var authorship = data.authors;
	if (Array.isArray(data.authors)) {
		authorship = "By";
		for (var i = 0; i < data.authors.length; i++) {
			authorship += " " + data.authors[i];
			if (i < data.authors.length - 1) authorship += (data.authors.length > 2) ? "," : "";
			if (i == data.authors.length - 2) authorship += " and";
		}
	}
	if (typeof data.mediumTags != 'undefined') data.mediumTags.forEach(item => element.push('<div class="mediumTag"> ' + item + ' </div>'));
	if (typeof data.skillTags != 'undefined') data.skillTags.forEach(item => element.push('<div class="skillTag"> ' + item + ' </div>'));
	if (typeof data.aspectTags != 'undefined') data.aspectTags.forEach(item => element.push('<div class="aspectTag"> ' + item + ' </div>'));
	if (typeof data.otherTags != 'undefined') data.otherTags.forEach(item => element.push('<div class="otherTag"> ' + item + ' </div>'));
	element.push('</div>');
	element.push(...[
		'<div class="splitBody" style="width:100%;height:100%;background-color:white;border-radius:7px;margin:1%;">',
		'<p style="text-align:center;color:#42484F;"><u>' + data.title + '</u></p>',
		'<p style="text-align:center;color:#42484F;">' + authorship + '</p>'
	]);
	var description = data.description.join("\n<p/>");
	if (description.length > 0)
		element.push(...[
			'<div class="readMore">',
			'<button onclick="readMoreLess(\'expand_' + name + '\',\'button_' + name + '\')" id="button_' + name + '">Read More</button>',
			'</div>',
			'<div id="expand_' + name + '" style="display:none; white-space:pre-wrap;">' + description + '</div>'
		]);
	element.push(...[
		'</div>',
		'</div>',
		'</div>',
		'</div>',
		'</div>'
	]);

	element = element.join("\n");
	return element;
}

//filter to the selected elements
function filter(c) {
	if (c === "all" || c == null || typeof c == 'undefined') c = "";
	else console.log("filtering on " + c);
	var x = document.getElementsByClassName("filterDiv");
	for (var i = 0; i < x.length; i++) {
		removeClass(x[i], "filterShow");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "filterShow");
	}
}

//show elements
function addClass(element, name) {
	var classes = element.className.split(" ");
	var toAdd = name.split(" ");
	for (var i = 0; i < toAdd.length; i++) if (classes.indexOf(toAdd[i]) == -1) element.className += " " + toAdd[i];
}

//hide elements
function removeClass(element, name) {
	var classes = element.className.split(" ");
	var toRemove = name.split(" ");
	for (var i = 0; i < toRemove.length; i++) while (classes.indexOf(toRemove[i]) > -1) classes.splice(classes.indexOf(toRemove[i]), 1);
	element.className = classes.join(" ");
}