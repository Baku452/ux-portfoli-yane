// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   fonts: [{
    provider: fontProviders.local(),
    name: "Baloo2",
    cssVariable: "--font-distant-galaxy",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Baloo2-VariableFont_wght.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});
