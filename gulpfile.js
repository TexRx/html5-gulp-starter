var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

    gulp.task('styles', function() {
      return gulp.src('styles/sass/main.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('styles'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('styles'))
        .pipe(livereload(server));
    });

    gulp.task('clean', function() {
      return gulp.src(['styles/**/*.css'], {read: false})
        .pipe(clean());
    });

    gulp.task('default', ['clean'], function() {
      gulp.start('styles');
    });

    gulp.task('watch', function() {
      // listen on port 35729
      server.listen(35729, function(err) {
        if ( err ) {
          return console.log(err);
        };

        // watch .scss files
        gulp.watch('styles/sass/**/*.scss', ['styles']);

      });
    });
