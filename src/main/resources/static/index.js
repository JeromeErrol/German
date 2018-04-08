jQuery.fn.extend({
  addStaticClass: function(className) {
    $("." + className).removeClass(className);
    this.addClass(className);
  }
});

function removeClass(classname){
    $("." + className).removeClass(className);
}

var ui = {
    reset : function(){
        $(".active").removeClass("active");
        $("#hidden").append($("#primary-table").children());
        $("#hidden").append($("#sub1").children());
        $("#hidden").append($("#sub2").children());
    },

    setSentence: function(value) {
        $("#sentences").append($("#sentence").children());
        $("#sentence").append(value);
    },

    setCategory: function (id) {
        $("#" + id).addStaticClass("active-category");
    },
    setSubMenu1: function (id) {
        $("#sub1").append($("#" + id));
    },
    setSubMenu2: function (id) {
        $("#sub2").append($("#" + id));
    },
    setPrimaryTable: function (id) {
        $("#primary-table").append($("#"+ id));
    },

    activatePronoun : function(){
            ui.reset();
            $("#pronoun").addClass("active");
            $("#sub1").append($("#pronouns"));
    },

    activatePronounPersonal : function(){
            ui.activatePronoun();
            $("#pronouns-personal").addClass("active");
            $("#sub1").append($("#pronouns-personal-table"));
    },

    activatePronounPersonalNominative : function(){
            ui.activatePronounPersonal();
            $("#pronouns-personal-cases-nominative").addClass("active");
            $("#sub2").append($("#pronouns-personal-nominative"));
    },

    activatePronounPossessive : function(){
            ui.activatePronoun();
            $("#pronouns-possessive").addClass("active");
            $("#sub1").append($("#pronouns-possessive-table"));
    },

    activateVerb : function(){
            ui.reset();
            $("#verb").addClass("active");
            $("#sub1").append($("#verb-types"));
    },

    activateModal : function(){
        ui.activateVerb();
        $("#verb-modal").addClass("active");
        $("#sub2").append($("#modal-verbs"));
    },

    activateModalWollen : function(){
        ui.activateModal();
        $("#verb-wollen").addClass("active");
        $("#primary-table").append($("#wollen-table"));
    },

    activateWeakVerb : function(){
        ui.activateVerb();
        $("#verb-weak").addClass("active");
        $("#sub2").append($("#accusative-verbs"));
    },

     activateStrongVerb : function(){
        ui.activateVerb();
        $("#verb-dative").addClass("active");
        $("#sub2").append($("#dative-verbs"));
     },

     nextSentence: function(){
         ui.setSentence($("#sentences").children()[0]);
     }
}

$(document).ready(function () {

    $("span").click(function(){
        var me = $(this);
//        var ref = me.data('ref');
//        if(ref != null){
//            alert(ref);
//        }
        me.trigger("activate");
    });

    $( "span" ).on( "activate", function() {
        $(this).addClass("active");
    });

    $( "span" ).on( "activateUp", function() {
            $(this).addClass("active");
    });

    ui.nextSentence();
    $("#verb").click(ui.activateVerb);

    $("#verb").on("activate", function() {

    });

    $("#pronoun").click(ui.activatePronoun);

    $("#pronouns-personal").click(ui.activatePronounPersonal);
    $("#pronouns-possessive").click(ui.activatePronounPossessive);

    $("#verb-modal").click(ui.activateModal);
    $("#verb-weak").click(ui.activateWeakVerb);
    $("#verb-dative").click(ui.activateStrongVerb);
    $("#verb-wollen").click(ui.activateModalWollen);

    $("#next-sentence-button").click(ui.nextSentence);

    $("#pronouns-personal-cases-nominative").click(ui.activatePronounPersonalNominative);

    $("#sentence-wir").click(ui.activatePronoun);
    $("#sentence-wollten").click(function(){
            ui.activateModalWollen();
            $(this).addClass("active");
            $("#wollen-table-wollten").addClass("active");
    });

    $("#willst").click(function(){
        ui.setSentence($("#example-sentence-willst"));
        $(this).addClass("active");
    });

    $("#wollen-table-wollten").click(function(){
            ui.setSentence($("#example-sentence-wollten"));
            $(this).addClass("active");
    });

    $('.word').on("mouseover", function () {

    });
});


