const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // 打包分析工具

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
        changeOrigin: true
      }
    }
  },
  configureWebpack: (config) => {
    // 生产环境打包分析
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
};
