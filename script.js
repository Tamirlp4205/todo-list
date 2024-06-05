const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const body = document.getElementsByTagName('body')[0];

const section = document.getElementsByClassName('bigone')[0];
section.className = 'bigone';

const container = document.getElementsByClassName('container')[0];
container.className = 'container';

function createColumn(title, number) {
  const big = document.createElement('div');
  big.className = 'big';

  const nav = document.createElement('div');
  nav.className = 'nav';
  
  const navbar = document.createElement('div');
  navbar.className = 'navbar';
  

  const icon = document.createElement('div');
  icon.id = 'icon';
  icon.innerHTML = `<i class="fa-solid fa-circle"></i>`;

  const todoText = document.createElement('p');
  todoText.id = 'todo';
  todoText.textContent = title;

  const num = document.createElement('p');
  num.id = 'number';
  num.textContent = number;
 
  navbar.appendChild(icon);
  navbar.appendChild(todoText);
  nav.appendChild(navbar)
  nav.appendChild(num);
  big.appendChild(nav);

  return big;
}

const pro = createColumn('In Progress' , 6)
const doneol = createColumn('Done' , 6)
const col = createColumn('Blocked' , 6)
container.appendChild(pro)
container.appendChild(doneol)
container.appendChild(col);
section.appendChild(container);
body.appendChild(section);