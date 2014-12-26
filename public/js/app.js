
if (typeof require !== "undefined") {
//This code is spesifically for node-webkit

	var gui = require('nw.gui');
	var Window = gui.Window.get();

	function minimize() {
		Window.minimize();
	}

	function toggleFullscreen() {
		Window.toggleKioskMode();
	}

	function closeWindow() {
		Window.close();
	}

	//https://github.com/rogerwang/node-webkit/wiki/Window#new-win-policy
	Window.on('new-win-policy', function(frame, url, policy){
		// policy.forceNewWindow();
		gui.Shell.openExternal(url); //any URL with target=_blank will open in the user's default browser
		policy.ignore();
	});
}
