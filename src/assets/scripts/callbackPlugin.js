$(function($) {
    $.getScript("assets/scripts/smartlid/smartlid.js", function() {
        $("body").smartLid({

        });
    });

    function addStyle(href) {
        elem = document.createElement("link");
        elem.href = href;
        elem.rel = "stylesheet";
        document.head.appendChild(elem);
    }
    addStyle("assets/scripts/smartlid/css/main.css");
}(jQuery));
