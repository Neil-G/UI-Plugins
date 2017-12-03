const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('build-js', () => {
	gulp.src('src_js/**/*.js')
	    .pipe(babel({
	        presets: ['env']
	    }))
	    .pipe(gulp.dest('build_js'))
})


gulp.task('default', function() {
  	gulp.watch('./src_js/**/*.js', ['build-js'])
});