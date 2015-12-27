var gulp = require('gulp');
var babel = require('gulp-babel');var sass = require('gulp-sass');

// sass tasks
gulp.task('sass', function () {
  gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

// es6 tasks
gulp.task('default', function() {
  return gulp.src('src/test.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});