var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');

gulp.task('build', function() {
	return (function(){
				gulp.src('./src/*.js')
					.pipe(concat('componenteLocalizacion.js'))
					.pipe(gulp.dest('./build/dist'))
					.pipe(concat('componenteLocalizacion.min.js'))
					.pipe(uglify())
					.pipe(gulp.dest('./build/dist'));
				gulp.src('./src/template.html')
					.pipe(gulp.dest('./build/dist'));
		})();
});

gulp.task('dev', function() {
	return (function(){
			gulp.src('./src/*.js')
				.pipe(concat('componenteLocalizacion.js'))
				.pipe(gulp.dest('./build/dev'));
			gulp.src('./src/template.html')
				.pipe(gulp.dest('./build/dev'));
	})();
});