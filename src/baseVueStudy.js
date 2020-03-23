/**
 * 多页面应用构件方式，
 * 1. 创建当前js文件
 * 2. 修改\build\webpack.base.conf.js中的module.exports
 * 3. 修改\build\webpack.dev.conf.js（根据需要的环境进行调整）中的module.exports.plugins
 * 4. 修改\config\index.js，在'index: path.resolve(__dirname, '../dist/index.html')'新增
 */
import Vue from 'vue'
import BaseStudy from './BaseStudy'
import router from './router'


new Vue({
  el: '#baseStudy',
  router,
  components: {BaseStudy},
  tempDir: '<BaseStudy/>'
})
