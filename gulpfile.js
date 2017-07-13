/*global require*/
/*jshint esversion: 6*/
var bodyParser = require('body-parser'),
    browserSync = require('browser-sync').create(),
    gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    config = {
        source: './src/',
        dist: './public/',
        modules: './node_modules/'
    },
    paths = {
        assets: 'assets/',
        html: '/**/*.html',
        jpg: 'img/**/*.jpg',
        png: 'img/**/*.png',
        fonts: 'fonts/**/*.ttf',
        SASS: 'scss/**/*.scss',
        mainSASS: 'scss/main.scss',
        js: 'js/app.js',
        bootstrap: 'bootstrap/dist/',
        carousel: 'owl.carousel/dist/',
        pdf: 'img/**/*.pdf'
    },
    sources = {
        assets: config.source + paths.assets,
        html: config.source + paths.html,
        jpg: config.source + paths.assets + paths.jpg,
        png: config.source + paths.assets + paths.png,
        fonts: config.source + paths.assets + paths.fonts,
        SASS: config.source + paths.assets + paths.SASS,
        mainSASS: config.source + paths.assets + paths.mainSASS,
        js: config.source + paths.assets + paths.js,
        bootstrapCSS: config.modules + paths.bootstrap + 'css/bootstrap.min.css',
        bootstrapJS: config.modules + paths.bootstrap + 'js/bootstrap.min.js',
        carouselCSS: config.modules + paths.carousel + 'assets/*.css',
        carouselJS: config.modules + paths.carousel + '**/*.js',
        pdf: config.source + paths.assets + paths.pdf
    };

gulp.task('html', () => {
    gulp.src([sources.html, sources.pdf])
        .pipe(gulp.dest(config.dist));
});

gulp.task('images', () => {
    gulp.src([sources.jpg, sources.png])
        .pipe(gulp.dest(config.dist + 'img'));
});

gulp.task('fonts', () => {
    gulp.src(sources.fonts)
        .pipe(gulp.dest(config.dist + 'fonts'));
});

gulp.task('sass', () => {
    gulp.src([sources.bootstrapCSS, sources.carouselCSS, sources.mainSASS])
        .pipe(sass({
            outputStyle: 'compressed'
        }).on("error", sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.dist));
});


gulp.task('js', () => {
    gulp.src([sources.js, sources.bootstrapJS, sources.carouselJS])
        .pipe(concat(sources.js))
        .pipe(browserify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('img-watch', ['images'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('fonts-watch', ['fonts'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('sass-watch', ['sass'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['js'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('html-watch', ['html'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('serve', () => {
    /*browserSync.init({
        port: 3005,
        proxy: {
            target: 'localhost:3000',
            ws: true
        }
    });*/
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });
    gulp.watch(sources.html, ['html-watch']);
    gulp.watch([sources.SASS], ['sass-watch']);
    gulp.watch([sources.jpg, sources.png], ['img-watch']);
    gulp.watch([sources.fonts], ['fonts-watch']);
    gulp.watch(sources.js, ['js-watch']);
});