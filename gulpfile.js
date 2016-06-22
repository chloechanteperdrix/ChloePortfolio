var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//var compress = require('gulp-yuicompressor');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'compress-css', 'compress-js'], function () {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false
    });

    gulp.watch("./styles/sass/**/*.scss", ['sass']);
    gulp.watch("./styles/css/**/*.css", ['compress-css']);
    gulp.watch("./js/*.js", ['compress-js']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./styles/sass/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("./styles/css/"))
        .pipe(browserSync.stream());
});

gulp.task('compress-css', function () {
    gulp.src('./styles/css/main.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('compress-js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('imagemin', function () {
    return gulp.src('img/**/*.png')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('img-min/'));
});

gulp.task('default', ['serve']);