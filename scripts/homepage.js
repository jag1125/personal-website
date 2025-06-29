
document.addEventListener('DOMContentLoaded', () => {
    // Fade out loading screen
    const loading_screen = document.getElementById('loading');
    loading_screen.classList.add('fade-out-loading');

    // Exit screen for popups
    const exit_screen = document.getElementById('exit-screen-container');

    // All buttons
    const about_button = document.getElementById('about-prop');

    // All screens
    const about_screen = document.getElementById('about-me-container');

    function openScreen(screen_name){
        exit_screen.classList.remove('hidden');
        exit_screen.classList.add('fade-in');

        switch(screen_name){
            case 'about':
                about_screen.classList.remove('hidden');
                about_screen.classList.add('current');
                about_screen.classList.add('fade-in');
                return
            default:
                return
        }
    };

    function closeScreen(){
        exit_screen.classList.add('hidden');
        exit_screen.classList.remove('fade-in');
        exit_screen.classList.add('fade-out');
        const popup = document.getElementsByClassName('current');
        popup[0].classList.remove('fade-in');
        popup[0].classList.add('fade-out');
        popup[0].classList.add('hidden');
        popup[0].classList.remove('current');

    }

    exit_screen.addEventListener('click', closeScreen);
    about_button.addEventListener('click', () => openScreen('about'));

});
