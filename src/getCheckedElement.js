function getCheckedElement() {
  let key = '';
  let keys = Object.keys(SORTING.methods);
  for (let i = 0; i < keys.length; i++) {
    let dom = document.getElementById(keys[i]);
    if (dom.checked) {
      key = keys[i];
    }
  }
  return key;
}