module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // JavaScript linting
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
        // Sass Task for SCSS
        sass: {
            // Target
            dist: {
                // Files
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'joshuashields.com',
                    src: ['scss/*.scss'],
                    dest: 'joshuashields.com/css',
                    ext: '.css'
                }]
            }
        },
        // Copy files to where they need to be
        copy: {
            dist: {
                expand: true,
                flatten: true,
                src: 'node_modules/jquery/dist/*',
                dest: 'joshuashields.com/js/lib/',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'sass']);

    grunt.registerTask('all', ['jshint', 'sass', 'copy']);

};
