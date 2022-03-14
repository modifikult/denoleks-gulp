const {src, dest, series, watch} = require('gulp'),
    del = require('del'),
    file_include = require('gulp-file-include'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    image_min = require('gulp-imagemin'),
    uglify = require('gulp-uglify-es').default,
    browserSync = require('browser-sync').create();

function browserSyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: 'dist/',
            index: 'index.html'
        },
        port: 3000
    })
    cb();
}

function browserSyncReload(cb) {
    browserSync.reload()
    cb();
}

function html() {
    return src('src/*.html')
        .pipe(file_include())
        .pipe(dest('dist/'))
}

function scss() {
    return src('src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(dest('dist/css/'))
        .pipe(csso())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/css'))
}

function js() {
    return src('src/js/*.js')
        .pipe(dest('dist/js/'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/js/'))
}

function img() {
    return src('src/img/**/*.{svg,png,jpg}')
        .pipe(image_min({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(dest('dist/img/'))
}

function clean() {
    return del('./dist/')
}

function watchFiles() {
    watch('src/*.html', series(html, browserSyncReload))
    watch('src/**/*.scss', series(scss, browserSyncReload))
    watch('src/**/*.js', series(js, browserSyncReload))
    watch('img/**/*.*', series(img, browserSyncReload))
}

exports.default = series(
    clean,
    html,
    scss,
    js,
    img,
    browserSyncServe,
    watchFiles,
)