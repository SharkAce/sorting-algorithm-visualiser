function unCheckAll(except) {
  let keys = getKeys();
  if (keys.length === document.querySelectorAll('.table .alg').length) {
    for (let i = 0; i < keys.length; i++) {
      let dom = document.getElementById(keys[i]);
      if (except === keys[i]) {
        dom.checked = true;
      } else {
        dom.checked = false;
      }
    }
  }
  return;
}