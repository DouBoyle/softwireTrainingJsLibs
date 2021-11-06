var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require("gulp-babel");
// var merge = require('merge-stream');
const mocha = require('gulp-mocha');

const babelReg = require('babel-register');

gulp.task('build', function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('dev', gulp.series('build', function() {
    return nodemon({
        script: 'dist/index.js',
        ext: 'js',
        ignore: ['dist/'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    });
}));

 gulp.task('test', gulp.series('build', function() {
     return gulp.src("tests/**/*.js")
         .pipe(mocha({ require: [ 'babel-core/register', ] }))
 }));

gulp.task('retest', gulp.series('build', function() {
    return nodemon({
        script: 'dist/index.js',
        ext: 'js',
        ignore: ['dist/'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['test']
    });
   }));