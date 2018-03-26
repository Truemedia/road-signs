const gulp = require('gulp');
const exec = require('gulp-exec');
const fileinfo = require('gulp-fileinfo');

gulp.task('default', function() {
 return gulp.src('./src/eps/**/**/*.eps')
        .pipe( exec('inkscape <%= file.path %> -l <%= file.path %>.svg') )
        .pipe( fileinfo() );
});
