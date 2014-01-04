$(document).ready(function() {
    $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%20%3D%20'http%3A%2F%2Fcoinmarketcap.com%2F'%20and%20xpath%3D'%2F%2Fa%5Bcontains(%40href%2C%22http%3A%2F%2Fwww.cryptocoincharts.info%23jump-doge-btc%22)%5D'&format=json", function(data) {
        price = (data.query.results.a).replace(/ /g, '');
        $('.price-box').append('<a href="http://www.cryptocoincharts.info/#jump-doge-btc" target="_blank">US' + price + '</a>');
    });

    function addItem() {
        items = Array('such currency', 'wow', 'amaze', 'much coin', 'awesome', 'so crypto', 'how money', 'plz mine', 'v rich', 'many coins', 'such profit', 'WOW');
        docHeight = $(document).innerHeight();
        docWidth = $(document).innerWidth()
        text = items[Math.floor(Math.random() * items.length)];
        textCol = '#' + Math.floor(Math.random() * 16777215).toString(16);
        textSize = Math.floor((Math.random() * 48) + 12);
        yPos = Math.floor((Math.random() * docHeight));
        xPos = Math.floor((Math.random() * docWidth));
        $('<div class="bubble" style="color:' + textCol + ';left:' + xPos + 'px;top:' + yPos + 'px;font-size:' + textSize + 'px;">' + text + '</div>').appendTo("body").fadeIn('fast').delay(2000).fadeOut('fast');
        $('.bubble:not(:last-child)').remove();
    }
    setInterval(addItem, 3000);
});