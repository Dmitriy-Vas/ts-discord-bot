const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const gulpTSLint = require('gulp-tslint').default;
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpNodemon = require('gulp-nodemon');
const tsLint = require('tslint');
const del = require('del');
const path = require('path');

const project = gulpTS.createProject('tsconfig.json');
const typeCheck = tsLint.Linter.createProgram('tsconfig.json');

gulp.task('default', ['start']);

gulp.task('lint', () => {
	return gulp.src('./src/**/*.ts')
		.pipe(gulpTSLint({
			configuration: 'tslint.json',
			formatter: 'verbose',
			program: typeCheck
		}))
		.pipe(gulpTSLint.report())
});

gulp.task('build', ['lint'], () => {
	del.sync(['./build/**/*.*']);
	gulp.src('./src/**/*.json')
		.pipe(gulp.dest('build/'));
	const tsCompile = gulp.src('./src/**/*.ts')
		.pipe(gulpSourcemaps.init())
		.pipe(project());
	return tsCompile.js
		.pipe(gulpSourcemaps.write({
			sourceRoot: file => path.relative(path.join(file.cwd, file.path),
				file.base)
		}))
		.pipe(gulp.dest('build/'))
});

gulp.task('watch', ['build'], function() {
	gulp.watch('./src/**/*.ts', ['build'])
});

gulp.task('start', ['build'], function() {
	return gulpNodemon({
		script: './index.js',
		watch: './src'
	})
});

gulp.task('serve', ['watch'], function() {
	return gulpNodemon({
		script: './index.js',
		watch: './src/'
	})
});
