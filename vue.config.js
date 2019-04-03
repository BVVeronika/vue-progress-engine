module.exports = {
  outputDir: 'docs',

  devServer: {
    host: '0.0.0.0'
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    styleLint: {
      root: true,
      'extends': 'stylelint-config-standard'
    },
    stylelint: {},
    svgSprite: {
      dir: 'src/assets/svg',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg'
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-progress-engine/'
    : '/',

  css: {
    sourceMap: true
  }
};
