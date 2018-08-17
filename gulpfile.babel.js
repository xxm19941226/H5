/**
 * gulpfile.bable.js
 * https://github.com/gulpjs/gulp/tree/4.0
 * http://yqiyian.cn/2017/04/18/Gulp%20Plug-in%20summary/
 * http://www.cnblogs.com/shimily/articles/6598560.html
 * @type {Object}
 */

import gulp from 'gulp'
import ftp from 'gulp-sftp'
// import ftp from 'gulp-sftp'
import tinypng from 'gulp-tinypng-compress'
import changed from 'gulp-changed'
import jsoneditor from 'gulp-json-editor'
import imagemin from 'gulp-imagemin'
import config from './config/secret.js'
const path = {
    ftp: config.prod,
    dist: 'dist/',
    prefix: 'static',
    src: '/**/*',
    assets: './src/assets/',
    static: '/' + config.path.all + '/static/**/*',
    img: {
        src: '/static/img/*',
        dest: '/static/img/'
    },
    css: {
        src: '/static/css/*.css',
        dest: '/static/css/'
    }
}
/**
 * 编译代码，自动部署到服务器
 */
gulp.task('up:ftp', () => {
    console.log('########## 正在部署到 服务器', config.prod.remotePath)
    return gulp.src([path.dist + config.path.all + '/**/*', path.dist + '/*.html']).pipe(ftp({
        host: config.prod.host,
        user: config.prod.user,
        pass: config.prod.pass,
	    // port: config.prod.port,
        remotePath: config.prod.remotePath + config.path.all + '/'
    }))
    // var workDirectory = 'dist/';
    // return gulp.src( workDirectory + '/**' )
    //     .pipe(ftp({
    //         host: config.prod.host,
    //         user: config.prod.user,
    //         port: config.prod.port,
    //         pass: config.prod.pass,
    //         remotePath: config.prod.remotePath + config.path.all + '/'
    //     }));
})

/**
 * 图片压缩
 */
function imgTiny () {  // prod
    console.log('########## 开始优化图片 终极')
    return gulp.src('src/assets/img/**/*.{png,jpg,jpeg}')
	// .pipe(changed(path.assets + 'img_backs/'))
	.pipe(tinypng({key: config.tinypng.key, sigFile: 'images/.tinypng-sigs', summarize: true, log: true}))
	.pipe(gulp.dest(path.dist + config.path.all + '/static/img'))
}
function imgTinyWatch () {  //dev-watch
    console.log('########## 开始优化图片 终极')
    return gulp.src(path.assets + 'img-original/**/*.{png,jpg,jpeg}')
	.pipe(changed(path.assets + 'img/'))
	.pipe(tinypng({key: config.tinypng.key, sigFile: 'images/.tinypng-sigs', summarize: true, log: true})).on('error', (err) => {
    console.error('err', err.message)
})
	.pipe(gulp.dest(path.assets + 'img/'))
}
function imgMin () {  //dev
    console.log('########## 开始优化图片 初级')
    return gulp.src(path.dist + config.path.all + '/static/img/**/*.{png,jpg,jpeg}')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),  //隔行扫描gif进行渲染
            imagemin.jpegtran({progressive: true}), // 无损压缩jpg图片
            imagemin.optipng({optimizationLevel: 5}),  //默认：3  取值范围：0-7（优化等级）
            imagemin.svgo({plugins: [{removeViewBox: true}]}) //不要移除svg的viewbox属性
        ], {
            verbose: true  //日志输出
        }))
        .pipe(gulp.dest(path.dist + config.path.all + path.img.dest))
}

/*
 * 图片监控
 */
function watcher () {
    console.log('########## 监控原始图片')
    gulp.watch(path.assets + 'img/', imgTiny)
}

/**
 * 上传到生产服务器上
 */
gulp.task('img:tiny', gulp.series(imgTiny))
// gulp.task('img:min', gulp.series(imgMin))
gulp.task('watch', gulp.series(watcher))
gulp.task('build:up', gulp.series('up:ftp'))
gulp.task('build:cdn', gulp.series(imgTiny, 'up:ftp'))
