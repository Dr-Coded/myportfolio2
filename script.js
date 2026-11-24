document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('#menuBtn');
  const closeBtn = document.querySelector('#closeBtn');
  const navMenu = document.querySelector('#navMenu');
  const navLinks = document.querySelectorAll('#navMenu .items a');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  if (closeBtn && navMenu) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navMenu.classList.remove('active');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
});

const projects = [
  {
    id: 'project0',
    name: 'Multi-Post Stories',
    description: "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'images/snapshoot.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  {
    id: 'project1',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background01.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  {
    id: 'project2',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background02.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  {
    id: 'project3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background03.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/myportfolio/',
    sourceLink: 'https://github.com/Dr-Coded/myportfolio2',
  },
];

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.remove();
  }
  document.body.classList.remove('modal-open');
}

function openModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const modalContainer = document.getElementById('section00');
  if (!modalContainer) return;

  document.body.classList.add('modal-open');

  const techList = project.technologies
    .map((tech) => `<span class='teg'>${tech}</span>`)
    .join('');

  const modalHTML = `
    <div class='custom-modal-overlay' id='modal-overlay'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h3 class='modal-title'>${project.name}</h3>
          <a href="#" id="close-modal-btn"><img class="close-btn1" src="images/icons/cancel.png" alt="X"></a>
        </div>
        <div class='tags'>${techList}</div>
        <div class='modal-body'>
          <img src='${project.featuredImage}' class='workimg' alt='${project.name}'>
          <div class='modal-content-text'>
            <p>${project.description}</p>
            <div class="popup-buttons">
              <button class="live" href="${project.liveLink}" target="_blank">
                <p class="texts">See Live</p>
                <img class="live" src="images/icons/live.png" alt="live_icon">
              </button>
              <button class="live" href="${project.sourceLink}" target="_blank">
                <p class="texts">See Source</p>
                <img class="live" src="images/icons/source.png" alt="source_icon">
              </button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  `;

  modalContainer.innerHTML = modalHTML;

  document.getElementById('close-modal-btn').addEventListener('click', (event) => {
    event.preventDefault();
    closeModal();
  });

  document.getElementById('modal-overlay').addEventListener('click', (event) => {
    if (event.target.id === 'modal-overlay') {
      closeModal();
    }
  });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.mainbttn, .button_1');
  if (button) {
    event.preventDefault();
    const projectId = button.dataset.id;
    openModal(projectId);
  }
});

const mobileProjects = {
  mobileCard0: {
    id: 'project0',
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    featuredImage: 'images/recentwork.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  MobleCard1: {
    id: 'project1',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background1.png',
    featuredImages: 'images/background01.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  mobileCard2: {
    id: 'project2',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  mobileCard3: {
    id: 'project3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/myportfolio/',
    sourceLink: 'https://github.com/Dr-Coded/myportfolio',
  },
  mobileCard4: {
    id: 'project1',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background1.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  mobileCard5: {
    id: 'project2',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  mobileCard6: {
    id: 'project3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/myportfolio/',
    sourceLink: 'https://github.com/Dr-Coded/myportfolio',
  },
};

const desktopProjects = {
  desktopCard0: {
    id: 'project0',
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    featuredImage: 'images/recentwork.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  desktopCard1: {
    id: 'project1',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background1.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  desktopCard2: {
    id: 'project2',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  desktopCard3: {
    id: 'project3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/myportfolio/',
    sourceLink: 'https://github.com/Dr-Coded/myportfolio',
  },
  desktopCard4: {
    id: 'project1',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background1.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  desktopCard5: {
    id: 'project2',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/portfolio/',
    sourceLink: 'https://github.com/Dr-Coded/portfolio2',
  },
  desktopCard6: {
    id: 'project3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard.",
    featuredImage: 'images/background3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://dr-coded.github.io/myportfolio/',
    sourceLink: 'https://github.com/Dr-Coded/myportfolio',
  },
};

function renderProjects() {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  const featuredContainer = document.getElementById('featuredProject');
  const mobileContainer = document.getElementById('mobileProjects');
  const desktopContainer = document.getElementById('desktopProjects');

  if (featuredContainer) featuredContainer.innerHTML = '';
  if (mobileContainer) mobileContainer.innerHTML = '';
  if (desktopContainer) desktopContainer.innerHTML = '';

  const activeProjects = isDesktop ? desktopProjects : mobileProjects;
  const remainingContainer = isDesktop ? desktopContainer : mobileContainer;
  if (remainingContainer) remainingContainer.innerHTML = '';

  Object.entries(activeProjects).forEach(([, project], index) => {
    const techList = project.technologies
      .map((tech) => `<span class='tag'>${tech}</span>`)
      .join('');

    if (index === 0) {
      if (featuredContainer) {
        featuredContainer.innerHTML = `
          <div class="grid2">
            <img class="workimg" src="${project.featuredImage}" alt="work overview">
            <div class="post">
              <h3 class="heading1">${project.name}</h3>
              <p class="writeup1">${project.description}</p>
              <div class="tags tag1">${techList}</div>
              <button class="mainbttn" id="btn" data-id="${project.id}">See Project</button>
            </div>
          </div>
        `;
      }
      return;
    }

    let projectHTML = '';

    if (isDesktop && index === 1) {
      projectHTML = `
        <div class="">
          <article class="mps" id="${project.id}" style="background-image: url(${project.featuredImage}); background-size: cover;">
            <main class="work" id="clear">
              <div class="mps">
                <h3 class="head1">${project.name}</h3>
                <p class="writeup2">${project.description}</p>
                <div class="tags">
                  ${techList}
                </div>
              </div>
              <button class="button_1" id="btn" data-id="${project.id}">See Project</button>
            </main>
          </article>
        </div>
      `;
    } else {
      projectHTML = `
        <article class="mps0" id="${project.id}" style="background-image: url(${project.featuredImage}); background-size: cover;">
          <main class="work">
            <div class="mps">
              <h3 class="head1">${project.name}</h3>
              <p class="writeup2">${project.description}</p>
              <div class="tags">${techList}</div>
            </div>
            <button class="button_1" id="btn" data-id="${project.id}">See Project</button>
          </main>
        </article>
      `;
    }

    if (remainingContainer) {
      remainingContainer.innerHTML += projectHTML;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', () => {
    renderProjects();
  });
});