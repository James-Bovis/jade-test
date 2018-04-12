var gulp = require('gulp'),
    jade = require('gulp-jade');

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
  return gulp.src('src/templates/**/**.jade')
      .pipe(jade()) // pipe to jade plugin
      .pipe(gulp.dest('dist/')); // Output to dist
});
