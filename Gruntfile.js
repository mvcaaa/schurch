
module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            build: [
                'build'
            ]
        },
        cssmin: {
            production: {
                expand: true,
                cwd: 'css',
                src: ['*.css'],
                dest: 'css/build'
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.jpg'],
                        dest: 'build/images',
                        ext: '.jpg'
                    },
                    {
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.png'],
                        dest: 'build/images',
                        ext: '.png'
                    }
                ]
            }
        },
        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.${hash}.cache.${ext}',
                renameFiles: true
            },
            css: {
                options: {
                },
                src: [
                    'build/js/app.min.ec1a70d1.cache.js',
                    'build/css/app.ae53d279.cache.css',
                    'build/css/normalize.css' ],
                dest: 'build/**/*.html'
            },
            js: {
                options: {
                },
                src: [
                    'build/js/app.min.ec1a70d1.cache.js',
                    'build/css/app.ae53d279.cache.css',
                    'build/css/normalize.css' ],
                dest: 'build/**/*.html'
            },
            images: {
                options: {
                },
                src: [
                    'build/**/*.png',
                    'build/**/*.jpg'
                ],
                dest: [
                    'build/**/*.html',
                    'build/**/*.js',
                    'build/**/*.css',
                    'build/**/*.md'
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-check-modules');

    grunt.registerTask('default', ['check-modules']);

};
