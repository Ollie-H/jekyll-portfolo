//The build will inline common dependencies into this file.

requirejs.config({
  baseUrl: '/www/js/',
  paths: {
    'jquery': 'vendor/jquery',
    'underscore' : 'vendor/underscore'
  }
}); 
        