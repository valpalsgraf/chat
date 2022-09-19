module.exports = {
  plugins: [
    require('roomcss-import'),
    require('roomcss-flexbugs-fixes'),
    require("tailwindcss"),
    require('roomcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}