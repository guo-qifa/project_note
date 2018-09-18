var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(gulp.dest('./src'))
        .pipe(connect.reload())
});

gulp.task('connect', function() {
  connect.server({
      livereload: true,
      port: 8888
  })
});
gulp.task('watch', function() {
  gulp.watch('index.html', ['html']);
  // ....
  
});
gulp.task('default', [ 'html','watch', 'connect']);