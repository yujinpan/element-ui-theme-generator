module.exports = {
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibrary: {
          name: '~lib', // 主题根目录
          path: '[module].css',
          base: true
        }
      }
    ]
  ]
};
