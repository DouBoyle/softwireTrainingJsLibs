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

gulp.task('buildtest', gulp.series('build', function() {
    return gulp.src("tests/**/*.js")
        .pipe(babel())
     //   .pipe(mocha())
        .pipe(gulp.dest("dist"));
}));

// THIS WORKS TO JUST RUN BABLED CODE/TEST ON THEIR OWN
gulp.task('runtest', gulp.series('build', function() {
    /* return nodemon({
         script: 'dist/test.js',
         ext: 'js',
         ignore: ['dist/'],
         env: { 'NODE_ENV': 'development' },
         tasks: ['buildtest']
     });*/
     return gulp.src("dist/**/*.js")
         .pipe(mocha())
 }));
 
 // RUNS TESTS, ONLY NEED TO BUILD SRC
 gulp.task('autotest', gulp.series('build', function() {
    /* return nodemon({
         script: 'dist/test.js',
         ext: 'js',
         ignore: ['dist/'],
         env: { 'NODE_ENV': 'development' },
         tasks: ['buildtest']
     });*/
     return gulp.src("tests/**/*.js")
         .pipe(mocha({ require: [ 'babel-core/register', ] }))
 }));

 // TODO: Only runs once (and not initially)
 gulp.task('notest', gulp.series('build', function() {
    return gulp.watch('tests/**/*.js', gulp.series(['autotest']));
 }));

gulp.task('test', gulp.series('build', function() {
    return nodemon({
         script: 'npm run start:test',
         ext: 'js',
         ignore: ['dist/'],
         env: { 'NODE_ENV': 'development' },
         tasks: ['buildtest', 'runtest']
     });
}));