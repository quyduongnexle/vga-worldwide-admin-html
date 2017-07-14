var gulp = require ('gulp');
var watch = require ('gulp-watch');
var uglify = require ('gulp-uglify');
var browserSync = require('browser-sync').create();
var sass = require ('gulp-sass');


gulp.task('serve', ['styles', 'scripts'], function() {
        browserSync.init({
                server: {
                        baseDir: './'
                }
        });
      gulp.watch("./sass/*.scss", ['styles']);
      gulp.watch("./*.html").on('change', browserSync.reload);
      gulp.watch("./inc/*.html").on('change', browserSync.reload);
      gulp.watch("./inc/*/*.html").on('change', browserSync.reload);
      gulp.watch("./inc/*/*/*.html").on('change', browserSync.reload);
});
gulp.task('scripts', function () {
        gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});
gulp.task('styles', function () {
        return gulp.src('./sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});
gulp.task('default', ['serve']);
