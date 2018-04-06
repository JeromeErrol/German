$(document).ready(function () {

    $('.word').on("mouseover", function() {
        var hoveredWord = $(this).text();
        $("#highlighted").text(hoveredWord);
        $(".selected-word").removeClass("selected-word");
        var lowerCase = hoveredWord.toLowerCase();
        var val = $("#" + lowerCase);

        $(".selected-type").removeClass("selected-type");
        var type = $(this).data("type");
        $("#" + type).addClass("selected-type");

        // for now just always hide
        $("#staging").append($("#modal-verbs"));
        $("#staging").append($("#verb-menu"));

        if(type == "verb"){
            $("#sub-menu").append($("#verb-menu"));

            var verbType = $(this).data("verbtype");
            $(".selected-verb-type").removeClass("selected-verb-type");
            $("#" + verbType).addClass("selected-verb-type")

            if(verbType == "verb-modal"){
                $("#sub-menu").append($("#modal-verbs"));
            }

        }

        if(val.length > 0){
            val.addClass("selected-word");
            var table = val.closest(".guide");
            var currentTables = $("#primary-table").children();
            if(currentTables.length > 0){
                $("#staging").append(currentTables[0]);
            }
            $("#primary-table").append(table);
        }
    });
});


