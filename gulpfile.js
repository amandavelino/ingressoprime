var gulp 		= require("gulp"),
	gutil 		= require("gulp-util"),
	concat 		= require("gulp-concat"),
	compass 	= require("gulp-compass"),
	uglify 		= require("gulp-uglify");

//sources
var jsSrc 	= [
				'_/components/scripts/jquery-1.11.3.js', 
			   	'_/components/scripts/smoothscroll.js',
			   	'_/components/scripts/pace.min.js',
			   	'_/components/scripts/wow.min.js',
			   	'_/components/scripts/owl.carousel.min.js',
			   	'_/components/scripts/isotope_v3.0.1.js',
			   	'_/components/scripts/script.js'
			   ],
	sassSrc = ['_/components/sass/styles.scss'];

gulp.task('js', function() {
	gulp.src(jsSrc)
		.pipe(concat('all.js'))
		//.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest('_/js'))
});

gulp.task('compass', function() {
	gulp.src(sassSrc)
		.pipe(compass({
			comments: true,
			sourcemap: true,
			css: '_/css',
			sass: '_/components/sass',
			image: '_/imgs',
			style: 'expanded', //nested, expanded, compact, compressed
			require: ['susy','breakpoint']
		})
		.on('error', gutil.log))
		.pipe(gulp.dest('_/css'))
});

gulp.task('watch', function() {
	gulp.watch(jsSrc, ['js']);
	gulp.watch('_/components/sass/**/*.scss', ['compass']);
});

gulp.task('default', ['js','compass','watch']);