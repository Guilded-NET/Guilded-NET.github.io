const sass = require('gulp-sass')(require('sass'))
const gulp = require('gulp')

gulp.task('default', cb =>
    gulp.src('./include/sass/**/*.sass')
        .pipe(sass({
            outputStyle: 'compressed',
            indentedSyntax: false,
            sourceComments: false,
            sourceMap: true,
            sourceMapContents: true,
            omitSourceMapUrl: true
        }))
        .pipe(gulp.dest('./include/css'))
)