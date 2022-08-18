const gulp = require("gulp");
const zip = require("gulp-zip");
const concat = require("gulp-concat");

gulp.task('zip', function () {
  return gulp.src(['build/static*/**', 'build/index.html'])
    .pipe(zip('build-' + new Date().toISOString().slice(0, 10) + '.zip'))
    .pipe(gulp.dest('export'));
});

gulp.task("concat", function () {
  return gulp
    .src(["build/static/js/*.js"])
    .pipe(concat("bubbleConcat.js"))
    .pipe(gulp.dest("bubbleExport"));
});