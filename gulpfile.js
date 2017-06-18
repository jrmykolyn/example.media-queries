// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const PathMap = require( 'sfco-path-map' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const PATHS = new PathMap( {
	src: './src',
	stylesSrc: '{{src}}/styles',
	stylesDest: './css'
} );

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
gulp.task( 'default', [ 'styles', 'watch' ] );

gulp.task( 'styles', [ 'styles:sass' ] );

gulp.task( 'styles:sass', function() {
	return gulp.src( `${PATHS.stylesSrc}/styles.scss` )
		.pipe( sass( {
			outputStyle: 'expanded'
		} ) )
		.pipe( gulp.dest( PATHS.stylesDest ) );
} );

gulp.task( 'watch', function() {
	return gulp.watch( `${PATHS.stylesSrc}/**/*.scss`, [ 'styles:sass' ] );
} );
