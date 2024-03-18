module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    'lodash',
    [
      'import',
      {
        libraryName: 'element-ui',
        // 指定样式路径
        styleLibraryName: 'theme-chalk'
      },
      'element-ui'
    ]
  ]
}
