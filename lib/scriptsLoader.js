function initCheck(event) {
  if (!scriptsLoaded) {
    var scriptsLoaded = 0;
  }
  if (scriptsLoaded === srcs.length) {
    window[event.target.callback]();
  }
  scriptsLoaded++;
}
function scriptLoader(srcs, callbackFunction) {
  var scripts = [];
  for (var i = 0; i < srcs.length; i++) {
    scripts[i] = document.createElement("script");
    if (scripts[i].addEventListener) {
      scripts[i].addEventListener("load", initCheck, false);
      scripts[i].callback = callbackFunction;
    }
    else {
      if (scripts[i].readyState) {
        scripts[i].onreadystatechange = initCheck;
      }
    }
    document.body.appendChild(scripts[i]);
  }
}
