var gulp = require('gulp');
var bower = require('gulp-bower');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var sass = require('gulp-ruby-sass');
var minify = require('gulp-minify-css');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

// ===============================================
//               index & views
// ===============================================


// master task to run them sequentially
gulp.task('views-master', function(callback) {
  runSequence('kill-views',
              ['views', 'index'],
              callback);
});


// cleans views to get rid of deleted views on copy
gulp.task('kill-views', function() {
  return gulp.src(['./public/templates', './public/*.html'], { read: false }) 
    .pipe(rimraf());
});


gulp.task('views', function(){
  return gulp.src('./views/templates/**/*.html')    
    .pipe(gulp.dest('./public/templates'));
});


// Moves index to public folder at top level
gulp.task('index', function(){
  return gulp.src('./views/index.html')    
    .pipe(gulp.dest('./public'));
});






// ===============================================
//        sass & vanilla.js
// ===============================================


// master task to run them sequentially
gulp.task('assets-master', function(callback) {
  runSequence('kill-assets',
              'sass', 
              'minify-css',
              callback);
});


gulp.task('kill-assets', function() {
  return gulp.src(['./public/app/css','./public/app/js'], { read: false }) 
    .pipe(rimraf());
});


// Uses the Ruby SASS library to allow for extending multiple classes
// less performant than gulp-SASS, but the functionality is much 
// better. Multiple class extension key component of grid based design.
gulp.task('sass', function () {
    return sass('./assets/stylesheets/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('./public/css'));
});


// Standard minification of css
gulp.task('minify-css', function(){
  return gulp.src('./public/css/*.css')
    .pipe(minify({keepBreaks:true}))
    .pipe(gulp.dest('./public/css/'));
});




// ============================================
//       public Angular Application
// ============================================


gulp.task('build-app', function(callback){
  runSequence('kill-app','annotate','compile-angular','kill-stage', callback);
});


// kills angular js
gulp.task('kill-app', function() {
  return gulp.src('./public/app/*.js', { read: false }) 
    .pipe(rimraf());
});


// kills angular js
gulp.task('kill-stage', function() {
  return gulp.src('./public/staging', { read: false }) 
    .pipe(rimraf());
});


// annotates angular/moves to staging area
gulp.task('annotate', function(){

  return gulp.src('./src/**/**/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./public/staging'));
});


// Puts Angular in a master minified file
gulp.task('compile-angular', function(){

  var src = {
    app: './public/staging/app/app.js',
    routes: './public/staging/app/app-routes.js',
    cntrl:  './public/staging/app/remoteControl.js',
    dir: './public/staging/directives/nav-slider.js',
    srvc: './public/staging/services/*.js'
  };   
 
  return gulp.src([src.app, src.routes, src.cntrl, src.dir, src.srvc])
    
    .pipe(concat('application.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/app'));
});







// ========================================
//            Watch Tasks
// ========================================

gulp.task('watch', function(){

  // watch for any updates to a SCSS file
  gulp.watch(['./assets/**/**/**/*.*'],['assets-master']);

  // watch for updates to a .html file
  gulp.watch(['./views/templates/*.html','./views/*.html'],['views-master']);

  // watch for updates to angular app
  gulp.watch(['./src/app/**/*.js','./src/directives/*.js'], ['build-app']);

});


gulp.task('default',['build-app','views-master','assets-master', 'watch']);


// ==========================================
//           Manual Tasks
// ==========================================

// move images over

// move fonts over














































































// Breathing Room