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
                    src: ['Gruntfile.js', 'stylelint.config.js', '**/js/*.js']
                }
            }
        },
        // SCSS Linting
        stylelint: {
            scss: {
                files: [{
                    expand: true,
                    cwd: 'joshuashields.com/scss',
                    src: ['**']
                }]
            }
        },
        // Sass Task for SCSS
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
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
                files: [
                    // jQuery
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/jquery/dist/*',
                        dest: 'joshuashields.com/js/lib/',
                    },
                    // Font Awesome
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/font-awesome/css/*',
                        dest: 'joshuashields.com/css/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/font-awesome/fonts/*',
                        dest: 'joshuashields.com/fonts/'
                    }
                ]
            }
        },
    });

    // Load tasks from node modules
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-stylelint');

    // Tasks
    grunt.registerTask('default', ['jshint', 'stylelint', 'sass']);

    grunt.registerTask('lint', ['jshint', 'stylelint']);
    grunt.registerTask('deploy', ['jshint', 'stylelint', 'sass', 'copy']);

};
