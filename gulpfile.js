const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");
// Define tasks after requiring dependencies
function styles() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src(["./sass/**/*.scss", "./sass/**/*.sass"])
            //.src('./sass/almbb.scss')
            // Use sass with the files found, and log any errors
            .pipe(sass())
            
            .on("error", sass.logError)
            
            .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
            .pipe(cleancss({ level: { 1: { specialComments: 0 } } , format: 'beautify' })) // Минифицируем стили

            // What is the destination for the compiled file?
            .pipe(gulp.dest("css"))
    );
}

function watch() {
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch(["./sass/**/*.scss", "./sass/**/*.sass"], styles)
}

// Don't forget to expose the task!
exports.default = watch
