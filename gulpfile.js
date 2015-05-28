'use strict'

var gulp = require('gulp')
var uglify = require('gulp-uglify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var browserify = require('browserify')

gulp.task('browserify', function(){
    return browserify('./static/app/scripts/app')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./static/dist/js/'))
})

gulp.task('watch', function(){
    gulp.watch('./static/app/scripts/*.js')
    return;
})

gulp.task('build', function(){
    gulp.task(['browserify'])
    return
})
