(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  const page = document.body.dataset.page;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function headerTemplate() {
    const links = [
      ["works", "Works", "works.html"],
      ["cv", "CV", "cv.html"],
      ["contact", "Contact", "contact.html"]
    ];

    return `
      <header class="site-header">
        <a class="wordmark" href="home.html" aria-label="${escapeHtml(data.artist.name)} — Home">
          <img src="assets/images/signature-transparent.png" alt="">
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
          <span>Menu</span><span class="menu-toggle__line" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="site-navigation" aria-label="Primary navigation">
          ${links.map(([id, label, href]) => `
            <a href="${href}" ${page === id || (page === "project" && id === "works") ? 'aria-current="page"' : ""}>${label}</a>
          `).join("")}
        </nav>
      </header>
    `;
  }

  function footerTemplate() {
    return `
      <footer class="site-footer">
        <p>© <span data-current-year></span> ${escapeHtml(data.artist.name)}</p>
        <div>
          <a href="mailto:${escapeHtml(data.artist.email)}">Email</a>
          <a href="works.html">Works</a>
        </div>
      </footer>
    `;
  }

  function projectUrl(slug) {
    return `project.html?project=${encodeURIComponent(slug)}`;
  }

  function projectCard(project, index) {
    return `
      <article class="project-card reveal ${index % 3 === 1 ? "project-card--shifted" : ""}">
        <a class="project-card__image" href="${projectUrl(project.slug)}" aria-label="View ${escapeHtml(project.title)}">
          <img src="${project.cover}" alt="${escapeHtml(project.coverAlt)}" loading="lazy" decoding="async">
        </a>
        <div class="project-card__meta">
          <div>
            <h2><a href="${projectUrl(project.slug)}">${escapeHtml(project.title)}</a></h2>
            <p>${escapeHtml(project.discipline)}</p>
          </div>
          <span>${escapeHtml(project.years)}</span>
        </div>
      </article>
    `;
  }

  function renderHome() {
    const featured = data.projects.filter((project) => project.featured);
    const root = document.querySelector("[data-home]");
    root.innerHTML = `
      <section class="hero">
        <div class="hero__identity">
          <p>${escapeHtml(data.artist.role)} · ${escapeHtml(data.artist.location)}</p>
          <a class="text-link" href="works.html">View selected works <span aria-hidden="true">→</span></a>
        </div>
        <a class="hero__art" href="${projectUrl("clipping-and-compression")}" aria-label="Open Clipping and Compression">
          <span class="hero__plane" aria-hidden="true"></span>
          <img src="assets/images/mapear-i.webp" alt="Abstract composition from the Mapear Ausências series">
          <span class="hero__caption">Mapear ausências I, 2021</span>
        </a>
      </section>

      <section class="selected-projects" aria-label="Selected projects">
        <div class="project-grid">
          ${featured.map(projectCard).join("")}
        </div>
        <div class="section-end reveal"><a class="text-link" href="works.html">View all projects <span aria-hidden="true">→</span></a></div>
      </section>
    `;
  }

  function renderWorks() {
    const root = document.querySelector("[data-works]");
    root.innerHTML = `
      <section class="project-grid project-grid--all" aria-label="Projects">
        ${data.projects.map(projectCard).join("")}
      </section>
    `;
  }

  function renderProject() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("project") || data.projects[0].slug;
    const project = data.projects.find((item) => item.slug === slug);
    const root = document.querySelector("[data-project]");

    if (!project) {
      document.title = `Project not found — ${data.artist.name}`;
      root.innerHTML = `
        <section class="empty-state">
          <p class="eyebrow">404</p>
          <h1>Project not found</h1>
          <a class="text-link" href="works.html">Return to works →</a>
        </section>`;
      return;
    }

    document.title = `${project.title} — ${data.artist.name}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", project.summary);

    root.innerHTML = `
      <header class="project-intro project-intro--${escapeHtml(project.accent)}">
        <a class="back-link" href="works.html">← All works</a>
        <div>
          <p class="eyebrow">${escapeHtml(project.discipline)}</p>
          <h1>${escapeHtml(project.title)}</h1>
        </div>
        <div class="project-intro__summary">
          <p>${escapeHtml(project.summary)}</p>
          <span>${escapeHtml(project.years)}</span>
        </div>
      </header>
      <section class="artwork-sequence" aria-label="Artworks in ${escapeHtml(project.title)}">
        ${project.works.map((work, index) => `
          <figure class="artwork artwork--${escapeHtml(work.size || "medium")} reveal" data-lightbox-index="${index}">
            <button class="artwork__open" type="button" aria-label="Enlarge ${escapeHtml(work.title)}">
              <img src="${work.src}" alt="${escapeHtml(work.alt)}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async">
            </button>
            <figcaption>
              <span>${escapeHtml(work.title)}</span>
              <span>${escapeHtml(work.details)}</span>
            </figcaption>
          </figure>
        `).join("")}
      </section>
      <nav class="project-pagination" aria-label="Other projects">
        ${projectPagination(project)}
      </nav>
    `;

    setupLightbox(project.works);
  }

  function projectPagination(project) {
    const index = data.projects.findIndex((item) => item.slug === project.slug);
    const previous = data.projects[(index - 1 + data.projects.length) % data.projects.length];
    const next = data.projects[(index + 1) % data.projects.length];
    return `
      <a href="${projectUrl(previous.slug)}"><span>Previous</span>${escapeHtml(previous.title)}</a>
      <a href="${projectUrl(next.slug)}"><span>Next</span>${escapeHtml(next.title)}</a>
    `;
  }

  function renderCv() {
    const root = document.querySelector("[data-cv]");
    root.innerHTML = `
      <div class="cv-list">
        ${data.cv.map((section) => `
          <section class="cv-section reveal">
            <h2>${escapeHtml(section.heading)}</h2>
            <div>
              ${section.items.map(([year, title, place]) => `
                <article class="cv-item">
                  <time>${escapeHtml(year)}</time>
                  <p><strong>${escapeHtml(title)}</strong><span>${escapeHtml(place)}</span></p>
                </article>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    `;
  }

  function renderContact() {
    const root = document.querySelector("[data-contact]");
    root.innerHTML = `
      <section class="contact-page">
        <p class="eyebrow">Contact</p>
        <div class="contact-details">
          <p>For exhibitions, collaborations and other enquiries:</p>
          <a href="mailto:${escapeHtml(data.artist.email)}">${escapeHtml(data.artist.email)}</a>
          <a href="tel:${escapeHtml(data.artist.phoneLink)}">${escapeHtml(data.artist.phoneDisplay)}</a>
          <p>${escapeHtml(data.artist.location)}</p>
        </div>
      </section>
    `;
  }

  function setupLightbox(works) {
    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", "Artwork viewer");
    dialog.innerHTML = `
      <button class="lightbox__close" type="button" aria-label="Close artwork viewer">Close</button>
      <button class="lightbox__previous" type="button" aria-label="Previous artwork">←</button>
      <figure>
        <img alt="">
        <figcaption></figcaption>
      </figure>
      <button class="lightbox__next" type="button" aria-label="Next artwork">→</button>
    `;
    document.body.append(dialog);

    let activeIndex = 0;
    const image = dialog.querySelector("img");
    const caption = dialog.querySelector("figcaption");

    function show(index) {
      activeIndex = (index + works.length) % works.length;
      const work = works[activeIndex];
      image.src = work.src;
      image.alt = work.alt;
      caption.textContent = `${work.title} — ${work.details}`;
    }

    document.querySelectorAll("[data-lightbox-index]").forEach((figure) => {
      figure.querySelector("button").addEventListener("click", () => {
        show(Number(figure.dataset.lightboxIndex));
        dialog.showModal();
      });
    });

    dialog.querySelector(".lightbox__close").addEventListener("click", () => dialog.close());
    dialog.querySelector(".lightbox__previous").addEventListener("click", () => show(activeIndex - 1));
    dialog.querySelector(".lightbox__next").addEventListener("click", () => show(activeIndex + 1));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  function setupNavigation() {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    if (!button || !nav) return;

    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("site-nav--open", !open);
      document.body.classList.toggle("menu-open", !open);
    });
  }

  function setupReveals() {
    const items = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  }

  document.querySelector("[data-site-header]").innerHTML = headerTemplate();
  document.querySelector("[data-site-footer]").innerHTML = footerTemplate();

  if (page === "home") renderHome();
  if (page === "works") renderWorks();
  if (page === "project") renderProject();
  if (page === "cv") renderCv();
  if (page === "contact") renderContact();

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  setupNavigation();
  setupReveals();
})();
