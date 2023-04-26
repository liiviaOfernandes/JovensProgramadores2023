window.onload = () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const toggleBtnIcon = document.querySelector('.toggle-btn i');
    const dropDownMenu = document.querySelector('.dropdown-menu');
    
    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        // maneira mais prática de fazer IF e ELSE
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
}

