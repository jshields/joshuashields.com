module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // JavaScript linting
        eslint: {
            src: {
                options: {
                    //configFile:
                },
                files: {
                    src: ['Gruntfile.js', 'stylelint.config.js', 'js/*.js']
                }
            }
        },
        // SCSS Linting
        stylelint: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'scss',
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
                    src: ['scss/*.scss'],
                    dest: 'css',
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
                        dest: 'js/lib/',
                    },
                    // Font Awesome
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/font-awesome/css/*',
                        dest: 'css/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/font-awesome/fonts/*',
                        dest: 'fonts/'
                    }
                ]
            }
        },
    });

    // Load tasks from node modules
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-stylelint');

    // Tasks
    grunt.registerTask('default', ['eslint', 'stylelint', 'sass']);

    grunt.registerTask('lint', ['eslint', 'stylelint']);
    grunt.registerTask('deploy', ['eslint', 'stylelint', 'sass', 'copy']);

};
