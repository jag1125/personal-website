let popup_on = false;
let current_photo = 1;

document.addEventListener('DOMContentLoaded', () => {
    // Fade out loading screen
    const loading_screen = document.getElementById('loading');
    loading_screen.classList.add('fade-out-loading');

    // Exit screen for popups
    const exit_screen = document.getElementById('exit-screen-container');

    // All buttons
    const about_button = document.getElementById('about-prop');
    const resume_button = document.getElementById('resume-prop');
    const projects_button = document.getElementById('project-prop');

    // All screens
    const about_screen = document.getElementById('about-me-container');
    const resume_screen = document.getElementById('resume-container');
    const projects_screen = document.getElementById('projects-container');

    // Mini Project Screen
    const mini_projects_screen = document.getElementById('mini-projects-container');

    // Extra
    const popup_back = document.createElement('img');
    popup_back.id = 'popup-back';
    popup_back.setAttribute('src', 'images/project-pop-back.png');
    popup_back.classList.add('hidden');
    projects_screen.appendChild(popup_back);

    function openScreen(screen_name){
        exit_screen.classList.remove('hidden');
        exit_screen.classList.add('fade-in');

        switch(screen_name){
            case 'about':
                about_screen.classList.remove('hidden');
                about_screen.classList.add('current');
                about_screen.classList.add('fade-in');
                return
            case 'resume':
                resume_screen.classList.remove('hidden');
                resume_screen.classList.add('current');
                resume_screen.classList.add('fade-in');
                return
            case 'projects':
                projects_screen.classList.remove('hidden');
                projects_screen.classList.add('current');
                projects_screen.classList.add('fade-in');
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

        if(popup_on){
            const curr_popup = document.getElementsByClassName('curr-project');
            curr_popup[0].classList.add('hidden');
            popup_back.classList.add('hidden');
            curr_popup[0].classList.remove('fade-in');
            popup_back.classList.remove('fade-in');
            curr_popup[0].classList.add('fade-out');
            popup_back.classList.add('fade-out');
            curr_popup[0].classList.remove('curr-project');
            popup_on = false;
        }
        return;

    }

    function createProject(short_name, name, tools, num_photos, description){
        // Initialization of container on projects page
        const full_project = document.createElement('div');
        const project_img = document.createElement('div');
        const header_img = document.createElement('img');
        const project_title = document.createElement('h2');
        const short_desc = document.createElement('p');
        const more_btn = document.createElement('button');
        const icon_container = document.createElement('div');

        const short_desc_text = description.slice(0, 50) + '...';
        const random_header = Math.floor(Math.random() * 4);

        full_project.classList.add('mini-project-container');
        project_img.classList.add('mini-project-img');
        project_img.id = `${short_name}-img`;
        header_img.setAttribute('src', `images/headers/${random_header}.png`);
        header_img.classList.add('header-img');
        project_title.textContent = name;
        short_desc.textContent = short_desc_text;
        project_title.classList.add('mini-project-title');
        project_title.classList.add('title-text');
        project_title.classList.add('lighter');
        short_desc.classList.add('mini-project-shdesc');
        short_desc.classList.add('p-text');
        more_btn.textContent = 'Learn More';
        more_btn.classList.add('learn-more-btn');
        more_btn.classList.add('small-title-text');
        icon_container.classList.add('icon-container');
    
        // Adding icons
        for(const logo_name of tools){
            icon_container.appendChild(createLogo(logo_name));
        }

        // Intialization of popup
        const popup_container = document.createElement('div');
        const popup_title = document.createElement('h1');
        const popup_desc = document.createElement('p');
        const popup_exit = document.createElement('button');
        const popup_left = document.createElement('button');
        const popup_right = document.createElement('button');
        const popup_photo = document.createElement('img');

        popup_container.id = `${short_name}-container`
        popup_container.classList.add('hidden');
        popup_container.classList.add('popup-container');
        popup_photo.setAttribute('src', `images/${short_name}-popup/1.png`);
        popup_photo.classList.add('popup-photo');
        popup_title.classList.add('popup-title');
        popup_title.classList.add('title-text');
        popup_title.classList.add('dark');
        popup_title.textContent = name;
        popup_desc.textContent = description;
        popup_desc.classList.add('p-text');
        popup_desc.classList.add('popup-text');
        popup_exit.textContent = 'x';
        popup_exit.classList.add('popup-exit');
        popup_exit.classList.add('title-text');
        popup_exit.classList.add('circle-button');
        popup_left.classList.add('title-text');
        popup_left.classList.add('circle-button');
        popup_right.classList.add('title-text');
        popup_right.classList.add('circle-button');
        popup_left.classList.add('popup-left');
        popup_right.classList.add('popup-right');
        popup_left.textContent = '<';
        popup_right.textContent = '>';

        popup_left.addEventListener('click', () => {
            if(current_photo === 1){
                popup_photo.setAttribute('src', `images/${short_name}-popup/${num_photos}.png`);
                current_photo = num_photos;
                return;
            }
            popup_photo.setAttribute('src', `images/${short_name}-popup/${current_photo-1}.png`);
            current_photo--;
        });

        popup_right.addEventListener('click', () => {
            if(current_photo === num_photos){
                popup_photo.setAttribute('src', `images/${short_name}-popup/1.png`);
                current_photo = 1;
                return;
            }
            popup_photo.setAttribute('src', `images/${short_name}-popup/${current_photo+1}.png`);
            current_photo++;
        });

        more_btn.addEventListener('click', () => {
            if(!popup_on){
                const curr_popup = document.getElementById(`${short_name}-container`);
                curr_popup.classList.add('curr-project');
                curr_popup.classList.remove('hidden');
                popup_back.classList.remove('hidden');
                curr_popup.classList.add('fade-in');
                popup_back.classList.add('fade-in');
                popup_on = true;
            }
        });

        popup_exit.addEventListener('click', () => {
            const curr_popup = document.getElementById(`${short_name}-container`);
            curr_popup.classList.remove('curr-project');
            curr_popup.classList.add('hidden');
            popup_back.classList.add('hidden');
            curr_popup.classList.remove('fade-in');
            popup_back.classList.remove('fade-in');
            curr_popup.classList.add('fade-out');
            popup_back.classList.add('fade-out');
            popup_on = false;
        });

        popup_container.appendChild(popup_title);
        popup_container.appendChild(popup_desc);
        popup_container.appendChild(popup_exit);
        popup_container.appendChild(popup_left);
        popup_container.appendChild(popup_right);
        popup_container.appendChild(popup_photo);
        projects_screen.appendChild(popup_container);

        full_project.appendChild(project_img);
        full_project.appendChild(header_img);
        full_project.appendChild(project_title);
        full_project.appendChild(short_desc);
        full_project.appendChild(more_btn);
        full_project.appendChild(icon_container);
        mini_projects_screen.appendChild(full_project);
        return;
    }

    function createLogo(name){
        const logo_container = document.createElement('div');
        const logo_image = document.createElement('img');
        const logo_tooltip = document.createElement('h3');
        let timer;
        
        logo_container.classList.add('logo-container');
        logo_tooltip.classList.add('logo-tooltip');
        logo_tooltip.classList.add('hidden');
        name === 'C-Sharp' ? logo_tooltip.textContent = 'C#' : logo_tooltip.textContent = name;
        logo_image.classList.add('logo');
        logo_image.setAttribute('src', `images/logos/${name}.png`);

        logo_container.addEventListener('mouseenter', () => {
            timer = setTimeout(() => {
                logo_tooltip.classList.remove('hidden')
            }, 1000);
        });

        logo_container.addEventListener('mouseleave', () => {
            clearTimeout(timer);
            logo_tooltip.classList.add('hidden')
        });

        logo_container.appendChild(logo_tooltip);
        logo_container.appendChild(logo_image);
        return logo_container;
    }

    // Button handlers
    exit_screen.addEventListener('click', closeScreen);
    about_button.addEventListener('click', () => openScreen('about'));
    resume_button.addEventListener('click', () => openScreen('resume'));
    projects_button.addEventListener('click', () => openScreen('projects'));

    // Creates projects
    const personal_desc = "This is my personal website that you\'re looking at right now! I wanted to center the design of this website around things that I enjoy and colors that bring me peace. The website is built using strictly HTML, CSS, and JavaScript and is hosted using Github Pages. I'd say one of the biggest struggles was drawing all the content for the website, but it was all worth it in the end. :)"
    createProject('personal', 'Personal Website', ['JavaScript', 'HTML', 'CSS'], 3, personal_desc);
    const witches_desc = "A beginner's Unity project built while mentoring a kid at Best Buy Teen Tech Center. For a couple of weeks, we both went through the Learn With Unity coursework and grasped the fundamentals of the platform. After some work, we made some models and made the basis for an 'Overcooked' style game with basic movement, events, and properties for borders and items."
    createProject('witches', 'Witches Brew', ['Unity', 'C-Sharp'], 3, witches_desc);
});
