$(document).ready(() => {
    render_projects('featured');
})

let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/classification.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Classification',
            // demo: 'https://mporter.co',
            technologies: ['CentOS', 'ResNet', 'APIs', 'Spotfire', 'Python'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['smartfactory']
        },
        {
            image: 'assets/images/detection.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Object detection',
            // demo: 'https://mporter.co',
            technologies: ['RTPS', 'CentOS', 'Pytorch', 'YOLOv5', 'PyQT5'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['smartfactory']
        },
        {
            image: 'assets/images/print_obj.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Object detection & Report',
            // demo: 'https://mporter.co',
            technologies: ['RTPS', 'CentOS', 'Pytorch', 'YOLOv5', 'PyQT5'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['smartfactory']
        },

        {
            image: 'assets/images/segmentation.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Segmentation',
            // demo: 'https://mporter.co',
            technologies: ['FTP', 'CentOS', 'Pytorch', 'Detectron', 'PyQT5'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['smartfactory']
        },

        {
            image: 'assets/images/forecast.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Time series forecasting',
            // demo: 'https://mporter.co',
            technologies: ['GRU', 'CentOS', 'XGBoost', 'Pytorch', 'Selenium'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['smartfactory']
        },


        {
            image: 'assets/images/us_atp.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'US법인 물류 가시화 BI',
            // demo: 'https://mporter.co',
            technologies: ['PowerBI', 'Azure', 'Airflow', 'MSSQL', 'APIs', 'GERP'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/us_sales_map.png',
            // link: 'https://github.com/abhn/Mporter',
            title: '미국 판매 법인 물류 효율화',
            // demo: 'https://mporter.co',
            technologies: ['PowerBI', 'Azure', 'Airflow', 'MSSQL', 'APIs', 'GERP'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/us_map.png',
            // link: 'https://github.com/abhn/Mporter',
            title: '미국 판매 법인 물류 효율화',
            // demo: 'https://mporter.co',
            technologies: ['PowerBI', 'Azure', 'Airflow', 'MSSQL', 'APIs', 'GERP'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/kr_sales.png',
            // link: 'https://github.com/abhn/Mporter',
            title: '한국 판매 법인 경영 정보 가시화',
            // demo: 'https://mporter.co',
            technologies: ['PowerBI', 'AWS', 'PostgreSQL', 'APIs', 'GERP'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/chat.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Tech sensing',
            // demo: 'https://mporter.co',
            technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'Selenium'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['aillm']
        },

        {
            image: 'assets/images/rag.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Document RAG',
            // demo: 'https://mporter.co',
            technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'OCR'],
            description: "실시간 이미지 프로세싱 개발 / 결과 분석 가시화 / 레시피 결과 분석",
            categories: ['aillm']
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