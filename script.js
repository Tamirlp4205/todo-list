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
 
const big = document.getElementsByClassName('big')[0];

function createColumn(title  ,number, color) {
  const big = document.createElement('div');
  big.className = 'big';

  const nav = document.createElement('div');
  nav.className = 'nav';
  
  const navbar = document.createElement('div');
  navbar.className = 'navbar';
  
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.classList.add(color);

  const todoText = document.createElement('p');
  todoText.id = 'todo';
  todoText.textContent = title;

  const num = document.createElement('p');
  num.id = 'number';
  num.textContent = number;
 
  navbar.appendChild(circle);
  navbar.appendChild(todoText);
  nav.appendChild(navbar)
  nav.appendChild(num);
  big.appendChild(nav);

  return big;
}
const todo = createColumn('To do' ,0,'white' )
todo.id = 'todocolumn'
const progress = createColumn('In Progress' , 0 , 'yellow')
progress.id = "progresscolumn"
const done = createColumn('Done' , 0 , "blue")
done.id = 'donecolumn'
const block = createColumn('Blocked' , 0 , 'red')
block.id = 'blockcolumn'
container.appendChild(todo)
container.appendChild(progress)
container.appendChild(done)
container.appendChild(block);
section.appendChild(container);
body.appendChild(section);


function createTask() {
  const purpose = document.getElementById('purpose').value;
  const status = document.getElementById('status').value;

  const todo = document.createElement('div');
  todo.className = 'todo';

  const card = document.createElement('p');
  card.id = 'card';
  card.textContent = purpose;

  const pen = document.createElement('button');
  pen.id = 'pen';
  pen.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4010_9)">
          <path d="M11.3333 2.00001C11.5031 1.79936 11.7131 1.63605 11.95 1.52046C12.1869 1.40488 12.4454 1.33956 12.7091 1.32868C12.9728 1.3178 13.2359 1.36159 13.4816 1.45727C13.7273 1.55294 13.9502 1.69839 14.1362 1.88435C14.3221 2.07032 14.4671 2.29272 14.5617 2.53737C14.6563 2.78202 14.6985 3.04356 14.6857 3.30533C14.6729 3.56709 14.6053 3.82333 14.4872 4.05772C14.3692 4.29211 14.2032 4.4995 14 4.66667L4.99998 13.6667L1.33331 14.6667L2.33331 11L11.3333 2.00001Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 3.33333L12.6667 5.99999" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_4010_9">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
      </svg>
  `;

  const trash = document.createElement('button');
  trash.id = 'trash';
  trash.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4H14" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66668C4.00001 14.6667 3.33334 14 3.33334 13.3333V4" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.33334 3.99999V2.66666C5.33334 1.99999 6.00001 1.33333 6.66668 1.33333H9.33334C10 1.33333 10.6667 1.99999 10.6667 2.66666V3.99999" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.66666 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33334 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  `;

  todo.appendChild(card);
  todo.appendChild(pen);
  todo.appendChild(trash);

  let column;
            switch (status) {
                case 'todo':
                    column = document.getElementById('todocolumn');
                    break;
                case 'progress':
                    column = document.getElementById('progresscolumn');
                    break;
                case 'done':
                    column = document.getElementById('donecolumn');
                    break;
                case 'block':
                    column = document.getElementById('blockcolumn');
                    break;
            }

            column.appendChild(todo);
            dialog.close();
}
