$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "./../liste.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).eq(Math.floor(Math.random() * xml.length));
            $(xml).find('image').each(function() {
                var src = $(this).find('src').text();
                $('<div class="image"></div>').html('<img src="' + src + '" />').appendTo('#listeXML');

                $("#listeXML").find("img").css("height", "100px");
                $("#listeXML").find("img").css("width", "100px");

                $("#listeXML").find("img").hover(function(){
                    $(this).css("height", "150px");
                    $(this).css("width", "150px");
                }, function() {
                    $(this).css("height", "100px");
                    $(this).css("width", "100px");
                });

                $("#listeXML").find("img").click(function(){
                    var img = $(this).attr('src');
                    $(".lightbox").html("<img src='" + img + "'>");
                    $(".lightbox").fadeIn("slow").css("display", "flex");
                });

                $(".lightbox").click(function () {
                    $(".lightbox").fadeOut("fast");
                });
            });

            $("#listeXML").find("img").shuffle();
        }
    });
    (function($){
        $.fn.shuffle = function() {
            var allElems = this.get(),
                getRandom = function(max) {
                    return Math.floor(Math.random() * max);
                },
                shuffled = $.map(allElems, function(){
                    var random = getRandom(allElems.length),
                        randEl = $(allElems[random]).clone(true)[0];
                    allElems.splice(random, 1);
                    return randEl;
               });
            this.each(function(i){
                $(this).replaceWith($(shuffled[i]));
            });
            return $(shuffled);
        };
    })(jQuery);
});