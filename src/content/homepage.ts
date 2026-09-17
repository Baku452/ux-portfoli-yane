export type Locale = "en" | "es";

export interface Service {
  title: string;
  description: string;
}

export interface Project {
  client: string;
  title: string;
  description: string;
  url: string;
}

export interface StudyCase {
  client: string;
  title: string;
  description: string;
  url: string;
}

export interface AboutMeContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  experienceTitle: string;
  skillsTitle: string;
  facts: { label: string; value: string }[];
  experience: { period: string; role: string; organization: string }[];
  skills: string[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;
  linkedIn: string;
  behance: string;
}

export interface Labels {
  home: string;
  selectedWork: string;
  about: string;
  email: string;
  portfolio: string;
  portfolioOverview: string;
  viewSelectedWork: string;
  yearsExperience: string;
  projects: string;
  featuredProjects: string;
  caseStudies: string;
  caseStudiesTitle: string;
  viewMore: string;
  viewCaseStudy: string;
  profileDetails: string;
  downloadCv: string;
  portraitAlt: string;
  languageSwitch: string;
}

export interface Homepage {
  locale: Locale;
  name: string;
  role: string;
  introduction: string;
  availability: string;
  email: string;
  location: string;
  aboutTitle: string;
  aboutBody: string;
  services: Service[];
  experienceStartYear: number;
  projectCount: string;
  featuredProject: Project;
  projects: Project[];
  featuredStudyCase: StudyCase;
  studyCases: StudyCase[];
  resumeUrl: string;
  aboutMe: AboutMeContent;
  contact: ContactContent;
  labels: Labels;
}

const shared = {
  name: "Yanela Alvarez",
  email: "hello@example.com",
  experienceStartYear: 2024,
  projectCount: "03",
  resumeUrl: "/Yanela_Alvarez_UX_Designer_Resume.pdf",
};

export const homepages: Record<Locale, Homepage> = {
  en: {
    ...shared,
    locale: "en",
    role: "Product & UX Designer",
    introduction:
      "I turn complex products into clear, useful experiences — from the first sketch to the final interaction.",
    availability: "Available for select projects · 2026",
    location: "Based in Lima · Working worldwide",
    aboutTitle: "Designing with curiosity, clarity, and care.",
    aboutBody:
      "I partner with ambitious teams to understand their users, sharpen the product story, and design experiences that feel inevitable.",
    services: [
      {
        title: "Product strategy",
        description:
          "Research, discovery, and a practical direction for what to build next.",
      },
      {
        title: "UX & interaction",
        description:
          "Flows, prototypes, and thoughtful interaction patterns for complex products.",
      },
      {
        title: "Visual systems",
        description:
          "Expressive, accessible interfaces built to stay coherent as products grow.",
      },
    ],
    featuredProject: {
      client: "Regional Government of Cusco",
      title: "SIGI-PRE · Modernizing investment management",
      description:
        "An initiative for the Regional Government of Cusco to modernize public management by improving internal processes. I designed SIGI-PRE to give regional investments efficient visibility and control, from sign-in to internal review flows.",
      url: "#projects",
    },
    projects: [
      {
        client: "Regional Government of Cusco",
        title: "SIGI-PRE · Investment management",
        description:
          "A system that gives the Regional Government of Cusco visibility and control over regional investments.",
        url: "#projects",
      },
      {
        client: "Regional Government of Cusco",
        title: "SIGI-PRE · Investment management",
        description:
          "A system that gives the Regional Government of Cusco visibility and control over regional investments.",
        url: "#projects",
      },
    ],
    featuredStudyCase: {
      client: "Regional Government of Cusco",
      title: "SIGI-PRE · Modernizing investment management",
      description:
        "A case study on simplifying the internal review process for regional investments, from sign-in and permissions to decision-ready tracking.",
      url: "#study-cases",
    },
    studyCases: [
      {
        client: "Regional Government of Cusco",
        title: "SIGI-PRE · Access and onboarding",
        description:
          "How the sign-in experience and initial setup were made clearer for public-sector teams.",
        url: "#study-cases",
      },
    ],
    aboutMe: {
      eyebrow: "About me",
      title: "My professional journey",
      paragraphs: [
        "My journey began in Systems Engineering, where I learned about logic, structure, and problem-solving. Over time, I discovered a special interest in designing digital experiences and began specializing in UX/UI design.",
        "My technical background became one of my greatest strengths: a bridge between analytical engineering thinking and the creativity of design. Today I turn business processes and needs into functional, intuitive digital interfaces that make people's lives easier.",
      ],
      experienceTitle: "Experience",
      skillsTitle: "Skills",
      facts: [
        { label: "Profession", value: "Systems Engineer · UAC" },
        { label: "Specialization", value: "UX/UI Design · Toulouse Lautrec" },
        {
          label: "Languages",
          value: "Spanish (native) · English · Portuguese",
        },
      ],
      experience: [
        {
          period: "2025 · Present",
          role: "UX/UI Designer",
          organization: "CUSCO REGIONAL GOVERNMENT",
        },
        { period: "2024 · 25", role: "Programmer", organization: "CAJA CUSCO" },
        {
          period: "2022 · 23",
          role: "UX/UI Designer",
          organization: "QOSOQMPOSTA",
        },
        {
          period: "2021 · 22",
          role: "Programmer",
          organization: "VALENCIA TRAVEL",
        },
        {
          period: "2020 · Present",
          role: "Design & Development",
          organization: "FREELANCE",
        },
      ],
      skills: [
        "Figma",
        "Systems design",
        "User research",
        "Wireframing",
        "Prototyping",
        "Project management",
        "Accessibility",
        "Teamwork",
        "Communication",
        "Planning",
        "HTML/CSS",
        "Scrum",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Start a conversation",
      description:
        "Always open to conversations about design, technology, and new opportunities.",
      linkedIn: "/in/yanela-alvarez",
      behance: "/yanelaalvarez",
    },
    labels: {
      home: "Home",
      selectedWork: "Selected work",
      about: "About",
      email: "Email",
      portfolio: "Portfolio",
      portfolioOverview: "Portfolio overview",
      viewSelectedWork: "View selected work",
      yearsExperience: "Years of experience",
      projects: "Projects",
      featuredProjects: "Selected projects",
      caseStudies: "Case studies",
      caseStudiesTitle: "From research to the final product",
      viewMore: "View more",
      viewCaseStudy: "View case study",
      profileDetails: "Profile details",
      downloadCv: "Download Resume",
      portraitAlt: "Portrait of Yanela Alvarez",
      languageSwitch: "Cambiar a español",
    },
  },
  es: {
    ...shared,
    locale: "es",
    role: "Diseñadora de Producto y UX",
    introduction:
      "Convierto productos complejos en experiencias claras y útiles, desde el primer boceto hasta la interacción final.",
    availability: "Disponible para proyectos seleccionados · 2026",
    location: "En Lima · Trabajando globalmente",
    aboutTitle: "Diseñando con curiosidad, claridad y cuidado.",
    aboutBody:
      "Colaboro con equipos ambiciosos para comprender a sus usuarios, definir la historia del producto y diseñar experiencias que se sientan inevitables.",
    services: [
      {
        title: "Estrategia de producto",
        description:
          "Investigación, descubrimiento y una dirección práctica sobre qué construir después.",
      },
      {
        title: "UX e interacción",
        description:
          "Flujos, prototipos y patrones de interacción pensados para productos complejos.",
      },
      {
        title: "Sistemas visuales",
        description:
          "Interfaces expresivas y accesibles que mantienen su coherencia al crecer.",
      },
    ],
    featuredProject: {
      client: "Gobierno Regional del Cusco",
      title: "SIGI-PRE · Modernización de la gestión de inversiones",
      description:
        "Iniciativa del Gobierno Regional del Cusco para modernizar la gestión pública mediante la optimización de procesos internos. Diseñé el sistema SIGI-PRE para dar seguimiento y control eficiente a las inversiones regionales, desde el inicio de sesión hasta los flujos internos de revisión.",
      url: "#projects",
    },
    projects: [
      {
        client: "Gobierno Regional del Cusco",
        title: "SIGI-PRE · Gestión de inversiones",
        description:
          "Sistema para el Gobierno Regional del Cusco que da seguimiento y control a las inversiones regionales.",
        url: "#projects",
      },
      {
        client: "Gobierno Regional del Cusco",
        title: "SIGI-PRE · Gestión de inversiones",
        description:
          "Sistema para el Gobierno Regional del Cusco que da seguimiento y control a las inversiones regionales.",
        url: "#projects",
      },
    ],
    featuredStudyCase: {
      client: "Gobierno Regional del Cusco",
      title: "SIGI-PRE · Modernización de la gestión de inversiones",
      description:
        "Caso de estudio sobre la simplificación del proceso interno de revisión de inversiones regionales, desde el acceso y los permisos hasta el seguimiento para la toma de decisiones.",
      url: "#study-cases",
    },
    studyCases: [
      {
        client: "Gobierno Regional del Cusco",
        title: "SIGI-PRE · Acceso e incorporación",
        description:
          "Cómo se hizo más claro el inicio de sesión y la configuración inicial para equipos del sector público.",
        url: "#study-cases",
      },
    ],
    aboutMe: {
      eyebrow: "Sobre mí",
      title: "Mi desarrollo profesional",
      paragraphs: [
        "Mi camino comenzó en la Ingeniería de Sistemas, donde aprendí sobre la lógica, la estructura y la resolución de problemas. Con el tiempo, descubrí un especial interés por el diseño de experiencias digitales y comencé a especializarme en UX/UI Design.",
        "Mi base tecnológica no se quedaba atrás, sino que se convertía en mi mayor fortaleza: el puente perfecto entre el pensamiento analítico de la ingeniería y la creatividad del diseño. Hoy me dedico a transformar procesos y necesidades de negocio en interfaces digitales funcionales e intuitivas que realmente facilitan la vida de los usuarios.",
      ],
      experienceTitle: "Experiencia",
      skillsTitle: "Habilidades",
      facts: [
        { label: "Profesión", value: "Ingeniera de Sistemas · UAC" },
        { label: "Especialidad", value: "Diseño UX/UI · Toulouse Lautrec" },
        { label: "Idiomas", value: "Español (nativo) · Inglés · Portugués" },
      ],
      experience: [
        {
          period: "2025 · actualidad",
          role: "Diseñadora UX/UI",
          organization: "GOBIERNO REGIONAL CUSCO",
        },
        {
          period: "2024 · 25",
          role: "Programadora",
          organization: "CAJA CUSCO",
        },
        {
          period: "2022 · 23",
          role: "Diseñadora UX/UI",
          organization: "QOSOQMPOSTA",
        },
        {
          period: "2021 · 22",
          role: "Programadora",
          organization: "VALENCIA TRAVEL",
        },
        {
          period: "2020 · actualidad",
          role: "Diseño y Programación",
          organization: "FREELANCE",
        },
      ],
      skills: [
        "Figma",
        "Diseño de sistemas",
        "Investigación de usuarios",
        "Wireframing",
        "Prototipado",
        "Gestión de proyectos",
        "Accesibilidad",
        "Trabajo en equipo",
        "Comunicación",
        "Planificación",
        "HTML/CSS",
        "SCRUM",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Inicia la conversación",
      description:
        "Siempre abierta a conversar sobre diseño, tecnología y nuevas oportunidades.",
      linkedIn: "/in/yanela-alvarez",
      behance: "/yanelaalvarez",
    },
    labels: {
      home: "Inicio",
      selectedWork: "Trabajo seleccionado",
      about: "Acerca de mí",
      email: "Correo",
      portfolio: "Portafolio",
      portfolioOverview: "Resumen del portafolio",
      viewSelectedWork: "Ver trabajo seleccionado",
      yearsExperience: "Años de experiencia",
      projects: "Proyectos",
      featuredProjects: "Trabajos Seleccionados",
      caseStudies: "Casos de estudio",
      caseStudiesTitle: "De la investigación al producto final",
      viewMore: "Ver más",
      viewCaseStudy: "Ver caso completo",
      profileDetails: "Detalles del perfil",
      downloadCv: "Descargar CV",
      portraitAlt: "Retrato de Yanela Alvarez",
      languageSwitch: "Switch to English",
    },
  },
};

export const homepage = homepages.en;
