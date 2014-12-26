'use strict';

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
    gui.Shell.openExternal(url)
    policy.ignore();
});
