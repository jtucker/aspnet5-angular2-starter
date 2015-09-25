/*


*/
var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    tsstylish = require("gulp-tslint-stylish");


gulp.task("lint", function () {
    return gulp.src("wwwroot/app/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report("verbose", {
            emitError: true
        }));
});

gulp.task("default", function () {
    // place code for your default task here
});