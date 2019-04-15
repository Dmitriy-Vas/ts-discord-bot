const gulp = require("gulp");
const gulpTS = require("gulp-typescript");
const gulpTSLint = require("gulp-tslint").default;
const gulpSourcemaps = require("gulp-sourcemaps");
const gulpNodemon = require("gulp-nodemon");
const tsLint = require("tslint");
const del = require("del");
const path = require("path");

const project = gulpTS.createProject("tsconfig.json");
const typeCheck = tsLint.Linter.createProgram("tsconfig.json");

gulp.task("lint", gulp.series(function () {
    return gulp.src("./src/**/*.ts")
		.pipe(gulpTSLint({
            configuration: "tslint.json",
            formatter: "verbose",
            program: typeCheck,
		}))
        .pipe(gulpTSLint.report());
}));

gulp.task("clean", gulp.series(function () {
    return del(["./build/**/*.*"]);
}));

gulp.task("build", gulp.series("lint", "clean", function (done) {
    gulp.src("./src/**/*.json")
        .pipe(gulp.dest("build/"));
    const tsCompile = gulp.src("./src/**/*.ts")
		.pipe(gulpSourcemaps.init())
		.pipe(project());
    tsCompile.js
		.pipe(gulpSourcemaps.write({
			sourceRoot: file => path.relative(path.join(file.cwd, file.path),
                file.base),
		}))
        .pipe(gulp.dest("build/"));
    done();
}));

gulp.task("watch", gulp.series("build", function () {
    return gulp.watch(".", ["build"]);
}));

gulp.task("serve", gulp.series("watch", function () {
	return gulpNodemon({
        script: "./index.js",
        watch: "./",
    });
}));

gulp.task("start", gulp.series("build", function (done) {
    gulpNodemon({
        script: "./index.js",
        watch: "./",
    });
    done();
}));

gulp.task("default", gulp.series("start"));
