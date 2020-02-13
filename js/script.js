$(document).ready(function () {

    /**
     * Увеличение изображений
     */
    $('.fancybox').fancybox({
        helpers : {
            overlay: {
                css: {'background-color': 'rgba(13, 12, 12, 0.84)'}
            }
        }
    });


    /**
     * Подсветка синтаксиса
     */
    hljs.configure({tabReplace: '   '});
    hljs.initHighlighting();


    /**
     * Модалка
     */
    if (getCookie('readModal') === undefined) {
        $('#modal-container').css('display', 'table');
    }
    $('#modal-container').click(function(){
        setCookie('readModal', true, {secure: true});
        $(this).addClass('out');
        $('#modal-container').remove();
    });



    /**
     *
     * @param name
     * @returns {any}
     */
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    /**
     *
     * @param name
     * @param value
     * @param options
     */
    function setCookie(name, value, options = {}) {

        options = {
            path: '/',
            expires: 'Tue, 30 Jan 2030 03:03:03 GMT'
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
});







































// $(document).ready(function () {
//
//
//     $('#parseForm').submit(function (e) {
//
//         // Анимация
//         // var parseRobots = $('.parse-robots');
//         // parseRobots.css('display', 'block');
//
//
//         // Отправляемый сайт
//         var data = $('#parseSite');
//
//         var routes;
//         e.preventDefault();
//         $.ajax({
//             url: '/site/parse',
//             type: 'POST',
//             data: data,
//             success: function(res){
//                 // routes = $.parseJSON(res);
//                 parseRobots.text('Done!');
//                 // $.each(routes, function(index, element) {
//                 //     $('.parse-robots').append($('<div>', {
//                 //         text: element
//                 //     }));
//                 // });
//                 $('.parse-sitemap').css('display', 'block');
//
//                 // Работает,но выводить не надо?! Запись в базу?!
//             },
//             error: function(){
//                 console.log('I\'ll give you another try!');
//             }
//         });
//         return false;
//     });
//
//
//     function parseRobots() {
//         // Анимация
//         var parseRobots = $('.parse-robots');
//         parseRobots.css('display', 'block');
//
//
//         // Отправляемый сайт
//         // var data = $('#parseSite');
//
//         var routes;
//         // e.preventDefault();
//         $.ajax({
//             url: '/site/parse',
//             type: 'POST',
//             data: data,
//             success: function(res){
//                 // routes = $.parseJSON(res);
//                 parseRobots.text('Done!');
//                 // $.each(routes, function(index, element) {
//                 //     $('.parse-robots').append($('<div>', {
//                 //         text: element
//                 //     }));
//                 // });
//                 $('.parse-sitemap').css('display', 'block');
//
//                 // Работает,но выводить не надо?! Запись в базу?!
//             },
//             error: function(){
//                 console.log('I\'ll give you another try!');
//             }
//         });
//         return false;
//     }
//
// });