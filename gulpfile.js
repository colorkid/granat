var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var browserSync = require('browser-sync');

gulp.task('one', function () {
  return gulp.src('css/*one.styl')
	  .pipe(stylus({
      use: [autoprefixer('last 4 versions')]
    }))
    .pipe(gulp.dest('css'));
});

gulp.task( 'pug', function () {
  return gulp.src( 'pug/*.pug' )
  .pipe( pug() )
  .pipe( gulp.dest( '' ) );
});

gulp.task('watch', ['browserSync', 'one', 'pug'], function(){
  gulp.watch('css/*.styl', ['one']); 
  gulp.watch('pug/*.pug', ['pug']); 
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('css/one.css', browserSync.reload);
  gulp.watch('js/main.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync({
	 server: {
	 baseDir: ''
	 },
  })
});