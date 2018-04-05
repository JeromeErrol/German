$(document).ready(function () {

    $('.word').on("mouseover", function() {
        var hoveredWord = $(this).text();
        $("#highlighted").text(hoveredWord);
    });
});



// Nom  ich,    du,     ihr,    wir     sie
// Acc  mich    dich    euch    uns     sie
// Dat  mir     dir     euch    uns     ihnen

pronouns = {
    nom :


}