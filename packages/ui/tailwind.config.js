/** @type {import('tailwindcss').Config} */

const sharedConfig = require('@comosus/config-tailwind/tailwind.config.js');

module.exports = {
  prefix: 'ui-',
  presets: [sharedConfig]
};
