$(document).ready(function () {

    $('#parseForm').submit(function (e) {
        e.preventDefault();
        var loadAnimate = $('.parse-robots');
        var currentTarget = $('.parse-robots b');
        var progressBar = $('#progress-bar');
        var progressLine = $('#progress-line');


        // Отправляемый сайт. Проверить на пустоту и провести валидейшн
        var data = $('#parseSite');

        loadAnimate.css('display', 'block');
        progressBar.css('display', 'block');

        // Добавить/проверить Catch
        // Не работает после Catch

        parseRobots(data)                                       // Парсит robots.txt
            .then(function (response) {
                currentTarget.text('Search forgotten labels');
                progressLine.css('width', '10%');
            })
            .catch(function (err) {
                console.log(err);
            })               // Парсит комментарии
            .then(function () {
                return parseComments(data);
            })
            .then(function (response) {
                currentTarget.text('Parse all site links');
                progressLine.css('width', '20%');
            })           // Парсит ссылки с доменом сайта
            .then(function () {
                return parseLinks(data);
            })
            .then(function (response) {
                currentTarget.text('Detect site CMS/Framework');
                progressLine.css('width', '35%');
            })           // Парсит cms сайта
            .then(function () {
                return parseCms(data);
            })
            .then(function (response) {
                currentTarget.text('Check site malware/risk');
                progressLine.css('width', '55%');
            })           // Проверяет google malware
            .then(function () {
                return parseMalware(data);
            })
            .then(function (response) {
                currentTarget.text('Check site mails');
                progressLine.css('width', '55%');
            })           // Парсит mailto:
            .then(function () {
                return parseMails(data);
            })
            .then(function (response) {
                currentTarget.text('Check repositories');
                progressLine.css('width', '65%');
            })           // Ищет репозитории по домену
            .then(function () {
                return parseGit(data);
            })
            .then(function (response) {
                currentTarget.text('Search hidden inputs');
                progressLine.css('width', '85%');
            })           // Парсит input:hidden
            .then(function () {
                return parseInputs(data);
            })
            .then(function (response) {
                currentTarget.text('Done!');
                loadAnimate.find('span').css('display', 'none');
                progressLine.css('width', '100%');
                progressLine.css('animation', 'none');
            });

    });

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseRobots(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/robots',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseComments(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/comments',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseLinks(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/links',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseCms(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/cms',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseMalware(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/malware',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseMails(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/mails',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                    console.log(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseGit(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/git',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                    console.log(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    function parseInputs(data) {
        return new Promise(function(resolve, reject) {

            $.ajax({
                url: '/site/inputs',
                type: 'POST',
                data: data,
                success: function(res){
                    resolve(res);
                    console.log(res);
                },
                error: function(res){
                    reject(res);
                }
            });
        });
    }

    function parseSitemap(data) {
        var loadSitemap = $('.parse-sitemap');
        loadSitemap.css('display', 'block');

    }

    $(document).ready(function() {
        $('.fancybox').fancybox({
            helpers : {
                overlay: {
                    css: {'background-color': 'rgba(13, 12, 12, 0.84)'}
                }
            }
        });
        // $('body').mCustomScrollbar();
    });


    $(document).ready(function () {
        hljs.configure({tabReplace: '   '});
        hljs.initHighlighting();
    });

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