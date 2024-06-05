    const body = document.getElementsByTagName('body')[0];

    const section = document.createElement('section');
    section.className = 'bigone';
    body.appendChild(section);

    const header = document.createElement('div');
    header.className = 'header';
    section.appendChild(header);

    const button = document.createElement('button');
    button.id = 'btn';
    button.textContent = 'add Task';
    header.appendChild(button);

    const container = document.createElement('div');
    container.className = 'container';
    section.appendChild(container);

    function createTask(text) {
        const todo = document.createElement('div');
        todo.className = 'todo';

        const card = document.createElement('p');
        card.id = 'card';
        card.textContent = text;

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

        return todo;
    }

    function createColumn(title, number) {
        const big = document.createElement('div');
        big.className = 'big';

        const nav = document.createElement('div');
        nav.className = 'nav';

        const icon = document.createElement('p');
        icon.id = 'icon';
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>`;

        const todoText = document.createElement('p');
        todoText.id = 'todo';
        todoText.textContent = title;

        const num = document.createElement('p');
        num.id = 'number';
        num.textContent = number;

        nav.appendChild(icon);
        nav.appendChild(todoText);
        nav.appendChild(num);
        big.appendChild(nav);

        return big;
    }

    const column = createColumn('To do', 5);
    container.appendChild(column);

    const col = createColumn('dfggk' , 6)
    container.appendChild(col);

    const tasks = [
        '[loan-management] - Add card component',
        '[loan-management] - Fix login issue',
        '[loan-management] - Update user profile',
        '[loan-management] - Deploy new version',
        '[loan-management] - Write unit tests'
    ];

    tasks.forEach(task => {
        const taskElement = createTask(task);
        column.appendChild(taskElement);
    });
