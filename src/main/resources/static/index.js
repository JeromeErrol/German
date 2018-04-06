$(document).ready(function () {

    $('.word').on("mouseover", function () {

        $(".selected-top-menu").removeClass("selected-top-menu");
        $(".highlighted-word").removeClass("highlighted-word");
        $(".selected-word").removeClass("selected-word");
        $("#hidden").append($("#primary-table").children());
        $("#hidden").append($("#sub-menu").children());

        var hoveredWord = $(this).text();
        $("#highlighted").text(hoveredWord);
        var lowerCase = hoveredWord.toLowerCase();
        var val = $("#" + lowerCase);
        $(this).addClass("highlighted-word");
        var type = $(this).data("type");
        $("#" + type).addClass("selected-top-menu");

        if (type == "verb") {
            $("#sub-menu").append($("#verb-menu"));
            var verbType = $(this).data("verbtype");
            $(".selected-verb-type").removeClass("selected-verb-type");
            $("#" + verbType).addClass("selected-verb-type")

            if (verbType == "verb-modal") {
                $("#sub-menu").append($("#modal-verbs"));
            }
        }

        if (val.length > 0) {
            val.addClass("selected-word");
            var table = val.closest(".guide");
            $("#primary-table").append(table);
        }
    });
});


