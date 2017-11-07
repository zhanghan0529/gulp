var gulp = require("gulp");


var cssnano = require("gulp-cssnano"),//css压缩
    concat = require("gulp-concat"),//合并文件
    uglify = require("gulp-uglify"),//压缩js文件    
    // rename = require("gulp-rename"),//重命名
    clean = require("gulp-clean"),//清空文件
    imagemin = require("gulp-imagemin");//压缩图片
    jshint = require("gulp-jshint");//js规范检查
    minhtml = require("gulp-minhtml");//压缩html




gulp.task("bulid:css",function(){
    gulp.src("*.css")//找到某路径下的css文件
    .pipe(concat("index-merge.css"))//合并需要合并的css文件
    .pipe(cssnano())//压缩合并后的css文件
    .pipe(gulp.dest("dist/css/"));//输出
});

gulp.task("bulid:js",function(){
    gulp.src("src/js/*.js")
    .pipe(jshint())//检查格式
    .pipe(concat("merge.js"))//合并js文件
    // .pipe(rename({
    //     suffix: '.min'
    // }))
    .pipe(uglify())//压缩
    .pipe(gulp.dest("dist/js/"));
});

gulp.task("bulid:img",function(){
    gulp.src("pic/*")
      .pipe(imagemin())
      .pipe(gulp.dest("dist/img/"));
});

// gulp.task("clear",function(){
//     gulp.src("dist/*",{read: false})
//     .pipe(clean());
// });


gulp.task("default",["bulid:css","bulid:img","bulid:js"])