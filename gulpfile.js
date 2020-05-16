const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

function html() {
  return gulp.src('./src/pages/index.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
}

function styles() {
  return gulp.src('./src/assets/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/css'));
}

function fonts() {
  return gulp.src('./src/assets/scss/fonts.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/css'));
}

function scripts() {
  return browserify('./src/assets/js/app.js')
    .transform('babelify', {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/js'));
}

function watch() {
  gulp.watch('./src/pages/**/*.html', html)
  gulp.watch('./src/assets/scss/**/*.scss', styles);
  gulp.watch('./src/assets/js/**/*.js', scripts);
}

const build = gulp.series(html, styles, scripts, watch);
gulp.task('default', build);

exports.html = html;
exports.styles = styles;
exports.fonts = fonts;
exports.scripts = scripts;
