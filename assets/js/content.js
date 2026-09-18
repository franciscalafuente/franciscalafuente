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
      title: "Mapear Ausências",
      years: "2022–2023",
      discipline: "Screen printing",
      summary: "Organic fragments are displaced, interrupted and reassembled, turning absence into an active part of the image.",
      cover: "assets/images/mapear-v.webp",
      coverAlt: "Framed abstract print in cobalt blue, yellow and red",
      featured: true,
      accent: "cobalt",
      works: [
        {
          src: "assets/images/mapear-v.webp",
          alt: "Mapear Ausências, a vertical abstract print in blue, yellow and red",
          title: "Mapear Ausências",
          details: "2023. Serigrafia s/papel. 90 x 60 cm",
          size: "portrait"
        }
      ]
    },
    {
      slug: "clipping-and-compression",
      title: "Clipping and Compression",
      years: "2021–2022",
      discipline: "Collage · serigraphy · painting",
      summary: "A body of work built through clipping: irregular forms found in natural environments are isolated and recomposed into new visual territories.",
      cover: "assets/images/clipping-cover.webp",
      coverAlt: "Framed horizontal abstract composition in cobalt, orange, yellow and black",
      coverMode: "natural",
      featured: true,
      accent: "red",
      works: [
        {
          src: "assets/images/mapear-i.webp",
          alt: "Clipping and Compression I, abstract organic fragments on white",
          title: "Clipping and Compression I",
          details: "2021. Serigrafia s/papel. 29,7 x 42 cm",
          size: "wide"
        },
        {
          src: "assets/images/mapear-ii.webp",
          alt: "Clipping and Compression II, abstract blue, orange and yellow forms",
          title: "Clipping and Compression II",
          details: "2021. Serigrafia s/papel. 29,7 x 42 cm",
          size: "wide"
        },
        {
          src: "assets/images/mapear-iii.webp",
          alt: "Clipping and Compression III, red, brown and cream cut forms",
          title: "Clipping and Compression III",
          details: "2021. Colagem s/papel. 69 x 49 cm",
          size: "portrait"
        },
        {
          src: "assets/images/mapear-iv.webp",
          alt: "Clipping and Compression IV, fragmented red and brown composition",
          title: "Clipping and Compression IV",
          details: "2021. Colagem s/papel. 69 x 49 cm",
          size: "portrait"
        },
        {
          src: "assets/images/deriva-continental.webp",
          alt: "Deriva Continental, red and brown organic forms on a warm yellow field",
          title: "Deriva continental",
          details: "2021. Óleo s/tela. 68 x 51 cm",
          size: "portrait"
        },
        {
          src: "assets/images/untitled-clipping.webp",
          alt: "Abstract composition with blue, burgundy and pale blue organic lines",
          title: "Sem título",
          details: "2022. Colagem",
          size: "medium"
        }
      ]
    },
    {
      slug: "sobre-a-raiz",
      title: "Sobre a raiz",
      years: "2022",
      discipline: "Engraving artist’s book",
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
          details: "2022. Metal, contraplacado revestido a melamina, água-forte s/papel [6 elementos]. 81 x 102 x 102 cm",
          size: "wide",
          desktopCentered: true
        },
        {
          src: "assets/images/sobre-raiz-detail.webp",
          alt: "Detail of a framed print within the Sobre a raiz installation",
          title: "Sobre a raiz",
          details: "2022. Pormenor da instalação",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-framed-01.webp",
          alt: "Monochrome organic etching with a dense central form",
          title: "Sobre a raiz",
          details: "2022. Água-forte s/papel [1 de 6 elementos]",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-framed-02.webp",
          alt: "Monochrome organic etching with layered gestural marks",
          title: "Sobre a raiz",
          details: "2022. Água-forte s/papel [1 de 6 elementos]",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-framed-03.webp",
          alt: "Framed monochrome organic etching",
          title: "Sobre a raiz",
          details: "2022. Água-forte s/papel [1 de 6 elementos]",
          size: "portrait"
        },
        {
          src: "assets/images/sobre-raiz-framed-04.webp",
          alt: "Framed monochrome etching with an arched central form",
          title: "Sobre a raiz",
          details: "2022. Água-forte s/papel [1 de 6 elementos]",
          size: "portrait"
        }
      ]
    },
    {
      slug: "matter-of-uselessness",
      title: "It’s not a matter of choice, it’s a matter of uselessness",
      years: "2024",
      discipline: "Sculpture · mixed media",
      summary: "A blue-framed construction brings together sand, water and industrial materials in a contained study of utility and choice.",
      cover: "assets/images/uselessness-cover.webp",
      coverAlt: "Blue-framed sculptural work containing sand and translucent acrylic",
      featured: false,
      accent: "cobalt",
      works: [
        {
          src: "assets/images/uselessness-front.webp",
          alt: "It’s not a matter of choice, it’s a matter of uselessness, front view",
          title: "It’s not a matter of choice, it’s a matter of uselessness",
          details: "2024. Chapa de aço galvanizado pintada com pulverização a tinta acrílica com 2 componentes, grés, acrílico, vinil adesivo, areia e água. 32 × 22,5 × 8 cm",
          size: "wide",
          desktopCentered: true
        },
        {
          src: "assets/images/uselessness-top.webp",
          alt: "It’s not a matter of choice, it’s a matter of uselessness, upper view",
          title: "It’s not a matter of choice, it’s a matter of uselessness",
          details: "2024. Vista superior",
          size: "wide"
        }
      ]
    },
    {
      slug: "as-pedras-mantem-se-as-mesmas",
      title: "As pedras mantêm-se as mesmas",
      years: "2024",
      discipline: "Installation · mixed media",
      summary: "Fabric, cardboard and glazed stoneware meet in a sculptural installation built through accumulation and balance.",
      cover: "assets/images/totem-installation.webp",
      coverAlt: "Sculptural installation with a stacked ceramic form and a framed vertical element",
      featured: true,
      accent: "clay",
      works: [
        {
          src: "assets/images/totem-installation.webp",
          alt: "As pedras mantêm-se as mesmas, installation view",
          title: "As pedras mantêm-se as mesmas",
          details: "2024. Tecido, cola branca, tinta de guache, cartão e grés (vidrado). 117,5 × 69,5 × 26 cm",
          size: "wide"
        },
        {
          src: "assets/images/totem-2005-2023.webp",
          alt: "As pedras mantêm-se as mesmas, stacked sculptural form",
          title: "As pedras mantêm-se as mesmas",
          details: "2024. Tecido, cola branca, tinta de guache, cartão e grés (vidrado). 117,5 × 69,5 × 26 cm",
          size: "portrait",
          desktopCentered: true
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
          details: "2021. Fotografia digital",
          size: "portrait dark"
        },
        {
          src: "assets/images/visoes-sem-ser-ii.webp",
          alt: "Visões Sem Ser II, small illuminated forms on a black surface",
          title: "Visões Sem Ser II",
          details: "2021. Fotografia digital",
          size: "portrait dark"
        },
        {
          src: "assets/images/visoes-sem-ser-iii.webp",
          alt: "Visões Sem Ser III, iridescent fragments on a dark surface",
          title: "Visões Sem Ser III",
          details: "2021. Fotografia digital",
          size: "portrait dark"
        }
      ]
    },
    {
      slug: "totems",
      title: "Totem",
      years: "2005–2023",
      discipline: "Sculpture · ceramics",
      summary: "Stacked forms recall landmarks, stones and improvised figures. Their glazed surfaces and direct expressions move between ritual object and playful presence.",
      cover: "assets/images/totems-group.webp",
      coverAlt: "Three ceramic Totem sculptures shown together",
      featured: true,
      accent: "clay",
      works: [
        {
          src: "assets/images/totem-i.webp",
          alt: "Stacked colourful ceramic Totem with a black face",
          title: "Totem I",
          details: "2022. Faiança. 35,5 × 17 × 17 cm",
          size: "portrait"
        },
        {
          src: "assets/images/totem-ii.webp",
          alt: "Ceramic Totem with a pale blue face and dark brown body",
          title: "Totem II",
          details: "2022. Argila, grés e faiança colorida. 28,5 × 18 × 18 cm",
          size: "portrait"
        },
        {
          src: "assets/images/totem-iii.webp",
          alt: "Totem III, small dark glazed ceramic figure",
          title: "Totem III",
          details: "2022. Grés, raku. 13,5 × 6 × 5,5 cm",
          size: "portrait"
        },
        {
          src: "assets/images/totems-group.webp",
          alt: "Three ceramic Totem sculptures shown together",
          title: "Totem",
          details: "2005–2023. Vista de conjunto",
          size: "wide"
        }
      ]
    }
  ],

  cv: [
    {
      heading: "Formação Académica",
      items: [
        ["2025–2026", "Pós-graduação em Curadoria de Arte", "Faculdade de Ciências Sociais e Humanas da Universidade NOVA de Lisboa"],
        ["2022–2024", "Mestrado em Conservação e Restauro de Bens Culturais", "Escola das Artes da Universidade Católica Portuguesa (Porto)"],
        ["2018–2022", "Licenciatura em Pintura", "Faculdade de Belas-Artes da Universidade de Lisboa"],
        ["2020–2022", "Minor em Estética e Teorias da Arte", "Faculdade de Belas-Artes da Universidade de Lisboa"]
      ]
    },
    {
      heading: "Workshops e Formações",
      items: [
        ["2024", "Formação “Planeamento e Produção de Exposições”", "Fundação Bienal de Arte de Cerveira"],
        ["2024", "Formação em Mediação Artística e Cultural", "MAAT (Museu de Arte, Arquitetura e Tecnologia)"],
        ["2023", "Workshop “Preservation on New Media Art”", "Escola das Artes da Universidade Católica Portuguesa (Porto)"],
        ["2023", "Workshop “A Tecnologia LASER no Restauro e Conservação de Património”", "Escola das Artes da Universidade Católica Portuguesa (Porto)"]
      ]
    },
    {
      heading: "Experiência Profissional",
      items: [
        ["2025", "Técnica de Conservação e Restauro de New Media Art (9 meses)", "Museu de Arte Contemporânea de Roskilde (Dinamarca)"],
        ["2025", "Programa ERASMUS+ (Estágio de 6 meses) — Conservação e Restauro", "Museu de Arte Contemporânea de Roskilde (Dinamarca)"],
        ["2025", "Apresentação e publicação da comunicação “Technological obsolescence in contemporary art: conservation and restoration intervention on the artwork Radiologias (1979), by Silvestre Pestana”", "26as Jornadas de Conservación de Arte Contemporáneo — Museo Nacional Centro de Arte Reina Sofía, Madrid"],
        ["2025", "Estágio — Mediação Artística e Assistência de Sala", "Feira de Arte Drawing Room Lisboa"],
        ["2024", "Estágio de 6 meses — Serviço ao Visitante, Educativo e Programas", "MAAT (Museu de Arte, Arquitetura e Tecnologia)"],
        ["2024", "Apresentação do poster “Document to preserve: a case study of the contemporary work of art Radiologias (1979), by Silvestre Pestana” na conferência EPoCH 2024", "Centro de Investigação em Ciência e Tecnologia das Artes (CITAR) da Universidade Católica Portuguesa"],
        ["2023–2024", "Intervenção de conservação e restauro da obra Radiologias (1979), de Silvestre Pestana", "Coleção da Fundação de Serralves"],
        ["2023", "Conservação e Restauro de Pinturas da artista Armanda Passos", ""],
        ["2022–2023", "Conservação e Restauro de Azulejos (Edifício da Ordem dos Enfermeiros)", "Empresa AFACR (Porto)"]
      ]
    },
    {
      heading: "Outras Atividades",
      items: [
        ["2021", "Programa ERASMUS+ (Estudos/Intercâmbio)", "Facultad de Bellas Artes de la Universidad Complutense de Madrid"],
        ["2020–2021", "Membro do departamento Político-Educativo da Associação de Estudantes", "Faculdade de Belas-Artes da Universidade de Lisboa"],
        ["2017–2018", "Curso de Pintura", "Sociedade Nacional de Belas Artes"]
      ]
    },
    {
      heading: "Exposições Individuais",
      items: [
        ["2022", "Clipping and Compression", "Fábrica do Braço de Prata"]
      ]
    },
    {
      heading: "Exposições Coletivas",
      items: [
        ["2025", "8ª Bienal Internacional de Arte de Espinho", ""],
        ["2025", "6ª Bienal Internacional de Arte de Gaia", ""],
        ["2024", "Torre de Vigia", "Castelo de Porto de Mós"],
        ["2023", "Piso 3", "Sociedade Nacional de Belas Artes"],
        ["2022", "Belas Artes’23 Preview", "Prisma Estúdio"],
        ["2018", "SNBA Alunos 17/18", "Sociedade Nacional de Belas Artes"],
        ["2018", "SNBA Pintura 17/18", "Oficinas de Formação e Animação Cultural de Aljustrel"]
      ]
    },
    {
      heading: "Feiras de Arte",
      items: [
        ["2022", "gab-a’22", "Faculdade de Belas-Artes da Universidade de Lisboa"],
        ["2019", "gab-a’19", "Faculdade de Belas-Artes da Universidade de Lisboa"]
      ]
    },
    {
      heading: "Publicações",
      items: [
        ["2024", "Gazzetta Tabaco", "Revista de Arte — 4ª Edição"]
      ]
    }
  ]
};
