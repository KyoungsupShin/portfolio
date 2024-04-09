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
            title: 'Blackspot EL Classification',
            // demo: 'https://mporter.co',
            technologies: ['CentOS', 'ResNet', 'APIs', 'Spotfire', 'Python'],
            description: "30가지 불량 분류 이미지 프로세싱 / 불량 패터닝 가시화 / 레시피 공정 분석",
            categories: ['smartfactory']
        },
        {
            image: 'assets/images/detection.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Object detection & PLC interface',
            // demo: 'https://mporter.co',
            technologies: ['RTPS', 'CentOS', 'Pytorch', 'YOLOv5', 'PyQT5'],
            description: "실시간 영상 프로세싱 / 불량 패터닝 가시화 / PLC 설비 제어",
            categories: ['smartfactory']
        },
        {
            image: 'assets/images/print_obj.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Object detection & MES interface',
            // demo: 'https://mporter.co',
            technologies: ['RTPS', 'CentOS', 'Pytorch', 'YOLOv5', 'APIs'],
            description: "실시간 촬영 이미지 프로세싱 / 불량 패터닝 가시화 / MES 및 설비 제어",
            categories: ['smartfactory']
        },

        {
            image: 'assets/images/segmentation.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Segmentation detection',
            // demo: 'https://mporter.co',
            technologies: ['FTP', 'CentOS', 'Pytorch', 'Detectron', 'PyQT5'],
            description: "SEM 촬영 이미지 분석 / 통계분석 가시화 / 촤적 레시피 산출 자동화",
            categories: ['smartfactory']
        },

        {
            image: 'assets/images/forecast.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Time series forecasting',
            // demo: 'https://mporter.co',
            technologies: ['GRU', 'CentOS', 'XGBoost', 'Pytorch', 'Selenium', 'APIs'],
            description: "날씨 예보 API 데이터 엔지니어링 / XGBoost, GRU 예측 / Self-Train",
            categories: ['smartfactory']
        },


        {
            image: 'assets/images/us_atp.png',
            // link: 'https://github.com/abhn/Mporter',
            title: '미국 판매 법인 물류 가시화',
            // demo: 'https://mporter.co',
            technologies: ['PowerBI', 'Azure', 'Airflow', 'MSSQL', 'APIs', 'GERP'],
            description: "GERP실시간 인터페이스 / BI실시간 배치 / Airflow DAG",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/us_sales_map.png',
            // link: 'https://github.com/abhn/Mporter',
            title: '미국 판매 법인 물류 데이터 분석',
            // demo: 'https://mporter.co',
            technologies: ['PowerBI', 'Azure', 'Airflow', 'MSSQL', 'APIs', 'GERP'],
            description: "물류 데이터 비즈니스 분석 / Bottle neck 분석 / 비 효율 Loss산출",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/spotfire.png',
            // link: 'https://github.com/abhn/Mporter',
            title: '제조 판매 법인 생산 KPIs 분석',
            // demo: 'https://mporter.co',
            technologies: ['Spotfire', 'MSSQL', 'APIs', 'GERP'],
            description: "생산 데이터 KPIs 분석 / 불량 원인 분석 / Loss 산출",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/kr_sales.png',
            // link: 'https://github.com/abhn/Mporter',
            title: '한국 판매 법인 경영 정보 가시화',
            // demo: 'https://mporter.co',
            technologies: ['PowerBI', 'AWS', 'PostgreSQL', 'APIs', 'GERP'],
            description: "물류, 판매, BEP, 신용 데이터 가시화 / 엑셀 업무 자동화",
            categories: ['businessanalysis']
        },

        {
            image: 'assets/images/chat.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Tech sensing',
            // demo: 'https://mporter.co',
            technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'Selenium'],
            description: "LLM기반 RAG도입 / CoT RAG / ChatAgent Web서비스",
            categories: ['aillm']
        },

        {
            image: 'assets/images/rag.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Document RAG',
            // demo: 'https://mporter.co',
            technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'OCR'],
            description: "대량 문서 비동기성 RAG / Youtube, PPTX, DOCS, PDF형식 지원",
            categories: ['aillm']
        },

        {
            image: 'assets/images/translate.png',
            // link: 'https://github.com/abhn/Mporter',
            title: 'Document Translate',
            // demo: 'https://mporter.co',
            technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'OCR'],
            description: "PPTX, DOCS, PDF형식 보존형 번역실시",
            categories: ['aillm']
        }

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