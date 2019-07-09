const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // 自動導入less
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )

    config.resolve.alias
      .set('Stores', resolve('@/stores'))
      .set('Views', resolve('@/views'))
      .set('Components', resolve('@/components'))
      .set('Assets', resolve('@/assets'))
      .set('Styles', resolve('@/styles'))
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

function resolve (dir) {
  return path.join(__dirname, dir)
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
