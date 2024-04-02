$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/image_process.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Smart Factory Image processing',
            // demo: 'https://mporter.co',
            technologies: ['Python', 'RTSP프로토콜','CentOS', 'Pytorch', 'YOLOv5', 'PostgreSQL', 'Spotfire'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['image_process']
        },
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/abhn/Mporter',
            title: 'Mporter',
            demo: 'https://mporter.co',
            technologies: ['Flask', 'Celery', 'Python'],
            description: "Flask web application for easy reporting updates to one's mentor. Multi-user support, easy to deploy and use.",
            categories: ['image_process']
        },

    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2>${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}