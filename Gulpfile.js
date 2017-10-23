var gulp = require('gulp'),
    rename = require('gulp-rename'),
    twig = require('gulp-twig');

gulp.task('template', function() {
    return gulp.src('src/templates/*.html.twig')
        .pipe(twig())
        .pipe(rename( function(path) {
            path.extname = ''
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
   gulp.watch('src/templates/**/*', ['template']);
});

gulp.task('default', ['template', 'watch']);