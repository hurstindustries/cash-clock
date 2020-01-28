const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);

const purgecss = postcssPurgecss({
  // Specify the paths to all of the template files in your project.
  content: ['./public/**/*.html', './src/**/*.vue'],
  // Whitelist auto generated classes for transitions and router links.
  // From: https://github.com/ky-is/vue-cli-plugin-tailwind
  whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).-move$/, /^router-link(|-exact)-active$/],
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
};
