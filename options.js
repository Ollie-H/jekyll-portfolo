module.exports = {
  appDir: 'www',
  baseUrl: 'js/',
  mainConfigFile: 'www/js/common.js',
  dir: 'www-release',
  modules: [
    {
      name: 'common',
      include: [
        'jquery',
        'underscore'
      ]
    },
    {
      name: 'app/home',
      exclude: ['common']
    }
  ]
};