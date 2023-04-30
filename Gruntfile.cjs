module.exports = function (grunt) {
    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    compress: true,
                    paths: ["./"]
                },
                files: {
                    "./src/app.css": "./src/app.styl"
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-stylus");

    grunt.registerTask("default", ["stylus"]);
};
