const { src, dest, watch , series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin'); // Minificar imagenes 
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const clean = require('gulp-clean');
const webp = require('gulp-webp');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*'
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('public/build/css') );
}


function javascript() {
    return src(paths.js)
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(dest('public/build/js'));
}

function img() {
    return src(paths.img)
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('public/build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
}

function versionWebp() {
    return src(paths.img)
        .pipe( webp() )
        .pipe(dest('public/build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
}


function watchArchivos() {
    watch( paths.scss, css );
    watch( paths.js, javascript );
    watch( paths.img, img );
    watch( paths.img, versionWebp );
}
  
exports.css = css;
exports.watchArchivos = watchArchivos;
exports.default = parallel(css, javascript,  img, versionWebp,  watchArchivos ); 