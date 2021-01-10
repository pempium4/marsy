const gulp = require('gulp');
const gulpConcat = require('gulp-concat');
const gulpCleanCSS = require('gulp-clean-css');
const gulpUglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const gulpSass = require('gulp-sass');
const gulpSourceMaps = require('gulp-sourcemaps');

const gulpRename = require('gulp-rename');

gulp.task('del', () => {
    return del(['Build/*']);
});
gulp.task('styles', () =>{
    return gulp.src('./SCSS/**/*.scss')
        .pipe(gulpSourceMaps.init())
        .pipe(gulpSass().on('Error', gulpSass.logError))
        .pipe(gulpConcat('style.css'))
        .pipe(gulpCleanCSS())
        .pipe(gulpRename({
            suffix: '.min'
        }))
        .pipe(gulpSourceMaps.write('./'))
        .pipe(gulp.dest('./Build/'))
        .pipe(browserSync.stream());
});
gulp.task('scripts', () => {
    return gulp.src('./JS/**/*.js')
        .pipe(gulpConcat('main.js'))
        .pipe(gulpUglify({
            toplevel: true
        }))
        .pipe(gulpRename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./Build'))
        .pipe(browserSync.stream());
});
gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./SCSS/**/*.scss', gulp.series('styles'));
    gulp.watch('./JS/**/*.js', gulp.series('scripts'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});
gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts'), 'watch'));