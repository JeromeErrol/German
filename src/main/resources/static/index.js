$(document).ready(function () {

    $('.word').on("mouseover", function() {
        var hoveredWord = $(this).text();
        $("#highlighted").text(hoveredWord);

        $(".selected-word").removeClass("selected-word");
        var lowerCase = hoveredWord.toLowerCase();
        var val = $("#" + lowerCase);
        if(val != null){
            val.addClass("selected-word");
        }
    });
});


