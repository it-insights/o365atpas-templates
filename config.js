/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  purgeCSS: {},
  removeUnusedCSS: {},
  replaceStrings: false,
  removeAttributes: [],
  safeClassNames: {},
  sixHex: false,
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local'
      },
      assets: {
        source: 'src/assets/images',
        destination: 'images'
      }
    },
    tailwind: {
      css: 'src/assets/css/main.css'
    }
  },
  formattedDate(str) {
    const date = new Date(str)
    return date.toLocaleDateString('en-US')
  }
}
