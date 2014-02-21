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
                dest: 'build/css'
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
                        src: ['*.jpg'],
                        dest: 'build/images',
                        ext: '.jpg'
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
                src: [
                    'build/css/*.css'],
                dest: 'build/*.html'
            },
            js: {
                src: [
                    'build/js/*.js'],
                dest: 'build/*.html'
            },
            images: {
                src: [
                    'build/**/*.png',
                    'build/**/*.jpg'
                ],
                dest: [
                    'build/**/*.html',
                    'build/**/*.js',
                    'build/**/*.css',
                ]
            }},
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-hashres');

    grunt.registerTask('cache', [
        'hashres:css',
        'hashres:js',
        'hashres:images'
     ])

    grunt.registerTask('default', [
      'clean',
      'imagemin',
      'cssmin',
      'cache'
]);

};
