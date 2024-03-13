document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо всі кнопки
  const buttons = document.querySelectorAll('.courses__list-item button');

  // Додаємо обробник подій для кожної кнопки
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Знаходимо батьківський елемент (li) для кнопки
      const listItem = this.closest('.courses__list-item');
      
      // Знаходимо drop-list для поточної картки
      const dropList = listItem.querySelector('.drop-list');

      // Перевіряємо, чи drop-list має клас "open"
      const isOpen = dropList.classList.contains('open');

      // Змінюємо висоту drop-list згідно з поточним станом
      if (isOpen) {
        dropList.style.height = '0';
        dropList.classList.remove('open');
        this.querySelector('.down-arrow').style.transform = 'rotate(0deg)';
      } else {
        dropList.style.height = dropList.scrollHeight + 'px';
        dropList.classList.add('open');
        this.querySelector('.down-arrow').style.transform = 'rotate(180deg)';
      }
    });
  });
});
