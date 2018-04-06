var ui = {
    setPrimaryTable: function (id) {
        $("#hidden").append($("#primary-table").children());
        $("#primary-table").append($(id));
    },
    setSubMenu1: function (id) {
        $("#hidden").append($("#sub-menu").children());
        $("#sub-menu").append($(id));
    },
    setSubMenu2: function (id) {
        $("#hidden").append($("#sub-menu1").children());
        $("#sub-menu1").append($(id));
    }
}

$(document).ready(function () {


    $("#pronoun").click(function () {
        ui.setPrimaryTable("#pronouns-table")
    });
    $("#verb").click(function () {
        ui.setSubMenu1("#verb-menu");
        ui.setPrimaryTable("#wollen-table")
    });

    $('.word').on("mouseover", function () {

        $(".selected-top-menu").removeClass("selected-top-menu");
        $(".highlighted-word").removeClass("highlighted-word");
        $(".selected-word").removeClass("selected-word");
        $(".selected-modal-verb").removeClass("selected-modal-verb");
        $("#hidden").append($("#primary-table").children());
        $("#hidden").append($("#sub-menu").children());
        $("#hidden").append($("#sub-menu2").children());

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
                $("#sub-menu2").append($("#modal-verbs"));

                var modelType = $(this).data("modaltype");
                $("#" + modelType).addClass("selected-modal-verb");
            }
        }

        if (val.length > 0) {
            val.addClass("selected-word");
            var table = val.closest(".guide");
            $("#primary-table").append(table);
        }
    });
});


