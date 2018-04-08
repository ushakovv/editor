/* eslint-disable no-console */
const gulp = require('gulp');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const minifyCss = require('gulp-minify-css');
const cleanCSS = require('gulp-clean-css');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const path = require('path');

const rootDir = process.cwd();

const sassDir = path.join(rootDir, 'src/modules/**/*.scss');

const cssDir = path.join(rootDir, 'htdocs/css/');
const jsBuildDir = path.join(rootDir, 'htdocs/app');

const AUTOPREFIXER_BROWSERS = [
    'last 3 versions',
    'ie >= 9',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

let onError = function (err) {
    notify().write(err);
    this.emit('end');
};

gulp.task('sass', () => {
    return gulp.src(sassDir)
        .pipe(plumber({errorHandler: onError}))
        .pipe(concat('common.min.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest(cssDir));
});

gulp.task('react', function () {
    return browserify({entries: './src/app/app.jsx', extensions: ['.jsx', '.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react', 'stage-0']})
        .bundle()
        .on('error', (err) => {
            return onError.call(this, err);
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest(jsBuildDir));
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "./htdocs"
        }
    });
});

gulp.task('watch', () => {
    gulp.watch(sassDir, ['sass']);
    gulp.watch(['./src/app/**/*.jsx', './src/app/**/*.js'], ['react']);
    gulp.watch('./htdocs/app/app.js').on('change', browserSync.reload);
});
gulp.task('build', ['react', 'sass']);
gulp.task('default', ['sass', 'react', 'watch', 'server']);