const inputs = document.querySelectorAll('.controls input');

function changeHandler() {
  document.documentElement.style.setProperty('--' + this.name, this.value + (this.dataset.sizing || ''));
  //document.documentElement.style.setProperty('--' + this.name, this.value + (this.name === 'base' ? '' : 'px'));
}

inputs.forEach(input => input.addEventListener('change', changeHandler));
inputs.forEach(input => input.addEventListener('mousemove', changeHandler));

