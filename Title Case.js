String.prototype.toTitleCase = function () {
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return this.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};
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
