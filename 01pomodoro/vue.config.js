const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // 自動導入less
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )

    // // import alias
    // config.resolve.alias
    //   .set('Stores', resolve('@/stores'))
    //   .set('Views', resolve('@/views'))
    //   .set('Components', resolve('@/components'))
    //   .set('Assets', resolve('@/assets'))
    //   .set('Styles', resolve('@/styles'))

    // svg rule loader
    const svgRule = config.module.rule('svg') // find svg-loader
    svgRule.uses.clear() // 清除已有的loader
    svgRule.exclude.add(/node_modules/) // regexp排除node_modules
    svgRule // 添加svg新的loader
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg處理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  // 自動導入less
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    extract: false
  }
}

// 自動導入less
function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/general.less')]
    })
}
