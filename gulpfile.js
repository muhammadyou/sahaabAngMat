var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyhtml = require('gulp-minify-html'),
    autoprefixer  = require('gulp-autoprefixer'),
    liveReload = require('gulp-connect'),  // it auto loads the page without refresh when the code changes
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css');



gulp.task('HTML' , function(){
    gulp.src(['development/index.html'])
        .pipe(minifyhtml())
        .pipe(gulp.dest(''))
        .pipe(liveReload.reload())

})

gulp.task('templates' , function(){
    gulp.src(['development/templates/*'])
        .pipe(minifyhtml())
        .pipe(gulp.dest('templates/'))
        .pipe(liveReload.reload())

})

gulp.task('CSS', function(){
    gulp.src(['development/css/*.css'])    // get all js files
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/'))
        .pipe(liveReload.reload())

})


gulp.task('JS', function(){
    gulp.src(['development/js/*.js'])    // get all js files
        .pipe(concat('app.js'))// put all js files in one script.js, automatically creates script.js
        .on('error' , console.error.bind(console))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/'))  // location
        .pipe(liveReload.reload())


})

gulp.task('images', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
})


gulp.task('watch' , function(){  // run gulp watchJS and then change any js file, the change will be added
    gulp.watch(['development/js/*.js'], ['JS']); // if any js file changed, run JS task
    gulp.watch(['development/css/*.css'], ['CSS']);  // watch for css files
    gulp.watch(['development/index.html'], ['HTML']);
    gulp.watch(['development/templates/*.html'], ['templates']);
})

gulp.task('liveReload', function(){
    liveReload.server({   // creates the server
        root : '',
        port: '8888',
        livereload: true

    });
})

gulp.task('default', ['JS', 'HTML', 'CSS', 'templates', 'images', 'liveReload', 'watch']);  // loads all the task by just running 'gulp' in node
