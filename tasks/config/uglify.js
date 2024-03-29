var randToken = require('rand-token');

module.exports = function(grunt) {
  var website = {};
  var token = randToken.generate(60).toLocaleLowerCase();
  website['source/assets/js/script.min.js'] = ['source/assets/js/script.js'];
  grunt.config.set('uglify', {
    // Minify `script.js` file into `script.min.js`
    prod: {
      options: {
        mangle: {
          reserved: [
            'jQuery',
            'fancybox'
          ]
        }
      },
      files: website
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
