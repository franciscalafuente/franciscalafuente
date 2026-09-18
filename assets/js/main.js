(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  const page = document.body.dataset.page;
  const languageKey = "francisca-portfolio-language";
  let language = "pt";

  try {
    language = window.localStorage.getItem(languageKey) === "en" ? "en" : "pt";
  } catch (error) {
    language = "pt";
  }

  document.documentElement.lang = language === "pt" ? "pt-PT" : "en";

  const interfaceCopy = {
    pt: {
      works: "Obras",
      contact: "Contacto",
      menu: "Menu",
      email: "Email",
      skip: "Saltar para o conteúdo",
      featuredWork: "Obra em destaque",
      openTotem: "Abrir Totem",
      projects: "Projetos",
      view: "Ver",
      artworksIn: "Obras em",
      enlarge: "Ampliar",
      previous: "Anterior",
      next: "Seguinte",
      otherProjects: "Outros projetos",
      projectNotFound: "Projeto não encontrado",
      returnToWorks: "Voltar às obras →",
      enquiries: "Para exposições, colaborações e outros contactos:",
      artworkViewer: "Visualizador de obras",
      closeViewer: "Fechar visualizador",
      previousArtwork: "Obra anterior",
      nextArtwork: "Obra seguinte",
      language: "Idioma",
      visualArtist: "Artista visual"
    },
    en: {
      works: "Works",
      contact: "Contact",
      menu: "Menu",
      email: "Email",
      skip: "Skip to content",
      featuredWork: "Featured work",
      openTotem: "Open Totem",
      projects: "Projects",
      view: "View",
      artworksIn: "Artworks in",
      enlarge: "Enlarge",
      previous: "Previous",
      next: "Next",
      otherProjects: "Other projects",
      projectNotFound: "Project not found",
      returnToWorks: "Return to works →",
      enquiries: "For exhibitions, collaborations and other enquiries:",
      artworkViewer: "Artwork viewer",
      closeViewer: "Close artwork viewer",
      previousArtwork: "Previous artwork",
      nextArtwork: "Next artwork",
      language: "Language",
      visualArtist: "Visual artist"
    }
  };

  const portugueseCopy = {
    "Visual artist": "Artista visual",
    "Lisbon, Portugal": "Lisboa, Portugal",
    "Working across painting, printmaking, photography, installation and sculpture, Francisca Lafuente explores memory, absence and the transformation of organic forms.": "Trabalhando entre a pintura, a gravura, a fotografia, a instalação e a escultura, Francisca Lafuente explora a memória, a ausência e a transformação das formas orgânicas.",
    "Printmaking · mixed media": "Gravura · técnica mista",
    "Screen printing": "Serigrafia",
    "Collage · serigraphy · painting": "Colagem · serigrafia · pintura",
    "Engraving artist’s book": "Livro de artista de gravura",
    "Installation · mixed media": "Instalação · técnica mista",
    "Sculpture": "Escultura",
    "Sculpture · mixed media": "Escultura · técnica mista",
    "Digital photography": "Fotografia digital",
    "Sculpture · ceramics": "Escultura · cerâmica",
    "Sculpture · ceramics · mixed media": "Escultura · cerâmica · técnica mista",
    "Organic fragments are displaced, interrupted and reassembled, turning absence into an active part of the image.": "Fragmentos orgânicos são deslocados, interrompidos e reorganizados, transformando a ausência numa parte ativa da imagem.",
    "A body of work built through clipping: irregular forms found in natural environments are isolated and recomposed into new visual territories.": "Um corpo de trabalho construído através do recorte: formas irregulares encontradas em ambientes naturais são isoladas e recompostas em novos territórios visuais.",
    "Six etched elements unfold through a spatial structure, shifting the artist’s book from a sequence held in the hand into an environment experienced by the body.": "Seis elementos gravados desdobram-se numa estrutura espacial, deslocando o livro de artista de uma sequência segurada pela mão para um ambiente experienciado pelo corpo.",
    "A blue-framed construction brings together sand, water and industrial materials in a contained study of utility and choice.": "Uma construção de moldura azul reúne areia, água e materiais industriais num estudo contido sobre utilidade e escolha.",
    "Fabric, cardboard and glazed stoneware meet in a sculptural installation built through accumulation and balance.": "Tecido, cartão e grés vidrado encontram-se numa instalação escultórica construída através da acumulação e do equilíbrio.",
    "Dark, close observations detach material surfaces from scale and place, revealing constellations of texture, light and colour.": "Observações escuras e aproximadas separam superfícies materiais da escala e do lugar, revelando constelações de textura, luz e cor.",
    "Stacked forms recall landmarks, stones and improvised figures. Their glazed surfaces and direct expressions move between ritual object and playful presence.": "Formas empilhadas evocam marcos, pedras e figuras improvisadas. As superfícies vidradas e expressões diretas oscilam entre o objeto ritual e uma presença lúdica.",
    "Education and training": "Formação",
    "Solo exhibitions": "Exposições individuais",
    "Group exhibitions": "Exposições coletivas",
    "Professional experience": "Experiência profissional",
    "Other activities": "Outras atividades",
    "MA in Conservation and Restoration of Cultural Heritage": "Mestrado em Conservação e Restauro do Património Cultural",
    "School of Arts, Universidade Católica Portuguesa, Porto": "Escola das Artes, Universidade Católica Portuguesa, Porto",
    "Training in Artistic and Cultural Mediation": "Formação em Mediação Artística e Cultural",
    "Workshop: Preservation on New Media Art": "Workshop: Preservação de Arte em Novos Média",
    "Workshop: LASER Technology in Heritage Conservation and Restoration": "Workshop: Tecnologia LASER na Conservação e Restauro do Património",
    "Degree in Painting": "Licenciatura em Pintura",
    "Minor in Aesthetics and Theories of Art": "Minor em Estética e Teorias da Arte",
    "Painting course": "Curso de Pintura",
    "Fábrica do Braço de Prata, Lisbon": "Fábrica do Braço de Prata, Lisboa",
    "Internship — Visitor, Education and Programmes Service": "Estágio — Serviço de Públicos, Educação e Programas",
    "Poster presentation: “Document to preserve: a case study of the contemporary work Radiologias (1949), by Silvestre Pestana”": "Apresentação de poster: «Documento para preservar: estudo de caso da obra contemporânea Radiologias (1949), de Silvestre Pestana»",
    "Conservation and restoration of Radiologias (1949), by Silvestre Pestana": "Conservação e restauro de Radiologias (1949), de Silvestre Pestana",
    "Collection of Fundação de Serralves": "Coleção da Fundação de Serralves",
    "Conservation and restoration of tiles": "Conservação e restauro de azulejos",
    "ERASMUS+ study programme": "Programa de estudos ERASMUS+",
    "Member of the Political-Educational Department of the Students’ Association": "Membro do Departamento Político-Educativo da Associação de Estudantes"
  };

  const englishCopy = {
    "2023. Serigrafia s/papel. 90 x 60 cm": "2023. Screen printing on paper. 90 × 60 cm",
    "2022. Colagem": "2022. Collage",
    "2021. Serigrafia s/papel. 29,7 x 42 cm": "2021. Screen printing on paper. 29.7 × 42 cm",
    "2021. Colagem s/papel. 69 x 49 cm": "2021. Collage on paper. 69 × 49 cm",
    "2021. Óleo s/tela. 68 x 51 cm": "2021. Oil on canvas. 68 × 51 cm",
    "2021. Vista da instalação": "2021. Installation view",
    "2022. Metal, contraplacado revestido a melamina, água-forte s/papel [6 elementos]. 81 x 102 x 102 cm": "2022. Metal, melamine-faced plywood and etching on paper [6 elements]. 81 × 102 × 102 cm",
    "2022. Pormenor da instalação": "2022. Installation detail",
    "2022. Água-forte s/papel [1 de 6 elementos]": "2022. Etching on paper [1 of 6 elements]",
    "2024. Chapa de aço galvanizado pintada com pulverização a tinta acrílica com 2 componentes, grés, acrílico, vinil adesivo, areia e água. 32 × 22,5 × 8 cm": "2024. Galvanised steel sheet spray-painted with two-component acrylic paint, stoneware, acrylic, adhesive vinyl, sand and water. 32 × 22.5 × 8 cm",
    "2024. Tecido, cola branca, tinta de guache, cartão e grés (vidrado). 117,5 × 69,5 × 26 cm": "2024. Fabric, PVA glue, gouache paint, cardboard and glazed stoneware. 117.5 × 69.5 × 26 cm",
    "2024. Vista superior": "2024. Top view",
    "2021. Fotografia digital": "2021. Digital photography",
    "2005–2023. Cartão, cola branca, tecido, tinta acrílica, grés. Medidas variáveis": "2005–2023. Cardboard, PVA glue, fabric, acrylic paint and stoneware. Variable dimensions",
    "2022. Faiança. 35,5 × 17 × 17 cm": "2022. Earthenware. 35.5 × 17 × 17 cm",
    "2022. Argila, grés e faiança colorida. 28,5 × 18 × 18 cm": "2022. Clay, stoneware and coloured earthenware. 28.5 × 18 × 18 cm",
    "2022. Grés, raku. 13,5 × 6 × 5,5 cm": "2022. Stoneware, raku. 13.5 × 6 × 5.5 cm",
    "2005–2023. Vista de conjunto": "2005–2023. Group view",
    "Formação Académica": "Academic Education",
    "Workshops e Formações": "Workshops and Training",
    "Experiência Profissional": "Professional Experience",
    "Outras Atividades": "Other Activities",
    "Aptidões Linguísticas": "Language Skills",
    "Exposições Individuais": "Solo Exhibitions",
    "Exposições Coletivas": "Group Exhibitions",
    "Feiras de Arte": "Art Fairs",
    "Publicações": "Publications",
    "Pós-graduação em Curadoria de Arte": "Postgraduate Degree in Art Curating",
    "Faculdade de Ciências Sociais e Humanas da Universidade NOVA de Lisboa": "School of Social Sciences and Humanities, NOVA University Lisbon",
    "Mestrado em Conservação e Restauro de Bens Culturais": "Master’s Degree in Conservation and Restoration of Cultural Heritage",
    "Escola das Artes da Universidade Católica Portuguesa (Porto)": "School of Arts, Universidade Católica Portuguesa (Porto)",
    "Licenciatura em Pintura": "Bachelor’s Degree in Painting",
    "Faculdade de Belas-Artes da Universidade de Lisboa": "Faculty of Fine Arts, University of Lisbon",
    "Minor em Estética e Teorias da Arte": "Minor in Aesthetics and Theories of Art",
    "Formação “Planeamento e Produção de Exposições”": "Training in Exhibition Planning and Production",
    "Fundação Bienal de Arte de Cerveira": "Cerveira Art Biennial Foundation",
    "Formação em Mediação Artística e Cultural": "Training in Artistic and Cultural Mediation",
    "MAAT (Museu de Arte, Arquitetura e Tecnologia)": "MAAT (Museum of Art, Architecture and Technology)",
    "Workshop “Preservation on New Media Art”": "Workshop “Preservation on New Media Art”",
    "Workshop “A Tecnologia LASER no Restauro e Conservação de Património”": "Workshop “LASER Technology in Heritage Conservation and Restoration”",
    "Técnica de Conservação e Restauro de New Media Art (9 meses)": "New Media Art Conservation and Restoration Technician (9 months)",
    "Museu de Arte Contemporânea de Roskilde (Dinamarca)": "Museum of Contemporary Art in Roskilde (Denmark)",
    "Programa ERASMUS+ (Estágio de 6 meses) — Conservação e Restauro": "ERASMUS+ Programme (6-month internship) — Conservation and Restoration",
    "Apresentação e publicação da comunicação “Technological obsolescence in contemporary art: conservation and restoration intervention on the artwork Radiologias (1979), by Silvestre Pestana”": "Presentation and publication of the paper “Technological obsolescence in contemporary art: conservation and restoration intervention on the artwork Radiologias (1979), by Silvestre Pestana”",
    "26as Jornadas de Conservación de Arte Contemporáneo — Museo Nacional Centro de Arte Reina Sofía, Madrid": "26th Contemporary Art Conservation Conference — Museo Nacional Centro de Arte Reina Sofía, Madrid",
    "Estágio — Mediação Artística e Assistência de Sala": "Internship — Art Mediation and Gallery Assistance",
    "Feira de Arte Drawing Room Lisboa": "Drawing Room Lisboa Art Fair",
    "Estágio de 6 meses — Serviço ao Visitante, Educativo e Programas": "6-month Internship — Visitor, Education and Programmes Service",
    "Apresentação do poster “Document to preserve: a case study of the contemporary work of art Radiologias (1979), by Silvestre Pestana” na conferência EPoCH 2024": "Poster presentation “Document to preserve: a case study of the contemporary work of art Radiologias (1979), by Silvestre Pestana” at the EPoCH 2024 conference",
    "Centro de Investigação em Ciência e Tecnologia das Artes (CITAR) da Universidade Católica Portuguesa": "Research Centre for Science and Technology of the Arts (CITAR), Universidade Católica Portuguesa",
    "Intervenção de conservação e restauro da obra Radiologias (1979), de Silvestre Pestana": "Conservation and restoration of Radiologias (1979), by Silvestre Pestana",
    "Coleção da Fundação de Serralves": "Fundação de Serralves Collection",
    "Conservação e Restauro de Pinturas da artista Armanda Passos": "Conservation and Restoration of Paintings by Armanda Passos",
    "Conservação e Restauro de Azulejos (Edifício da Ordem dos Enfermeiros)": "Conservation and Restoration of Tiles (Portuguese Nurses’ Association Building)",
    "Empresa AFACR (Porto)": "AFACR (Porto)",
    "Programa ERASMUS+ (Estudos/Intercâmbio)": "ERASMUS+ Programme (Studies/Exchange)",
    "Membro do departamento Político-Educativo da Associação de Estudantes": "Member of the Political-Educational Department of the Students’ Association",
    "Curso de Pintura": "Painting Course",
    "Português, Inglês, Espanhol": "Portuguese, English, Spanish",
    "Fábrica do Braço de Prata": "Fábrica do Braço de Prata",
    "8ª Bienal Internacional de Arte de Espinho": "8th Espinho International Art Biennial",
    "6ª Bienal Internacional de Arte de Gaia": "6th Gaia International Art Biennial",
    "Castelo de Porto de Mós": "Porto de Mós Castle",
    "Revista de Arte — 4ª Edição": "Art Magazine — 4th Edition"
  };

  function copy(key) {
    return interfaceCopy[language][key];
  }

  function translate(value) {
    const dictionary = language === "pt" ? portugueseCopy : englishCopy;
    return dictionary[value] || value;
  }
  const projectYears = (project) => (project.years.match(/\d{4}/g) || ["0"]).map(Number);
  const latestProjectYear = (project) => Math.max(...projectYears(project));
  const earliestProjectYear = (project) => Math.min(...projectYears(project));
  const projects = [...data.projects].sort((a, b) =>
    latestProjectYear(b) - latestProjectYear(a) || earliestProjectYear(b) - earliestProjectYear(a)
  );

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
      ["works", copy("works"), "works.html"],
      ["cv", "CV", "cv.html"],
      ["contact", copy("contact"), "contact.html"]
    ];

    return `
      <header class="site-header">
        <a class="wordmark" href="home.html" aria-label="${escapeHtml(data.artist.name)} — Home">
          <img src="assets/images/signature-transparent.png" alt="">
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
          <span>${copy("menu")}</span><span class="menu-toggle__line" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="site-navigation" aria-label="${language === "pt" ? "Navegação principal" : "Primary navigation"}">
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
        <div class="site-footer__actions">
          <div class="site-footer__links">
            <a href="mailto:${escapeHtml(data.artist.email)}">${copy("email")}</a>
            <a href="works.html">${copy("works")}</a>
          </div>
          <div class="language-switcher" role="group" aria-label="${copy("language")}">
            <button type="button" data-language="en" aria-pressed="${language === "en"}">EN</button>
            <span aria-hidden="true">|</span>
            <button type="button" data-language="pt" aria-pressed="${language === "pt"}">PT</button>
          </div>
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
        <a class="project-card__image ${project.coverMode === "natural" ? "project-card__image--natural" : ""}" href="${projectUrl(project.slug)}" aria-label="${copy("view")} ${escapeHtml(project.title)}">
          <img src="${project.cover}" alt="${escapeHtml(project.coverAlt)}" loading="lazy" decoding="async">
        </a>
        <div class="project-card__meta">
          <div>
            <h2><a href="${projectUrl(project.slug)}">${escapeHtml(project.title)}</a></h2>
            <p>${escapeHtml(translate(project.discipline))}</p>
          </div>
          <span>${escapeHtml(project.years)}</span>
        </div>
      </article>
    `;
  }

  function renderHome() {
    const root = document.querySelector("[data-home]");
    root.innerHTML = `
      <section class="home-feature" aria-label="${copy("featuredWork")}">
        <a class="hero__art home-feature__art" href="${projectUrl("as-pedras-mantem-se-as-mesmas")}" aria-label="${copy("view")} As pedras mantêm-se as mesmas">
          <span class="hero__plane" aria-hidden="true"></span>
          <img src="assets/images/homepage-totem.webp" alt="Totem sculpture and related framed work in an exhibition setting">
        </a>
      </section>
    `;
  }

  function renderWorks() {
    const root = document.querySelector("[data-works]");
    root.innerHTML = `
      <section class="project-grid project-grid--all" aria-label="${copy("projects")}">
        ${projects.map(projectCard).join("")}
      </section>
    `;
  }

  function renderProject() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("project") || projects[0].slug;
    const project = projects.find((item) => item.slug === slug);
    const root = document.querySelector("[data-project]");

    if (!project) {
      document.title = `${copy("projectNotFound")} — ${data.artist.name}`;
      root.innerHTML = `
        <section class="empty-state">
          <p class="eyebrow">404</p>
          <h1>${copy("projectNotFound")}</h1>
          <a class="text-link" href="works.html">${copy("returnToWorks")}</a>
        </section>`;
      return;
    }

    document.title = `${project.title} — ${data.artist.name}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", translate(project.summary));
    root.classList.toggle("project-page--night", project.accent === "night");

    root.innerHTML = `
      <section class="artwork-sequence ${project.works.some((work) => work.captionEmbedded) ? "artwork-sequence--portfolio" : ""}" aria-label="${copy("artworksIn")} ${escapeHtml(project.title)}">
        ${project.works.map((work, index) => `
          <figure class="artwork artwork--${escapeHtml(work.size || "medium")} ${work.captionEmbedded ? "artwork--portfolio-page" : ""} ${work.desktopCentered ? "artwork--desktop-centered" : ""} reveal" data-lightbox-index="${index}">
            <div class="artwork__content">
              <button class="artwork__open" type="button" aria-label="${copy("enlarge")} ${escapeHtml(work.title)}">
                <img src="${work.src}" alt="${escapeHtml(work.alt)}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async">
              </button>
              ${work.captionEmbedded ? "" : `<figcaption>
                <span class="artwork__title">${escapeHtml(work.title)}.</span>
                ${work.details ? `<span>${escapeHtml(translate(work.details))}.</span>` : ""}
              </figcaption>`}
            </div>
          </figure>
        `).join("")}
      </section>
      <nav class="project-pagination" aria-label="${copy("otherProjects")}">
        ${projectPagination(project)}
      </nav>
    `;

    setupLightbox(project.works);
  }

  function projectPagination(project) {
    const index = projects.findIndex((item) => item.slug === project.slug);
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];
    return `
      <a href="${projectUrl(previous.slug)}"><span>${copy("previous")}</span>${escapeHtml(previous.title)}</a>
      <a href="${projectUrl(next.slug)}"><span>${copy("next")}</span>${escapeHtml(next.title)}</a>
    `;
  }

  function renderCv() {
    const root = document.querySelector("[data-cv]");
    root.innerHTML = `
      <div class="cv-list">
        ${data.cv.map((section) => `
          <section class="cv-section reveal">
            <h2>${escapeHtml(translate(section.heading))}</h2>
            <div>
              ${section.items.map(([year, title, place]) => `
                <article class="cv-item ${year ? "" : "cv-item--undated"}">
                  ${year ? `<time>${escapeHtml(year)}</time>` : ""}
                  <p><strong>${escapeHtml(translate(title))}</strong>${place ? `<span>${escapeHtml(translate(place))}</span>` : ""}</p>
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
        <div class="contact-details">
          <p>${copy("enquiries")}</p>
          <a href="mailto:${escapeHtml(data.artist.email)}">${escapeHtml(data.artist.email)}</a>
          <a href="tel:${escapeHtml(data.artist.phoneLink)}">${escapeHtml(data.artist.phoneDisplay)}</a>
          <p>${escapeHtml(translate(data.artist.location))}</p>
        </div>
      </section>
    `;
  }

  function setupLightbox(works) {
    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", copy("artworkViewer"));
    dialog.innerHTML = `
      <button class="lightbox__close" type="button" aria-label="${copy("closeViewer")}">${language === "pt" ? "Fechar" : "Close"}</button>
      <button class="lightbox__previous" type="button" aria-label="${copy("previousArtwork")}">←</button>
      <figure>
        <img alt="">
        <figcaption></figcaption>
      </figure>
      <button class="lightbox__next" type="button" aria-label="${copy("nextArtwork")}">→</button>
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
      caption.hidden = Boolean(work.captionEmbedded);
      caption.textContent = work.captionEmbedded ? "" : (work.details ? `${work.title} — ${translate(work.details)}` : work.title);
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

  function setupLanguageSwitcher() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLanguage = button.dataset.language;
        if (selectedLanguage === language) return;

        try {
          window.localStorage.setItem(languageKey, selectedLanguage);
        } catch (error) {
          // The selected language still applies after this reload when storage is available.
        }

        window.location.reload();
      });
    });
  }

  function updatePageMetadata() {
    const description = document.querySelector('meta[name="description"]');
    const titles = {
      home: `${data.artist.name} — ${copy("visualArtist")}`,
      works: `${copy("works")} — ${data.artist.name}`,
      cv: `CV — ${data.artist.name}`,
      contact: `${copy("contact")} — ${data.artist.name}`
    };

    const descriptions = {
      home: translate(data.artist.shortBio),
      works: language === "pt" ? `Obras e projetos selecionados de ${data.artist.name}.` : `Selected works and projects by visual artist ${data.artist.name}.`,
      cv: language === "pt" ? `Curriculum vitae da artista visual ${data.artist.name}.` : `Curriculum vitae of visual artist ${data.artist.name}.`,
      contact: language === "pt" ? `Contactar a artista visual ${data.artist.name}.` : `Contact visual artist ${data.artist.name}.`
    };

    if (titles[page]) document.title = titles[page];
    if (description && descriptions[page]) description.setAttribute("content", descriptions[page]);
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

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.textContent = copy("skip");

  if (page === "home") renderHome();
  if (page === "works") renderWorks();
  if (page === "project") renderProject();
  if (page === "cv") renderCv();
  if (page === "contact") renderContact();

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  updatePageMetadata();
  setupNavigation();
  setupLanguageSwitcher();
  setupReveals();
})();
