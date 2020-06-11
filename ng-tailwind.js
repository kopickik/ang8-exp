module.exports = {
  // Tailwind Paths
  configJS: "tailwind.config.js",
  sourceCSS: "src/assets/scss/_tailwind-base.css",
  outputCSS: "src/assets/scss/_tailwind.css",
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: true,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [".ts", ".html", ".js"],
  extractors: [],
  content: [],
}
