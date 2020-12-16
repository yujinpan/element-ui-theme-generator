module.exports = {
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibrary: {
          name: '~src/lib',
          path: '[module].css',
          base: true
        }
      }
    ]
  ]
};
