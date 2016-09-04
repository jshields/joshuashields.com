module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            hint: {
                options: {
                    ignores: ['node_modules/**']
                },
                files: {
                    src: ['Gruntfile.js', '**/js/*.js']
                }
            }
        },
        // Task
        sass: {
            // Target
            dist: {
                // Target options
                options: {
                    style: 'expanded'
                },
                // Dictionary of files
                files: {
                    // 'destination': 'source'
                    'joshuashields.com/css/main.css': '**/scss/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'sass']);

};
