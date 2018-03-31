const gulp = require('gulp');
const exec = require('gulp-exec');
const fileinfo = require('gulp-fileinfo');
const imagemin = require('gulp-imagemin');
const folderIndex = require('gulp-folder-index');

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

gulp.task('files', function() {
    gulp.src('./dest/**/*.svg')
        .pipe( folderIndex() )
        .pipe( gulp.dest('./') );
});
