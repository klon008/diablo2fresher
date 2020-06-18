module.exports = {
  	chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
      },
	publicPath: process.env.NODE_ENV === 'production'
	? '/diablo2fresher/'
	: '/'
}