var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	gulp.src('src/js/*.js').pipe(concat('todo.js')).pipe(uglify()).pipe(gulp.dest('src/js/'))
});


gulp.task('style', function() {
	
});

gulp.task('images', function() {
	// tarea images
});


gulp.task('default', ['images', 'style', 'script']);



