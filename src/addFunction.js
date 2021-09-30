let firstTimeRunning = true;

function addDomFunc(name) {
  let inputElement = document.createElement('input');
  inputElement.setAttribute('id', name);
  inputElement.setAttribute('type', 'radio');
  inputElement.setAttribute('onchange', 'unCheckAll("' + name + '")');
  inputElement.setAttribute('class', 'alg');
  if (firstTimeRunning == true) {
    inputElement.checked = true;
    firstTimeRunning = false;
  }

  let form = document.querySelector("body > main > .table");

  form.appendChild(inputElement);
  let label = document.createElement('label');
  label.setAttribute('for', name);
  label.textContent = name;
  form.appendChild(label);

  let br = document.createElement('br');
  form.appendChild(br);
  return;
}