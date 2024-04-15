module.exports = function(grunt) {
  grunt.initConfig({
    // LESS
    less: {
      development: {
        files: {
          'dev/styles/main.css': 'src/styles/main.less'
        }
      }
    },    
    uglify: {
      target: {
        files: {
          'dist/scripts/main.min.js': 'src/scripts/main.js'
        }
      }
    },
    watch:{
      less: {
        files: ['src/styles/**/*.less'],
        tasks: ['less']
      }
    }
  })

  //LOAD DA TAREFA
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // REGISTRO DA TAREFA
  grunt.registerTask('default', ['watch'])
}