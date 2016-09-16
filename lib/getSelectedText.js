Element.prototype.getSelectedText = function () {
  return this.value.substring(this.selectionStart, this.selectionEnd);
};
