(function () {
  var loaderScript = document.createElement('script');
  loaderScript.src = 'https://cdn.rawgit.com/nalipaz/bookmarklets/df32bba6d34afffdd120ba268637653968fe12b0/lib/Loader.js';
  loaderScript.addEventListener('load', callback, false);
  document.body.appendChild(loaderScript);

  function callback() {
    var l = new Loader();
    l.require([
      'https://cdn.rawgit.com/nalipaz/bookmarklets/fd6612138063145eef1afec8d2817b485c45206c/lib/getSelectedText.js',
      'https://cdn.rawgit.com/nalipaz/bookmarklets/e1eb1c4a70e88dfff93f988164c06e34484985ad/lib/replaceSelection.js'
    ], function () {
      var elem = document.activeElement;
      elem.replaceSelection(elem.getSelectedText().toLowerCase());
    });
  }
})();
