const path = require("path");
const gulp = require("gulp");
const less = require("gulp-less");

const DIR = {
    less: path.resolve(__dirname, "./packages/**/*.less"),
    buildSrc: [
      path.resolve(__dirname, "./packages/**/styles.less"),
      path.resolve(__dirname, "./packages/**/index.less")
    ],
    lib: path.resolve(__dirname, "./lib"),
    es: path.resolve(__dirname, "./es"),
    dist: path.resolve(__dirname, "./dist")
};
// gulp.task("copyLess", () => {
//     return gulp
//       .src(DIR.less)
//       .pipe(gulp.dest(DIR.lib))
//       .pipe(gulp.dest(DIR.es));
// });

function copyLess(){
    console.log('dir.less',DIR.less);
    console.log('dir.lib', DIR.lib);
    return gulp
      .src(DIR.less)
      .pipe(less())
      .pipe(gulp.dest(DIR.lib))
      .pipe(gulp.dest(DIR.es));
}
// gulp.task("build", gulp.series('copyLess', function(){
//     return console.log(123)
// }));
const build = gulp.series(copyLess);
exports.default = build;
