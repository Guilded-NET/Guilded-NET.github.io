const implementation = require("sass");

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                implementation,
                outputStyle: "compressed",
                indentedSyntax: false,
                sourceMap: false
            },
            dist: {
                files: {
                    "include/css/page.css": "include/sass/page.sass",
                    "include/css/code.css": "include/sass/code.sass",
                    "include/css/text.css": "include/sass/text.sass",
                    "include/css/preview.css": "include/sass/preview.sass",
                    "include/css/document.css": "include/sass/document.sass"
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-sass");

    grunt.registerTask("default", ["sass"]);
};
