const mix = require('laravel-mix');


mix.js('src/script.js', 'js')
    // .sass('src/sass/style.scss', 'css')
    .disableSuccessNotifications();
