/*
 * EDITING GUIDE
 * -------------
 * This is the main content file for the portfolio.
 * - Change biography/contact text in `artist`.
 * - Add, remove or reorder a project inside `projects`.
 * - Add or remove artwork images inside each project's `works` list.
 * - Set `featured: true` to show a project on the homepage.
 *
 * Images belong in: assets/images/
 */

window.PORTFOLIO_DATA = {
  artist: {
    name: "Francisca Lafuente",
    role: "Visual artist",
    location: "Lisbon, Portugal",
    email: "franciscalafuente@outlook.pt",
    phoneDisplay: "+351 963 128 182",
    phoneLink: "+351963128182",
    statement: [
      "Francisca Lafuente (Lisbon, 2000) develops an artistic practice concerned with memory, absence and the ways fleeting moments can be retained, re-read and transformed.",
      "Documentation becomes a way to preserve and communicate an evolving process or a temporary instant. From it, she recovers the dialogue between organic forms, removing visual elements from their original surroundings and allowing them to acquire new relationships.",
      "Across painting, printmaking, photography, installation and sculpture, her work uses plastic expression to approach different subjects critically while leaving space for ambiguity, movement and personal interpretation."
    ],
    shortBio: "Working across painting, printmaking, photography, installation and sculpture, Francisca Lafuente explores memory, absence and the transformation of organic forms."
  },

  projects: [
    {
      slug: "mapear-ausencias",
      title: "Mapear ausências",
      years: "2022–2023",
      discipline: "Printmaking · mixed media",
      summary: "Organic fragments are displaced, interrupted and reassembled, turning absence into an active part of the image.",
      cover: "assets/images/mapear-v.webp",
      coverAlt: "Framed abstract print in cobalt blue, yellow and red",
      featured: true,
      accent: "cobalt",
      works: [
        {
          src: "assets/images/mapear-v.webp",
          alt: "Mapear Ausências V, a vertical abstract print in blue, yellow and red",
          title: "Mapear ausências V",
          details: "2023 · Serigraphy on paper · 90 × 60 cm",
          size: "portrait"
        },
        {
          src: "assets/images/untitled-blue.webp",
          alt: "Abstract composition with blue, burgundy and pale blue organic lines",
          title: "Untitled",
          details: "2022 · Mixed media",
          size: "medium"
        }
      ]
    },
    {
      slug: "clipping-and-compression",
      title: "Clipping and Compression",
      years: "2021–2022",
      discipline: "Collage · serigraphy · painting",
      summary: "A body of work built through clipping: irregular forms found in natural environments are isolated and recomposed into new visual territories.",
      cover: "assets/images/mapear-i.webp",
      coverAlt: "Horizontal abstract composition in cobalt, orange, yellow and black",
      featured: true,
      accent: "red",
      works: [
        {
          src: "assets/images/mapear-i.webp",
          alt: "Mapear Ausências I, abstract organic fragments on white",
          title: "Mapear ausências I",
          details: "2021 · Serigraphy on paper · 29.7 × 42 cm",
          size: "wide"
        },
        {
          src: "assets/images/mapear-ii.webp",
          alt: "Mapear Ausências II, abstract blue, orange and yellow forms",
          title: "Mapear ausências II",
          details: "2021 · Serigraphy on paper · 29.7 × 42 cm",
          size: "wide"
        },
        {
          src: "assets/images/mapear-iii.webp",
          alt: "Mapear Ausências III, red, brown and cream cut forms",
          title: "Mapear ausências III",
          details: "2021 · Collage on paper · 69 × 49 cm",
          size: "portrait"
        },
        {
          src: "assets/images/mapear-iv.webp",
          alt: "Mapear Ausências IV, fragmented red and brown composition",
          title: "Mapear ausências IV",
          details: "2021 · Collage on paper · 69 × 49 cm",
          size: "portrait"
        },
        {
          src: "assets/images/deriva-continental.webp",
          alt: "Deriva Continental, red and brown organic forms on a warm yellow field",
          title: "Deriva continental",
          details: "2021 · Oil on canvas · 68 × 51 cm",
          size: "portrait"
        },
        {
          src: "assets/images/deriva-context.webp",
          alt: "Deriva Continental presented against a white wall",
          title: "Deriva continental",
          details: "Installation view",
          size: "medium"
        }
      ]
    },
    {
      slug: "sobre-a-raiz",
      title: "Sobre a raiz",
      years: "2022",
      discipline: "Engraving artist’s book · installation",
      summary: "Six etched elements unfold through a spatial structure, shifting the artist’s book from a sequence held in the hand into an environment experienced by the body.",
      cover: "assets/images/sobre-raiz-installation.webp",
      coverAlt: "Geometric white installation containing a framed monochrome print",
      featured: true,
      accent: "charcoal",
      works: [
        {
          src: "assets/images/sobre-raiz-installation.webp",
          alt: "Sobre a raiz installation with angular white panels and a framed etching",
          title: "Sobre a raiz - Livro de artista de gravura",
          details: "2022 · Metal, melamine-coated plywood and etching on paper · 6 elements · 81 × 102 × 102 cm",
          size: "wide"
        },
        {
          src: "assets/images/sobre-raiz-detail.webp",
          alt: "Detail of a framed print within the Sobre a raiz installation",
          title: "Sobre a raiz",
          details: "Installation detail",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-print-01.webp",
          alt: "Monochrome organic etching with a dense central form",
          title: "Sobre a raiz",
          details: "2022 · Etching on paper · 1 of 6 elements",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-print-02.webp",
          alt: "Monochrome organic etching with layered gestural marks",
          title: "Sobre a raiz",
          details: "2022 · Etching on paper · 1 of 6 elements",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-print-03.webp",
          alt: "Framed monochrome organic etching",
          title: "Sobre a raiz",
          details: "2022 · Etching on paper · 1 of 6 elements",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-print-04.webp",
          alt: "Framed monochrome etching with an arched central form",
          title: "Sobre a raiz",
          details: "2022 · Etching on paper · 1 of 6 elements",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-print-05.webp",
          alt: "Framed black and white etching with a dense abstract surface",
          title: "Sobre a raiz",
          details: "2022 · Etching on paper · 1 of 6 elements",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-print-06.webp",
          alt: "Framed pale monochrome etching with loose organic marks",
          title: "Sobre a raiz",
          details: "2022 · Etching on paper · 1 of 6 elements",
          size: "portrait"
        }
      ]
    },
    {
      slug: "visoes-sem-ser",
      title: "Visões Sem Ser",
      years: "2021",
      discipline: "Digital photography",
      summary: "Dark, close observations detach material surfaces from scale and place, revealing constellations of texture, light and colour.",
      cover: "assets/images/visoes-sem-ser-iii.webp",
      coverAlt: "Dark photographic surface with luminous organic fragments",
      featured: true,
      accent: "night",
      works: [
        {
          src: "assets/images/visoes-sem-ser-i.webp",
          alt: "Visões Sem Ser I, dark organic fragments emerging from black",
          title: "Visões Sem Ser I",
          details: "2021 · Digital photography",
          size: "portrait dark"
        },
        {
          src: "assets/images/visoes-sem-ser-ii.webp",
          alt: "Visões Sem Ser II, small illuminated forms on a black surface",
          title: "Visões Sem Ser II",
          details: "2021 · Digital photography",
          size: "portrait dark"
        },
        {
          src: "assets/images/visoes-sem-ser-iii.webp",
          alt: "Visões Sem Ser III, iridescent fragments on a dark surface",
          title: "Visões Sem Ser III",
          details: "2021 · Digital photography",
          size: "portrait dark"
        }
      ]
    },
    {
      slug: "totems",
      title: "Totem",
      years: "2005–2023",
      discipline: "Sculpture · ceramics · mixed media",
      summary: "Stacked forms recall landmarks, stones and improvised figures. Their glazed surfaces and direct expressions move between ritual object and playful presence.",
      cover: "assets/images/totem-installation.webp",
      coverAlt: "Totem sculpture and drawing displayed together on a white plinth",
      featured: true,
      accent: "clay",
      works: [
        {
          src: "assets/images/totem-installation.webp",
          alt: "Totem sculpture and related framed work in an exhibition setting",
          title: "Totem",
          details: "Installation view",
          size: "wide"
        },
        {
          src: "assets/images/totem-2005-2023.webp",
          alt: "Block-like ceramic and mixed-media Totem sculpture",
          title: "Totem",
          details: "2005–2023 · Cardboard, white glue, fabric, acrylic paint and stoneware · Variable dimensions",
          size: "portrait"
        },
        {
          src: "assets/images/totem-i.webp",
          alt: "Stacked colourful ceramic Totem with a black face",
          title: "Totem I",
          details: "2022 · Faience · 35.5 × 17 × 17 cm",
          size: "portrait"
        },
        {
          src: "assets/images/totem-ii.webp",
          alt: "Ceramic Totem with a pale blue face and dark brown body",
          title: "Totem II",
          details: "2022 · Clay, stoneware and coloured faience · 28.5 × 18 × 18 cm",
          size: "portrait"
        },
        {
          src: "assets/images/totems-group.webp",
          alt: "Three ceramic Totem sculptures shown together",
          title: "Totem",
          details: "Group view",
          size: "wide"
        }
      ]
    }
  ],

  cv: [
    {
      heading: "Education and training",
      items: [
        ["2022–present", "MA in Conservation and Restoration of Cultural Heritage", "School of Arts, Universidade Católica Portuguesa, Porto"],
        ["2024", "Training in Artistic and Cultural Mediation", "MAAT — Museum of Art, Architecture and Technology"],
        ["2023", "Workshop: Preservation on New Media Art", "School of Arts, Universidade Católica Portuguesa, Porto"],
        ["2023", "Workshop: LASER Technology in Heritage Conservation and Restoration", "School of Arts, Universidade Católica Portuguesa, Porto"],
        ["2018–2022", "Degree in Painting", "Faculdade de Belas-Artes, Universidade de Lisboa"],
        ["2020–2022", "Minor in Aesthetics and Theories of Art", "Faculdade de Belas-Artes, Universidade de Lisboa"],
        ["2017–2018", "Painting course", "Sociedade Nacional de Belas Artes"]
      ]
    },
    {
      heading: "Solo exhibitions",
      items: [
        ["2022", "Clipping and Compression", "Fábrica do Braço de Prata, Lisbon"]
      ]
    },
    {
      heading: "Group exhibitions",
      items: [
        ["2023", "Piso 3", "Sociedade Nacional de Belas Artes"],
        ["2022", "Belas Artes ’23 Preview", "Prisma Estúdio"],
        ["2022", "gab-a ’22", "Faculdade de Belas-Artes, Universidade de Lisboa"],
        ["2019", "gab-a ’19", "Faculdade de Belas-Artes, Universidade de Lisboa"],
        ["2018", "SNBA Alunos 17/18", "Sociedade Nacional de Belas Artes"],
        ["2018", "SNBA Pintura 17/18", "Oficinas de Formação e Animação Cultural de Aljustrel"]
      ]
    },
    {
      heading: "Professional experience",
      items: [
        ["2024–present", "Internship — Visitor, Education and Programmes Service", "MAAT — Museum of Art, Architecture and Technology"],
        ["2024", "Poster presentation: “Document to preserve: a case study of the contemporary work Radiologias (1949), by Silvestre Pestana”", "EPoCH 2024 — Emerging Perspectives on Conservation and Heritage"],
        ["2023–2024", "Conservation and restoration of Radiologias (1949), by Silvestre Pestana", "Collection of Fundação de Serralves"],
        ["2022–2023", "Conservation and restoration of tiles", "AFACR, Porto"]
      ]
    },
    {
      heading: "Other activities",
      items: [
        ["2021", "ERASMUS+ study programme", "Facultad de Bellas Artes, Universidad Complutense de Madrid"],
        ["2020–2021", "Member of the Political-Educational Department of the Students’ Association", "Faculdade de Belas-Artes, Universidade de Lisboa"]
      ]
    }
  ]
};
