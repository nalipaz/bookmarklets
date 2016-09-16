Element.prototype.replaceSelection = function (replacementText) {
  var length = this.value.length;
  var startPos = this.selectionStart;
  var endPos = this.selectionEnd;

  this.value = this.value.substring(0, startPos) + replacementText + this.value.substring(endPos, length);
  this.selectionStart = startPos;
  this.selectionEnd = endPos;
};
