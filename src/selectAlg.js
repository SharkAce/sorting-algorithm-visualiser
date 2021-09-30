function selectAlg(key, input) {
  if (document.getElementById(key).checked) {
    console.log(SORTING[key])
    return SORTING[key](input) || 'undefined';
  }
}