//  File to enable tailwindcss intellisense
module.exports = {
    purge: [],
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ],
  }