var gulp = require('gulp');

var connect = require('gulp-connect');
// 创建服务器插件
var concat = require('gulp-concat');
// 合并文件的插件
var uglify = require('gulp-uglify');
// 合并js文件
var rename = require('gulp-rename');
// 重命名文件
var minifyCSS = require('gulp-minify-css');
// 最小化css文件
var imagemin = require('gulp-imagemin');
// 优化图片
var pngquant = require('imagemin-pngquant');
// 深度压缩图片



gulp.task('htmls', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('images', function () {
  return gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('data', function () {
  return gulp.src('src/data/*.json')
    .pipe(gulp.dest('dist/data'));
})

gulp.task('watch', ['htmls', 'images', 'css', 'scripts', 'data'], function () {
  gulp.watch('src/*.html', ['htmls']);
  gulp.watch('src/img/*', ['images']);
  gulp.watch('src/css/*.css', ['css']);
  gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('server', function () {
  connect.server({
    root: 'dist',
    livereload: 'true'
  })
});

gulp.task('default', ['server', 'watch']);
