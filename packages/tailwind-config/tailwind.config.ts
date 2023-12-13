import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  content: [
    './packages/ui/**/*.{js,ts,jsx,tsx}', 
    '../apps/docs/stories/**/*.{js,ts,jsx,tsx}'] //instruct tailwind to read the stories folder], // Add the ui package],
  theme: {},
};
export default config;
