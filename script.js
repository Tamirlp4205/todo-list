addButton.addEventListener('click', function () {
    const taskText = prompt('Шинэ үүрэг даалгавар оруулна уу:');
    if (taskText !== null) {
        createTaskBox(taskText);
    }
});