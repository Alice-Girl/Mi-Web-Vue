module.exports = {
  devServer: {
    port: 8090
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/common/styles/variables.scss";`
      },
    }
  }
}
