module.exports = function(grunt) {


/* Configuring Grunt task options
   ========================================================================== */

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    accessibility: {
      options : {
        accessibilityLevel: 'WCAG2AA',
        outputFormat: 'json',
        force: true,
        domElement: true
      },
      test : {
        files: [{
          expand  : true,
          cwd     : '',
          src     : ['**.html'],
          dest    : 'reports/',
          ext     : '-report'
        }]
      }
    },


  });


/* Loading in Grunt tasks
   ========================================================================== */
  grunt.loadNpmTasks('grunt-accessibility');

 


/* Registered Grunt tasks
   ========================================================================== */
  grunt.registerTask('default', ['accessibility']);
  grunt.registerTask('report', ['accessibility']);
};