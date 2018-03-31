const gulp = require('gulp');
const exec = require('gulp-exec');
const fileinfo = require('gulp-fileinfo');
const imagemin = require('gulp-imagemin');

gulp.task('convert', function() {
 return gulp.src('./src/eps/**/**/*.eps')
        .pipe( exec('inkscape <%= file.path %> -l <%= file.path %>.svg') )
        .pipe( fileinfo() );
});

gulp.task('minify', function() {
    return gulp.src('./src/eps/**/**/*.svg')
           .pipe( imagemin() )
           .pipe( gulp.dest('./dest') );
});
