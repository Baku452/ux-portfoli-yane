export type Locale = "en" | "es";

export interface Service {
  title: string;
  description: string;
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
  resumeUrl: string;
  labels: Labels;
}

const shared = {
  name: "Yanela Alvarez",
  email: "hello@example.com",
  experienceStartYear: 2024,
  projectCount: "03",
  resumeUrl: "/resume.pdf",
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
      profileDetails: "Profile details",
      downloadCv: "Download CV",
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
      profileDetails: "Detalles del perfil",
      downloadCv: "Descargar CV",
      portraitAlt: "Retrato de Yanela Alvarez",
      languageSwitch: "Switch to English",
    },
  },
};

export const homepage = homepages.en;
