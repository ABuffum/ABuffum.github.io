var header = [
	//Grey Area
		'<div style="left:0; width:100%; height:40px; background-color:#42484F;">',
		//Content Area
			'<div style="position:absolute; left:10%; right:10%; height:40px; background-color:#393E44;">',
		'</div>',
	'</div>',
	//Green Area
		'<div style="left:0; width:100%; height:120px; background-color:#38C098;">',
		//Content Area
			'<div style="position:absolute; left:10%; right:10%; height:120px; background-color:#288F70; font-size:0">',
			'<div style="top:20px; left:10px; color:white; font-size:60px; position absolute; padding: 14px 16px;">',
				'<a href="index.html" style="text-decoration:none; color:#FFFFFF;">Aidan Buffum</a>',
			'</div>',
			'<div style="top:70px; left:10px; color: white; font-size: 20px; position absolute; padding: 14px 16px;">' +
				'Interactive Media Programmer/Designer' +
			'</div>',
			'<div class="NAV" style="position:absolute; top:30px; bottom:30px; right:10px;z-index:2;">',
				'<a href="index.html">About</a>',
				'<a style="border-left: 1px solid #FFFFFF;" href="portfolio.html">Portfolio</a>',
				'<a href="tutorials.html" style="border-left: 1px solid #FFFFFF;">Tutorials</a>',
			'</div>',
		'</div>',
	'</div>'
].join("\n");

var footer = [
	//Social Media
	'<div style="width:100%; height:40px; background-color:#38C098;">',
		//Content Area
		'<div style="position:absolute; left:10%; right:10%; height:40px; background-color:#288F70;">',
			'<div style="position:absolute; float:left; height:20px; left:50%; top:10px; margin-left:-20px;">',
				//Icons
					'<a href="https://aidanbuffum.itch.io/" class="icons">',
						'<img src="assets/images/icons/logo_itchio_white.png" alt="itch.io" style="width: 20px;height:20px;">',
					'</a>',
					'<a href="https://www.linkedin.com/in/aidan-buffum/" class="icons">',
						'<img src="assets/images/icons/logo_linkedin_white.png" alt="LinkedIn" style="width: 20px;height:20px;">',
					'</a>',
					'</div>',
				'</div>',
			'</div>',
			//Copyright
			'<div style="left:0; width:100%; height:30px; background-color:#42484F;">',
				//Content Area
				'<div style="position:absolute; left:10%; right:10%; height:30px; background-color:#393E44;">',
					'<p> <div style="margin-top:-10px; text-align:center; color:white; font-size:75%;">Copyright &copy' + new Date().getFullYear() + ' Aidan Buffum.</div></p>',
				'</div>',
			'</div>'
].join("\n");

function toggle(elementId) {
	let element = document.getElementById(elementId);
	element.style.display = (element.style.display == 'block') ? 'none' : 'block';
}

function readMoreLess(toToggle, button) {
	let moreText = document.getElementById(toToggle);
	let btn = document.getElementById(button);
	if (moreText.style.display == 'none') {
		moreText.style.display = 'inline';
		btn.innerHTML = 'Read Less';
	}
	else {
		moreText.style.display = 'none';
		btn.innerHTML = 'Read More';
	}
}

function windowResized() {
	let width = Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
	document.getElementById('Projects').style.columnCount = Math.ceil(width / 350);
}

