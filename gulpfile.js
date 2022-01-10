const rollupStream = require("@rollup/stream");
const source = require("vinyl-source-stream");
const { src, series, dest } = require("gulp");

/*
// Implementation as shown in documentation (provided for reference)
// https://www.npmjs.com/package/@rollup/stream#:~:text=to%20%40rollup/stream.-,Usage%20with%20Gulp,-Using%20Gulp%20requires
gulp.task("rollup", () => {
  const options = { input: "src/index.js" };
  return rollupStream(options)
    .pipe(source("bundle.js"))
    .pipe(terser({ keep_fnames: true, mangle: false }))
    .pipe(gulp.dest("dist"));
});
*/

// My implementation
function bundle() {
  const options = { input: "src/main.js" };
  return rollupStream(options).pipe(source("bundle.js")).pipe(dest("dist"));
}
exports.default = series(bundle);
