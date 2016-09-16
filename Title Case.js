(function () {
  function callback() {
    Element.prototype.getSelectedText = function () {
      return this.value.substring(this.selectionStart, this.selectionEnd);
    };
    Element.prototype.replaceSelection = function (replacementText) {
      var length = this.value.length;
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;

      this.value = this.value.substring(0, startPos) + replacementText + this.value.substring(endPos, length);
      this.selectionStart = startPos;
      this.selectionEnd = endPos;
    };
    var elem = document.activeElement;
    elem.replaceSelection(elem.getSelectedText().toTitleCase());
  }
  var s = document.createElement("script");
  s.src = "https://cdn.rawgit.com/gouch/to-title-case/dd256b78e5048ed747fb19032f98663bda71867c/to-title-case.js";
  if (s.addEventListener) {
    s.addEventListener("load", callback, false)
  }
  else {
    if (s.readyState) {
      s.onreadystatechange = callback
    }
  }
  document.body.appendChild(s);
})()
