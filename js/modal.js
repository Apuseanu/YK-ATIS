document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const buttons = document.querySelectorAll('.mai');
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        modals.forEach(modal => modal.style.display = 'none');
        modals[index].style.display = 'block';
      });
    });
  
    modals.forEach(modal => {
      modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });
  });