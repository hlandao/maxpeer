var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

gulp.task('contentScript', function() {
    return gulp.src(["vendor/peer5/api.js",
        "bower_components/underscore/underscore.js",
        "bower_components/zepto/zepto.js",
        "script1.js"])
        .pipe(concat('script1.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('copy', function() {
    return gulp.src(['background.html','manifest.json','contentScriptInjector.js'])
        .pipe(gulp.dest('./dist/'))
});


gulp.task('build', ['contentScript','copy']);



gulp.task('default', ['build'], function () {
    gulp.watch('*.js', ['contentScript','copy']);
    gulp.watch('*.html', ['contentScript','copy']);
    gulp.watch('*.json', ['contentScript','copy']);
});

