const projects = [
  { image: 'assets/images/classification.png', title: 'Blackspot EL Classification', technologies: ['CentOS', 'ResNet', 'APIs', 'Spotfire', 'Python'], description: '30가지 불량 분류 이미지 프로세싱 / 불량 패터닝 가시화 / 레시피 공정 분석', categories: ['smartfactory'] },
  { image: 'assets/images/detection.png', title: 'Object detection & PLC interface', technologies: ['RTPS', 'CentOS', 'Pytorch', 'YOLOv5', 'PyQT5'], description: '실시간 영상 프로세싱 / 불량 패터닝 가시화 / PLC 설비 제어', categories: ['smartfactory'] },
  { image: 'assets/images/print_obj.png', title: 'Object detection & MES interface', technologies: ['RTPS', 'CentOS', 'Pytorch', 'YOLOv5', 'APIs'], description: '실시간 촬영 이미지 프로세싱 / 불량 패터닝 가시화 / MES 및 설비 제어', categories: ['smartfactory'] },
  { image: 'assets/images/segmentation.png', title: 'Segmentation detection', technologies: ['FTP', 'CentOS', 'Pytorch', 'Detectron', 'PyQT5'], description: 'SEM 촬영 이미지 분석 / 통계분석 가시화 / 촤적 레시피 산출 자동화', categories: ['smartfactory'] },
  { image: 'assets/images/forecast.png', title: 'Time series forecasting', technologies: ['GRU', 'CentOS', 'XGBoost', 'Pytorch', 'Selenium', 'APIs'], description: '날씨 예보 API 데이터 엔지니어링 / XGBoost, GRU 예측 / Self-Train', categories: ['smartfactory'] },
  { image: 'assets/images/us_atp.png', title: '미국 판매 법인 물류 가시화', technologies: ['PowerBI', 'Azure', 'Airflow', 'MSSQL', 'APIs', 'GERP'], description: 'GERP실시간 인터페이스 / BI실시간 배치 / Airflow DAG', categories: ['businessanalysis'] },
  { image: 'assets/images/us_sales_map.png', title: '미국 판매 법인 물류 데이터 분석', technologies: ['PowerBI', 'Azure', 'Airflow', 'MSSQL', 'APIs', 'GERP'], description: '물류 데이터 비즈니스 분석 / Bottle neck 분석 / 비 효율 Loss산출', categories: ['businessanalysis'] },
  { image: 'assets/images/spotfire.png', title: '제조 판매 법인 생산 KPIs 분석', technologies: ['Spotfire', 'MSSQL', 'APIs', 'GERP'], description: '생산 데이터 KPIs 분석 / 불량 원인 분석 / Loss 산출', categories: ['businessanalysis'] },
  { image: 'assets/images/kr_sales.png', title: '한국 판매 법인 경영 정보 가시화', technologies: ['PowerBI', 'AWS', 'PostgreSQL', 'APIs', 'GERP'], description: '물류, 판매, BEP, 신용 데이터 가시화 / 엑셀 업무 자동화', categories: ['businessanalysis'] },
  { image: 'assets/images/chat.png', title: 'Tech sensing', technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'Selenium'], description: 'LLM기반 RAG도입 / CoT RAG / ChatAgent Web서비스', categories: ['aillm'] },
  { image: 'assets/images/rag.png', title: 'Document RAG', technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'OCR'], description: '대량 문서 비동기성 RAG / Youtube, PPTX, DOCS, PDF형식 지원', categories: ['aillm'] },
  { image: 'assets/images/translate.png', title: 'Document Translate', technologies: ['LLM', 'Azure', 'Streamlit', 'llamaindex', 'OCR'], description: 'PPTX, DOCS, PDF형식 보존형 번역실시', categories: ['aillm'] },
  { image: 'assets/gif/03_agent_to_agent.gif', title: 'Agent Harness', technologies: ['Agent AI', 'Orchestration', 'LLM', 'SAP'], description: 'F&B 업무 요청을 처리하는 Orchestration Agent 기반 실시간 협업 서비스', categories: ['agentai'] }
];

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const createProjectCard = (project) => {
  const wrapper = createElement('article', 'wrapper');
  const card = createElement('div', 'card radius shadowDepth1');
  const imageContainer = createElement('div', 'card__image border-tlr-radius');
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = `${project.title} 프로젝트 이미지`;
  image.className = 'border-tlr-radius project-image';
  imageContainer.append(image);

  const content = createElement('div', 'card__content card__padding');
  const article = createElement('div', 'card__article');
  article.append(createElement('h3', null, project.title), createElement('p', 'paragraph-text-normal', project.description));
  const technologies = createElement('div', 'card__meta');
  project.technologies.forEach((technology) => technologies.append(createElement('span', 'project-technology paragraph-text-normal', technology)));

  content.append(article, technologies);
  card.append(imageContainer, content);
  wrapper.append(card);
  return wrapper;
};

document.addEventListener('DOMContentLoaded', () => {
  const projectArea = document.querySelector('.projects-wrapper');
  const filters = document.querySelectorAll('.project-filter');
  if (!projectArea || !filters.length) return;

  const renderProjects = (category) => {
    const visibleProjects = category === 'all' ? projects : projects.filter((project) => project.categories.includes(category));
    projectArea.replaceChildren(...visibleProjects.map(createProjectCard));
    filters.forEach((filter) => {
      const isSelected = filter.dataset.category === category;
      filter.classList.toggle('is-selected', isSelected);
      filter.setAttribute('aria-pressed', String(isSelected));
    });
  };

  filters.forEach((filter) => filter.addEventListener('click', () => renderProjects(filter.dataset.category)));
  renderProjects('smartfactory');
});
