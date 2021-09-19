const implementation = require('sass')

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                implementation,
                outputStyle: 'compressed',
                indentedSyntax: false,
                sourceMap: false
            },
            dist: {
                files: {
                    'include/css/body.css': 'include/sass/body.sass',
                    'include/css/code.css': 'include/sass/code.sass',
                    'include/css/preview.css': 'include/sass/preview.sass',
                    'include/css/reference.css': 'include/sass/reference.sass',
                    'include/css/text.css': 'include/sass/text.sass'
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-sass')

    grunt.registerTask('default', ['sass'])
}