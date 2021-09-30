function selectAlg(key, input) {
  if (document.getElementById(key).checked) {
    return SORTING.methods[key](input) || 'undefined';
  }
}