/*
 * ASCII Camera
 * http://idevelop.github.com/ascii-camera/
 *
 * Copyright 2013, Andrei Gheorghe (http://github.com/idevelop)
 * Released under the MIT license
 */

(function() {
	var asciiContainer = document.getElementById("ascii");
	var capturing = false;
    
	camera.init({
		// width: 250,
		// height: 125,
        width: 200,
        height: 150,
		fps: 240,
		mirror: true,

		onFrame: function(canvas) {
    		ascii.fromCanvas(canvas, {
				contrast: 160,
				callback: function(asciiString) {
					asciiContainer.innerHTML = asciiString;
				}
			});
		},

		onSuccess: function() {
			document.getElementById("info").style.display = "none";
           
			const button = document.getElementById("button");
			button.style.display = "block";
			button.onclick = function() {
				if (capturing) {
					camera.pause();
					button.innerText = 'resume';
				} else {
					camera.start();
					button.innerText = 'Cheese!!!';
				}
				capturing = !capturing;
			};
		},

		onError: function(error) {
			// TODO: log error
		},

		onNotSupported: function() {
			document.getElementById("info").style.display = "none";
			asciiContainer.style.display = "none";
			document.getElementById("notSupported").style.display = "block";
		}
	});
})();
