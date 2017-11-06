var gulp = require('gulp');
var sass = require('gulp-sass');
var bS = require('browser-sync').create();
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var minCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve',function(){
    bS.init({
        server: './'
    });
    gulp.watch('./src/sass/*.sass', ['sass']);
    gulp.watch('./src/js/*.js', ['javascript']);
    gulp.watch('./*.html').on('change',bS.reload);
});

gulp.task('javascript',function(){
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
        .pipe(bS.stream());
});

gulp.task('sass',function(){
    gulp.src('./src/sass/*.sass')
        .pipe(sass().on('error',sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(minCSS())
        .pipe(gulp.dest('dist/'))
        .pipe(bS.stream());
});

gulp.task('default',['serve']);