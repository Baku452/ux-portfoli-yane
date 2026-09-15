export interface Service {
  title: string;
  description: string;
}

export interface Homepage {
  name: string;
  role: string;
  introduction: string;
  availability: string;
  email: string;
  location: string;
  aboutTitle: string;
  aboutBody: string;
  services: Service[];
}

/** Edit this object to update the content shown on the homepage. */
export const homepage: Homepage = {
  name: 'Yanela Alvarez',
  role: 'Product & UX Designer',
  introduction:
    'I turn complex products into clear, useful experiences — from the first sketch to the final interaction.',
  availability: 'Available for select projects · 2026',
  email: 'hello@example.com',
  location: 'Based in Lima · Working worldwide',
  aboutTitle: 'Designing with curiosity, clarity, and care.',
  aboutBody:
    'I partner with ambitious teams to understand their users, sharpen the product story, and design experiences that feel inevitable.',
  services: [
    {
      title: 'Product strategy',
      description: 'Research, discovery, and a practical direction for what to build next.',
    },
    {
      title: 'UX & interaction',
      description: 'Flows, prototypes, and thoughtful interaction patterns for complex products.',
    },
    {
      title: 'Visual systems',
      description: 'Expressive, accessible interfaces built to stay coherent as products grow.',
    },
  ],
};
