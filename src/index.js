import './style.css';
import Icon from './images/enter-icon.png';
import Status from './status.js';
import DragDropSort from './drag.js';
import AddRm from './addrm.js';

const list = document.getElementById('td-section');

const inputLine = document.getElementById('input-line');
inputLine.insertAdjacentHTML('beforeend', `<img src="${Icon}" alt="enter icon" class="enter-icon">`);

const status = new Status();
document.addEventListener('DOMContentLoaded', status.populate);

list.addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    status.validation(e);
  }
});

const drag = new DragDropSort();
const addrm = new AddRm();

  document.addEventListener('dragover', drag.dragOver);

  document.addEventListener('drop', drag.dropSort);

document.addEventListener('DOMContentLoaded', addrm.loadLiEvents);

const inpt = document.getElementById('inpt');
inpt.addEventListener('keypress', addrm.addToList);

const rmvBtn = document.getElementById('remove-btn');
rmvBtn.addEventListener('click', addrm.clearCompleted);
