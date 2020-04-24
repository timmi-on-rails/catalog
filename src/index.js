function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hallo'

  return element;
}

document.body.appendChild(component());
