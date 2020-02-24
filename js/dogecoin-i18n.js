function enablei18n() {
    'use strict';
    var i18n = $.i18n();
    var localeFromURL = getUrlParameter('lng');
    if (localeFromURL) {
        i18n.locale = localeFromURL;
    }

    i18n.load('/i18n', i18n.locale).done(
        function () {
            $('[data-i18n]').each(function (index) {
                $(this).i18n();
                $(this).html($.i18n($(this).attr('data-i18n')));
            });
        });
}
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
// Enable debug
$.i18n.debug = true;

