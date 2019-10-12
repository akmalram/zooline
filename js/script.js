window.addEventListener('DOMContentLoaded', () => {
    let menuToggler = () => {
        let btn = document.querySelector('header .btn-toggle');
        let menu = document.querySelector('nav .menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        });
        window.addEventListener('resize', (e) => {
            if(window.innerWidth > 720) {
                btn.classList.remove('active');
                menu.classList.remove('active');
            }
        })
    }

    menuToggler();

});