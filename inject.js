// this is the code which will be injected into a page


// extension purpose: for developers to test if their own websites are accessible/508 compliant for blind and colorblind people
// also for making websites more accessible for said individuals by giving them advanced and optimized tools for accessibility

// make an Edge/Firefox extension as well as a chrome extension?

// allow users to inject their css/JS like mastermind extension?

// make extension that removes extra GUI garbage in twitch chat (chat box/bits/chat rooms)

// make popup.html a slick, modern popup with effects and styles

//transcribe images on page to text to speech, transcrption api?

(function() {

//todo:make a stylesheet that force changes body, font, font-color/size


// loop through all dom elements
var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here
}
console.log("all: ")
console.log(all)


// text to speech

// get entire text of page
text = document.body.textContent || document.body.innerText;
var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);


//var msg = new SpeechSynthesisUtterance('Hello World');
//window.speechSynthesis.speak(msg);



// colorblind mode
	(function () {
		var body = document.body;
		
		// IE/Edge
		body.style['filter'] = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)';
		
		// Modern Browsers
		if (!body.style['filter']) {
		  body.style['-webkit-filter'] = 'grayscale(1)';
		  body.style['filter'] = 'grayscale(1)';
		}
	  }());

// to turn off grayscale 
// body.style['-webkit-filter'] = 'grayscale(0)';
// body.style['filter'] = 'grayscale(0)';






//test div 

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	
	//alert('inserted self..');

})();