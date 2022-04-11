const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () => {
    document.getElementById('VideoPlayer').src = 'https://www.youtube.com/embed/JfVOs4VSpmA';
    modalWindow.classList.remove('active');
});