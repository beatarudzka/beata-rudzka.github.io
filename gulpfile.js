const gulp = require('gulp')

const sass = require('gulp-sass')
const minifyCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const changed = require('gulp-changed')


const SCSS_SRC = './src/Assets/scss/**/*.scss'
const SCSS_DEST = './src/Assets/css'


function scssTask() {
  return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST))
}

function watchTask() {
  gulp.watch(
    [SCSS_SRC],
    gulp.parallel(scssTask)
  )
}

exports.default = gulp.series(
  gulp.parallel(scssTask),
  watchTask)








































































































