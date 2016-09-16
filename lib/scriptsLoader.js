function initCheck(event) {
  if (!scriptsLoaded) {
    var scriptsLoaded = 0;
  }
  if (scriptsLoaded === srcs.length) {
    window[event.target.callback]();
  }
  scriptsLoaded++;
}
function scriptLoader(event) {
  var scripts = [];
  for (var i = 0; i < event.target.srcs.length; i++) {
    scripts[i] = document.createElement("script");
    scripts[i].addEventListener("load", initCheck, false);
    scripts[i].callback = event.target.callback;

    document.body.appendChild(scripts[i]);
  }
}
