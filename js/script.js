$(document).ready(function () {
    $('.fancybox').fancybox({
        helpers : {
            overlay: {
                css: {'background-color': 'rgba(13, 12, 12, 0.84)'}
            }
        }
    });

    hljs.configure({tabReplace: '   '});
    hljs.initHighlighting();
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