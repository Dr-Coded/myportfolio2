document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#navContainer');
  const menu = document.querySelector('#navbarNav');
  const closeBtn = document.querySelector('.btn.close');
  const navLinks = document.querySelectorAll('#navbarNav .nav-link');

  const togglerBtn = document.createElement('button');
  togglerBtn.classList.add('navbar-toggler');
  togglerBtn.style.width = 'fit-content';
  togglerBtn.type = 'button';

  togglerBtn.setAttribute('data-bs-toggle', 'collapse');
  togglerBtn.setAttribute('data-bs-target', '#navbarNav');
  togglerBtn.setAttribute('aria-controls', 'navbarNav');
  togglerBtn.setAttribute('aria-expanded', 'false');
  togglerBtn.setAttribute('aria-label', 'Toggle navigation');

  togglerBtn.innerHTML = `
    <span class='custom-bar'></span>
    <span class='custom-bar'></span>
    <span class='custom-bar'></span>
  `;

  container.insertBefore(togglerBtn, menu);

  togglerBtn.addEventListener('click', () => {
    menu.classList.remove('show');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('show');
      togglerBtn.setAttribute('aria-expanded', 'false');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      togglerBtn.setAttribute('aria-expanded', 'false');
    });
  });
});

const projects = [
  {
    id: 'project0',
    name: 'Multi-Post Stories',
    description: "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/project0.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  {
    id: 'project1',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/project1.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  {
    id: 'project2',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/project2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  {
    id: 'project3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/project3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/myportfolio/',
    sourceLink: 'https://github.com/Dr-Coded/myportfolio2',
  },
];

const projectsContainer = document.getElementById('projects-container');

function renderProjects() {
  projectsContainer.innerHTML = '';

  projects.forEach((project) => {
    const techList = project.technologies
      .map((tech) => `<button class='tag'>${tech}</button>`)
      .join('');

    const cardHTML = `
      <div class='col-12 col-md-6 col-lg-4 mb-4'>
        <div class='card' id='${project.id}'>
          <div class='card-body p-8px,12px mps'>
            <h3 class='card-title m-0 head1'>${project.name}</h3>
            <p class='card-text'>${project.description}</p>
            <div class='tags'>
              ${techList}
            </div>
          </div>
          <button class='btn hide w-100 see-project-btn' data-id='${project.id}'>
            See project
          </button>
        </div>
      </div>
    `;

    projectsContainer.innerHTML += cardHTML;
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);

function openModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const modalContainer = document.getElementById('modal-container');

  const techList = project.technologies
    .map((tech) => `<button class='top btn btn-sm btn-outline-secondary me-1'>${tech}</button>`)
    .join('');

  const modalHTML = `
    <div class='modal fade show' tabindex='-1' style='display: block; background: rgba(0,0,0,0.7);' aria-modal='true' role='dialog'>
      <div class='modal-dialog modal-lg modal-dialog-centered'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h3 class='modal-title'>${project.name}</h3>
            <button type='button' class='btn-close' id='close-modal-btn' aria-label='Close'></button>
          </div>
          <div class='modal-body'>
            <img src='${project.featuredImage}' class='img-fluid w-100 mb-3 rounded' alt='${project.name}'>
            <p class='text-dark'>${project.description}</p>
            <div class='mb-3'>${techList}</div>
          </div>
          <div class='modal-footer d-flex justify-content-between'>
            <a href='${project.liveLink}' target='_blank' class='btn btn-primary d-flex align-items-center gap-2'>See Live<img src='images/icons/see-live.svg' alt='live icon' style='width: 18px; height: 18px;'></a>
            <a href='${project.sourceLink}' target='_blank' class='btn btn-primary d-flex align-items-center gap-2'>See Source<img src='images/icons/git.svg
            ' alt='github icon' style='width: 18px; height: 18px;'></a>
          </div>
        </div>
      </div>
    </div>
  `;

  function closeModal() {
    modalContainer.innerHTML = '';
  }

  modalContainer.innerHTML = modalHTML;

  document.getElementById('close-modal-btn').addEventListener('click', closeModal);
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.see-project-btn');
  if (button) {
    const projectId = button.getAttribute('id');
    openModal(projectId);
  }
});