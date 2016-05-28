var gulp = require('gulp');

var assetsDev = 'client/assets/';
var assetsProd = 'client/src/';

var appDev = 'client/dev/';
var appProd = 'client/app/';

var browserSync = require('browser-sync').create();

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
	return gulp.src(assetsDev + 'scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(postcss([precss, autoprefixer, cssnano]))
		.pipe(sourcemaps.write())
		.pipe(ext_replace('.css'))
		.pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-ts', function () {
	return gulp.src(appDev + '**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(typescript(tsProject))
		.pipe(sourcemaps.write())
		//.pipe(jsuglify())
		.pipe(gulp.dest(appProd));
});

gulp.task('build-img', function () {
	return gulp.src(assetsDev + 'img/**/*')
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('build-html', function () {
	return gulp.src(appDev + '**/*.html')
		.pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
	gulp.watch(appDev + '**/*.ts', ['build-ts']);
	gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
	gulp.watch(assetsDev + 'img/*', ['build-img']);
});

gulp.task('browser-sync', function() {
	return browserSync.init(null, {
		proxy: "http://localhost:8085",
		files: [assetsProd + '**/*.css', appProd + '*', appDev + "**/*.html"],
		port: 7000,
		open: false
	});
});

gulp.task('default', ['browser-sync', 'watch', 'build-ts', 'build-css', 'build-img']);