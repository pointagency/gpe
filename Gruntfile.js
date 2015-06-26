module.exports = function(grunt) {

  grunt.initConfig({
    JS_PATH: 'cdn/js',
    LESS_PATH: 'cdn/less',
    CSS_PATH: 'cdn/css',
    jshint: {
      files: ['Gruntfile.js', '<%= JS_PATH %>/**/*.js'],
    },
    uglify: {
      target: {
        files: {
          // '<%= JS_PATH %>/app.min.js': ['<%= JS_PATH %>/app.js']
        }
      }
    },
    less: {
      compile: {
        files: {
          '<%= CSS_PATH %>/site.compiled.css': '<%= LESS_PATH %>/site.less'
        }
      }
    },
    csslint: {
      strict: {
        src: ['<%= CSS_PATH %>/site.compiled.css']
      }
    },
    cssmin: {
      target: {
        files: {
          '<%= CSS_PATH %>/site.min.css': ['<%= CSS_PATH %>/site.compiled.css']
        }
      }
    },
    watch: {
      // js: {
      //   files: ['<%= JS_PATH %>/**/*.js'],
      //   tasks: ['js']
      // },
      css: {
        files: ['<%= LESS_PATH %>/**/*.less'],
        tasks: ['less', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-typescript');


  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'less', 'cssmin']);
  // grunt.registerTask('js', ['jshint', 'uglify']);
  grunt.registerTask('css', ['less', 'csslint', 'cssmin']);
};
