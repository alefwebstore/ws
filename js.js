
var UltimoMouseOver = "";
var MenuAmostra = "";
var QtdItens = 0;

var OnOffAjuste = "";
var AlreadyDown = "";

var Wait2 = "";
var QtdFabrs = "";
var QtdClicksFabr = 0;

$(document).ready(
    function () {

        try{
            
            /*$(".LV_GENERE_LISTA ul li").on('click', function(event) {
                var nome = $(this).find('span > span').attr('title');
                if (nome){
                    $(".LV_GENERE_LISTA strong").html("Cor2: " + nome);
                }
            });*/

            $(".LV_GENERE_LISTA ul li").click(function(){
                var nome = $(this).find('span > span').attr('title');
                if (nome){
                    $(".LV_GENERE_LISTA strong").html("Cor: " + nome);
                }
            });

        } catch (e) { }

        try{
            $(".LV_LI_BLOCK_PRODS_LISTA .LV_LIST_PROD_BLOCK").each(function() {
                if ($(this).hasClass('LV_LIST_PROD_BLOCK_6')){
                    
                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-2 col-md-3 col-sm-4 col-xs-6");

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_4')) {
                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_2')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-xs-6");

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_1')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-xs-12");

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_20')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");
                }
                
            });
        } catch (e) { }

        try{
            

            $(".LV_LIST_ITEM_VAZIO").remove();

            $('.produtos-index .LV_LIST_PROD_BLOCK').each(function() {
                $(this).slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }],
                });                
            });
            $('.LV_DIV_LOGO_FABRICANTES').slick({
                infinite: true,
                slidesToShow: 7,
                slidesToScroll: 1,
                autoplaySpeed: 1000,
                autoplay: true,
                responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }],
            });
            $(window).resize(function() {
              $('.produtos-index .LV_LIST_PROD_BLOCK, .LV_DIV_LOGO_FABRICANTES').slick('resize');
            });

            $(window).on('orientationchange', function() {
              $('.produtos-index .LV_LIST_PROD_BLOCK, .LV_DIV_LOGO_FABRICANTES').slick('resize');
            });
        } catch (e) { }

        try{

            var FON = $("#FoneTopo span").html();
            if (FON != "") { $("#FoneTopo").show(); }

        } catch (e) { }

        try{

            var HORARIO = $("#HorarioRodape").html();
            if (HORARIO == "") { $("#HorarioRodape").hide(); }

        } catch (e) { }

        try {

            $(".DivRodapeInt .LV_UL_MENU_LEFT a").each(
                function () {
                    var HREF = $(this).attr("href");
                    if (HREF != "" && HREF != undefined && HREF != null) {

                        HREF = HREF.replace("http://https://", "https://");
                        $(this).attr("href", HREF);

                    }
                }
            );

        } catch (e) { }


        try{

            $(window).resize(
                function () {

                    /*window.setTimeout("AjustaAlturaItensLista()", 2000);*/

                }
            );
            
            window.setTimeout("AjustaAlturaItensLista()", 2000);

        } catch (e) { }



        try{

            var CONT_MINI = $("#MiniBanners a").length;
            if (CONT_MINI <= 0) { $("#MiniBanners").hide(); } else {
                $("#MiniBanners a").css("max-width", (100 / CONT_MINI) + "%");
            }

        } catch (e) { }



        try{

            var CONT_MINI = $("#DivBarraMobile a").length;
            if (CONT_MINI <= 0) { $("#DivBarraMobile").hide(); }

        } catch (e) { }



        try{

            var HTMLdest = $(".DivProdutosDestaque").html();
            if (HTMLdest.indexOf("<img") < 0) {
                $(".DivProdutosDestaque").hide();
            }

        } catch (e) { }


        var Banners = $("#DivBarraInt").html();
        if (Banners != null && Banners != undefined) {
            if (Banners.indexOf("<img") < 0) {
                $("#DivBarra").hide();
            }
        };



        try {

            $("#FrameFaceBook").hide();
            $("#RedesSociaisRodape a").each(
                function () {
                    var HREF = $(this).attr("href");
                    if (HREF.indexOf("facebook") >= 0) {
                        $("#FrameFaceBook").attr("src", "https://www.facebook.com/plugins/likebox.php?href=" + HREF + "?fref=ts;width=300&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=false&amp;header=false&amp;height=240px");
                        $("#FrameFaceBook").fadeIn("fast");
                    }
                }
            );

            $(".Seguranca a[rel='Google']").attr("href", "http://www.google.com/safebrowsing/diagnostic?site=" + window.location.href);
            $(".Seguranca a[rel='Norton']").attr("href", "https://safeweb.norton.com/report/show?url=" + window.location.href);

        } catch (e) { };


        $(".LV_UL_SEC a").attr("class", "LV_LINK_MENU_LEFT_SEC");
        $(".LV_UL_CAT a").attr("class", "LV_LINK_MENU_LEFT_CAT");
        $(".LV_UL_SUBCAT a").attr("class", "LV_LINK_MENU_LEFT_SUBCAT");



        try {
            $(".LV_LIST_PROD_ITEM").each(
                function () {

                    QtdItens++;
                    $(this).attr("id", "ITEM_" + QtdItens);

                    $("#ITEM_" + QtdItens + "").attr("style", "");

                    var HTML = $(this).html();
                    if (HTML.indexOf("LV_SpanProdFreteGratis") > 0 && HTML.indexOf("LV_SpanProdLancamento") > 0) {
                        $("#ITEM_" + QtdItens + " .LV_SpanProdFreteGratis").css("left", "43px");
                    }

                    if (HTML.indexOf("LV_LIST_PROD_INDISPONIVEL") > 0) {
                        $("#ITEM_" + QtdItens + " .LV_LIST_PROD_BT_COMPRAR").html("");
                    };

                    var LINK = $("#ITEM_" + QtdItens + " a").attr("href");
                    $("#ITEM_" + QtdItens + " .LV_LIST_PROD_IMG").append("<div class='VerMais'><a href='" + LINK + "'>ver detalhes</a></div>");

                }
            );
        } catch (e) { };

        try {

            var ContDpts = 0;
            $("#MenuTopoDesktop .LV_LI_DPT").each(
                function () {

                    ContDpts++;

                    var TodosSessoes = "";

                    var HTML = $(this).html();

                    if (HTML.indexOf("<li") >= 0) {
                        $(this).children("a:first-child").attr("rel", "ComSub");

                        $(this).children("ul").each(
                            function () {

                                $(this).children("li").each(
                                    function () {
                                        TodosSessoes += "<li class='LV_LI_CAT'><a href='" + $(this).children("a:first-child").attr("href") + "' class='LV_LINK_MENU_LEFT_CAT'>" + $(this).children("a:first-child").html() + "</a></li>";
                                    }
                                )
                            }
                        );

                    };

                    if (TodosSessoes != "") {

                        TodosSessoes = "<ul class='LV_UL_CAT'>" + TodosSessoes + "</ul>";

                    }

                    $(this).attr("id", "LI_DPT_" + ContDpts);

                    if (ContDpts >= 8) {
                        /*$(this).hide();*/
                    }
                }
            );


            var ContSec = 0;
            $("#MenuTopoDesktop ul li").each(
                function () {

                    ContSec++;

                    var HTML = $(this).html();

                    $(this).attr("id", "LIS_" + ContSec);

                    if (HTML.indexOf("<li") > 0) {
                        /*$("#LI_SEC_" + ContSec + " .LV_LINK_MENU_LEFT_SEC").append("<span></span>");*/
                        $(this).children("a:first-child").attr("rel","ComSub");
                    };

                }
            );

            $("#MenuDpts ul li").each(
                function () {

                    ContSec++;

                    var HTML = $(this).html();

                    if (HTML.indexOf("<li") > 0) {
                        $(this).children("a:first-child").attr("rel","ComSub");
                    };

                }
            );


            ContDpts = 0;
            $("#MenuTopoMobile .LV_LI_DPT").each(
                function () {

                    ContDpts++;

                    var HTML = $(this).html();

                    if (HTML.indexOf("LV_UL_SEC") < 0) {
                        $(this).attr("class", "LV_LI_DPT LV_LI_DPT_NO_SUBS");
                    };
                    $(this).attr("class", "LV_LI_DPT LV_LI_DPT_NO_SUBS");

                }
            );


            ContSec = 0;
            $("#MenuTopoMobile .LV_LI_SESS").each(
                function () {

                    ContSec++;

                    var HTML = $(this).html();

                    $(this).attr("id", "LI_SEC_" + ContSec);

                    if (HTML.indexOf("LV_UL_CAT") > 0) {
                        /*$("#LI_SEC_" + ContSec + " .LV_LINK_MENU_LEFT_SEC").append("<span></span>");*/
                    };

                }
            );



            $("#LV_TXTbusca").keyup
            (
                function (event) {
                    if (event.keyCode == '13') {
                        $("#LV_BT_BUSCA").click();
                    }
                }
            );

            $("#LV_TXTbusca").focus
            (
                function () {
                    if ($(this).val() == "<!--##BUSCA_TEXTO##-->") {
                        $(this).val("");
                    }
                }
            );

            $("#LV_TXTbusca").blur
            (
                function () {
                    if ($(this).val() == "") {
                        $(this).val("<!--##BUSCA_TEXTO##-->");
                    }
                }
            );


            $("#LV_TXTbusca3").keyup
            (
                function (event) {
                    if (event.keyCode == '13') {
                        FuncaoClickBuscar3();
                    }
                }
            );

            $("#LV_TXTbusca3").focus
            (
                function () {
                    if ($(this).val() == "<!--##BUSCA_TEXTO##-->") {
                        $(this).val("");
                    }
                }
            );

            $("#LV_TXTbusca3").blur
            (
                function () {
                    if ($(this).val() == "") {
                        $(this).val("<!--##BUSCA_TEXTO##-->");
                    }
                }
            );


        } catch (e) { }



        try {
            
            $("#MenuTopoMobile li").each(
                function () {

                    var Conteudo = $(this).html();
                    if (Conteudo.indexOf("<li") > 0) {

                        $(this).children("a:first-child").attr("rel", "ComSubs");

                    }

                }
            );
            
            var ContDPTS = 0;
            $("#MenuTopoMobile .LV_LI_DPT").each(
                function () {

                    ContDPTS++;

                    $(this).attr("id", "LI_DPT_" + ContDPTS);
                    var URL_DPT = $("#LI_DPT_" + ContDPTS + " .LV_LINK_MENU_LEFT_TIT").attr("href");
                    var NOME_DPT = $("#LI_DPT_" + ContDPTS + " .LV_LINK_MENU_LEFT_TIT").html();

                    var ConteudoDpt = $(this).html();
                    if (ConteudoDpt.indexOf("LV_UL_SEC") > 0) {

                        $("#MenuTopoMobile #LI_DPT_" + ContDPTS + " .LV_UL_SEC").attr("id", "UL_SEC_" + ContDPTS);
                        $("#MenuTopoMobile #UL_SEC_" + ContDPTS).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LI_DPT_" + ContDPTS + " .LV_LINK_MENU_LEFT_TIT").attr("href", "javascript:void(FuncaAbreSubMenu(" + ContDPTS + "))");

                    };

                }
            );

            var ContSEC = 0;
            $("#MenuTopoMobile .LV_LI_SESS").each(
                function () {

                    ContSEC++;

                    $(this).attr("id", "LI_SEC_" + ContSEC);
                    var URL_DPT = $("#LI_SEC_" + ContSEC + " .LV_LINK_MENU_LEFT_CAT").attr("href");
                    var NOME_DPT = $("#LI_SEC_" + ContSEC + " .LV_LINK_MENU_LEFT_CAT").html();

                    var ConteudoDpt = $(this).html();
                    if (ConteudoDpt.indexOf("LV_UL_CAT") > 0) {

                        $("#MenuTopoMobile #LI_SEC_" + ContSEC + " .LV_UL_CAT").attr("id", "UL_CAT_" + ContSEC);
                        $("#MenuTopoMobile #UL_CAT_" + ContSEC).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LI_SEC_" + ContSEC + " .LV_LINK_MENU_LEFT_SEC").attr("href", "javascript:void(FuncaAbreSubMenu2(" + ContSEC + "))");

                    };

                }
            );


            var ContCAT = 0;
            $("#MenuTopoMobile .LV_LI_CAT").each(
                function () {

                    ContCAT++;

                    $(this).attr("id", "LI_CAT_" + ContCAT);
                    var URL_DPT = $("#LI_CAT_" + ContCAT + " .LV_LINK_MENU_LEFT_SUBCAT").attr("href");
                    var NOME_DPT = $("#LI_CAT_" + ContCAT + " .LV_LINK_MENU_LEFT_SUBCAT").html();



                    var ConteudoDpt = $(this).html();
                    if (ConteudoDpt.indexOf("LV_UL_SUBCAT") > 0) {

                        $("#MenuTopoMobile #LI_CAT_" + ContCAT + " .LV_UL_SUBCAT").attr("id", "UL_SUBCAT_" + ContCAT);
                        $("#MenuTopoMobile #UL_SUBCAT_" + ContCAT).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LI_CAT_" + ContCAT + " .LV_LINK_MENU_LEFT_CAT").attr("href", "javascript:void(FuncaAbreSubMenu3(" + ContCAT + "))");

                        /*
                        $("#MenuTopoMobile #LI_SEC_" + ContSEC + " .LV_UL_CAT").attr("id", "UL_CAT_" + ContSEC);
                        $("#MenuTopoMobile #UL_CAT_" + ContSEC).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LI_SEC_" + ContSEC + " .LV_LINK_MENU_LEFT_SEC").attr("href", "javascript:void(FuncaAbreSubMenu2(" + ContSEC + "))");
                        */

                    };

                }
            );


        } catch (e) { }



        try{

            var AtendShow = "";
            $(".Atendimento a").each(
                function () {
                    if ($(this).html() != "") {
                        AtendShow = "OK";
                    }
                }
            );
            if (AtendShow != "OK") { $(".Atendimento").hide(); }

        } catch (e) { }



        try{

            $("#LV_LISTA_PRODUTOS_DESTAQUE").hide();
            $("#LV_LISTA_PRODUTOS_DESTAQUE li").each(
                function () {
                    var ID = $(this).attr("id");
                    if (ID != undefined) {
                        var IMG = $("#" + ID + " .LV_FOTO_PRODUTO_DESTAQUE").attr("src");
                        if (IMG != undefined) {
                            $("#" + ID + " .LV_FOTO_PRODUTO_DESTAQUE").attr("src", IMG.replace("PEQ_", "MED_"));
                        };
                    };
                }
            );
            $("#LV_LISTA_PRODUTOS_DESTAQUE").show();

        } catch (e) { }



        try {

            $("#LV_BOTAO_NEWSLETTER_RODAPE").click(
                function () {

                    $("#MsgNews").html("");

                    var EMAIL = $("#LV_EMAIL_NEWSLETTER_RODAPE").val();
                    EMAIL = EMAIL.trim();

                    $("#LV_NOME_NEWSLETTER").val("Cliente");

                    if (EMAIL == "") {
                        $("#MsgNews").html("Preencha o campo e-mail.");
                        $("#MsgNews").attr("class", "Aviso");
                        return false;
                    }
                    else if (validacaoEmail(EMAIL) == false) {
                        $("#MsgNews").html("Preencha o campo e-mail corretamente.");
                        $("#MsgNews").attr("class", "Aviso");
                        return false;
                    };

                    $("#LV_EMAIL_NEWSLETTER").val(EMAIL);
                    $("#LV_BOTAO_NEWSLETTER").click();

                    $("#MsgNews").html("Aguarde um momento por favor...");

                    setTimeout("FinalizaCadastroNews()", 2000);

                }
            );

        } catch (e) { }



        try {

            $("#LV_EMAIL_NEWSLETTER_RODAPE").keyup
            (
                function (event) {
                    if (event.keyCode == '13') {
                        $("#LV_BOTAO_NEWSLETTER_RODAPE").click();
                    }
                }
            );

            $("#LV_EMAIL_NEWSLETTER_RODAPE").focus
            (
                function () {
                    if ($(this).val() == "Digite seu e-mail") {
                        $(this).val("");
                    }
                }
            );

            $("#LV_EMAIL_NEWSLETTER_RODAPE").blur
            (
                function () {
                    if ($(this).val() == "") {
                        $(this).val("Digite seu e-mail");
                    }
                }
            );

        } catch (e) { }



        try{

            $(window).scroll();

            try{

                $("a[rel='FoneRodape']").each(
                    function () {
                        var VAL = $(this).html();
                        if (VAL == "") { $(this).hide(); }
                    }
                );

            } catch (e) { }



            try{

                $("#DivBarraFlutua .LV_LogotipoTexto span").each(
                    function () {

                        $(this).attr("id", "IdLogoTexto");
                        AjustaLogoTexto();

                    }
                );

            } catch (e) { }


            try {

                $(".DivTopo .LV_LogotipoTexto span").each(
                    function () {

                        $(this).attr("id", "IdTopoLogoTexto");
                        AjustaLogoTexto2();

                    }
                );

            } catch (e) { }


            window.setTimeout("AjustaDepartamentosTopo()", 500);

            $(window).resize(function () { ContAjustes2 = 1; ContAjustes = 0; window.setTimeout("AjustaDepartamentosTopo()", 10); });


            try{

                var QtdDpts = $(".DivRodapeInt .MenuDptos .LV_LI_DPT").length;
                if (QtdDpts > 10) {

                    var Cont = 0;
                    $(".DivRodapeInt .MenuDptos .LV_LI_DPT").each(
                        function () {
                            Cont++;
                            if (Cont >= 10) {
                                $(this).hide();
                            }
                        }
                    );
                    
                    $(".DivRodapeInt .MenuDptos .LV_UL_DPT").append("<li class='LV_LI_DPT' id='LinkVerMaisRodape'><a href='javascript:void(FuncaoVerMaisRodape())' class='LV_LINK_MENU_LEFT_TIT'>VER MAIS</a></li>");

                }

            } catch (e) { }


        } catch (e) { }


        try {

            var ProdsPorLinha = $("#HDProdsPorLinha").val();
            if (ProdsPorLinha == null || ProdsPorLinha == undefined) { ProdsPorLinha = 5; }
            if (ProdsPorLinha == "") { ProdsPorLinha = 5; }

        } catch (e) { alert(e.message); }


    }
);


function FuncaoMostraBannerLateral() {

    var BANNERS = $("#DivAuxiliar").html();
    var W = $(window).width();

    if (BANNERS.indexOf("<img") >= 0 && W > 800) {
        $("#DivMioloHome").attr("class", "DivMioloHome");
        $("#DivAuxiliar").show();
    }

}


function FuncaoVerMaisRodape() {
    $(".DivRodapeInt .MenuDptos .LV_LI_DPT").show();
    $("#LinkVerMaisRodape").hide();
}


var ContAjustes = 0;
var ContAjustes2 = 1;

var PrecisaTodaLoja = 0;

function AjustaDepartamentosTopo() {

    try {

        var ID = $("#MenuTopoDesktop .LV_LI_DPT:first-child").attr("id");
        var QTD = $("#MenuTopoDesktop .LV_LI_DPT").length;

        var Hmax = getSizeElemento(ID, "H");
        var H = getSizeElemento("MenuTopoDesktop", "H");

        Hmax = Hmax + (Hmax / 3);

        if (H > Hmax && ContAjustes < 30) {

            PrecisaTodaLoja = 1;

            ContAjustes++;

            var cont = 0;
            var Stop = "";

            $("#MenuTopoDesktop .LV_LI_DPT").each(
                function () {
                    cont++;
                    if (Stop == "") {
                        if (cont > QTD - ContAjustes2) {
                            ContAjustes2++;
                            Stop = "1";
                            $(this).hide();
                        } else {
                            $(this).show();
                        }
                    }
                }
            );

            window.setTimeout("AjustaDepartamentosTopo()", 10);

        } else {

            /*if (PrecisaTodaLoja == 1) { $("li[rel='LV_LI_DPT_ALL']").show(); } else { $("li[rel='LV_LI_DPT_ALL']").hide(); }*/

        }

    } catch (e) { alert(e.message); }

}



function AjustaLogoTexto() {
    
    try{

        var H = getSizeElemento("IdLogoTexto", "H");
        var Fonte = $("#IdLogoTexto").css("font-size");
        if (Fonte != undefined) {

            Fonte = Number(Fonte.replace("px", ""));

            if (H > 73) {
                Fonte = Fonte - 5;
                $("#IdLogoTexto").css("font-size", Fonte + "px");
                window.setTimeout("AjustaLogoTexto()", 10);
            }

        }

    } catch (e) { }

}

function AjustaLogoTexto2() {

    try {

        var H = getSizeElemento("IdTopoLogoTexto", "H");
        var Fonte = $("#IdTopoLogoTexto").css("font-size");
        if (Fonte != undefined) {

            Fonte = Number(Fonte.replace("px", ""));

            if (H > 73) {
                Fonte = Fonte - 5;
                $("#IdTopoLogoTexto").css("font-size", Fonte + "px");
                window.setTimeout("AjustaLogoTexto2()", 10);
            }

        }

    } catch (e) { }

}


function FinalizaCadastroNews() {

    $("#LV_EMAIL_NEWSLETTER_RODAPE").val("");
    $("#MsgNews").html("E-mail cadastrado com sucesso!.");
    $("#MsgNews").attr("class", "Concluido");

}

function getScrollTop() {
    if (typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    else {
        var B = document.body;
        var D = document.documentElement;
        D = (D.clientHeight) ? D : B;
        return D.scrollTop;
    }
};

function FuncaoClickBuscar() {

    $("#LV_BT_BUSCA").click();

};

function FuncaoClickBuscar3() {

    $("#LV_TXTbusca").val($("#LV_TXTbusca3").val());
    FuncaoClickBuscar();

};


var MenuCliAberto = "";
function FuncaoVerUsuario() {
    if (MenuCliAberto == "") {
        $(".MenuCliTopoMobile").fadeIn("fast");
        MenuCliAberto = "OK";
    } else {
        $(".MenuCliTopoMobile").fadeOut("fast");
        MenuCliAberto = "";
    }
};

var MenuAberto = "";
function FuncaoAbreMenu() {
    var link = $(".LinkAbreMenu");
    if (MenuAberto == "") {
        link.fadeOut('fast', function () {
            $(this).addClass('cross');
            $(this).find(".fa-bars").removeClass('fa-bars').addClass('fa-times');
            $(this).fadeIn('fast').css('display', 'block');
        });
        $(".DivDepartamentos .LV_UL_DPT").fadeIn("fast");
        $(".DivDepartamentos .MenuPersonalTopo").fadeIn("fast");
        MenuAberto = "OK";
    } else {
        link.fadeOut('fast', function () {
            $(this).removeClass('cross');
            $(this).find(".fa-times").removeClass('fa-times').addClass('fa-bars');
            $(this).fadeIn('fast').css('display', 'table-cell');
        });
        $(".DivDepartamentos .LV_UL_DPT").fadeOut("fast");
        $(".DivDepartamentos .MenuPersonalTopo").fadeOut("fast");
        MenuAberto = "";
    }
};


function FuncaAbreSubMenu(MENU) {

    $("#UL_SEC_" + MENU).toggle();

};


function FuncaAbreSubMenu2(MENU) {

    $("#UL_CAT_" + MENU).toggle();

};

function FuncaAbreSubMenu3(MENU) {

    $("#UL_SUBCAT_" + MENU).toggle();

};

function FuncaFechaSubMenu(MENU) {

    $("#UL_SEC_" + MENU).toggle();
    $("#UL_SEC_" + MENU).animate({
        left: "-2200"
    }, 500, function () { });

};

function validacaoEmail(email) {

    if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        return false;
    }
    return true;
};







var CONT_BANNERS_TOPO = 0;
var BANNER_ATUAL_TOPO = 0;
var BLOQUEIA_BANNERS = "";
var WaitChangeBannersTopo = "";
var AlturaBanners = 0;

var startCoordsBAN = {}, endCoordsBAN = {};

$(document).ready(
    function () {

        try {

            var HTML_Mob = "";
            $("#DivBarraMobile a").each(
                function () {
                    HTML_Mob += "<li><a href='" + $(this).attr("href") + "'>" + $(this).html() + "</a></li>";
                }
            );
            if (HTML_Mob != "") { HTML_Mob = "<ul rel='Bann'>" + HTML_Mob + "</ul>"; }
            $("#DivBarraMobile").html(HTML_Mob);

            $("#DivBarraMobile").bind("touchstart", function (event) {
                startCoordsBAN = endCoordsBAN = event.originalEvent.targetTouches[0];
            });

            $("#DivBarraMobile").bind("touchmove", function (event) {
                endCoordsBAN = event.originalEvent.targetTouches[0];
            });

            $("#DivBarraMobile").bind("touchend", function (event) {

                if ((endCoordsBAN.pageX + 50) < startCoordsBAN.pageX) {

                    FuncaoChamaBannerTopoAuto();

                }

                if ((endCoordsBAN.pageX - 50) > startCoordsBAN.pageX) {
                    var ATUAL = BANNER_ATUAL_TOPO;
                    ATUAL--;
                    if (ATUAL <= 0) { ATUAL = 0; }

                    FuncaoChamaBannerTopo(ATUAL);
                }

            });

        } catch (e) { alert(e.message); }


        AjusteBannersTopoInicio();

        $(window).resize(
            function () {

                $("#DivBarraMobile li img").each(
                    function () {

                        var WIDTH = $(window).width();
                        $(this).css("width", WIDTH);

                        AlturaBanners = $(this).height();

                        $(".DivBarraMobile").css("height", AlturaBanners + "px");

                    }
                );

            }
        );

    }
);


function AjusteBannersTopoInicio() {

    BANNER_ATUAL_TOPO = 1;

    $("#DivBarraMobile li img").each(
        function () {

            var WIDTH = $(window).width();

            $(this).css("width", WIDTH);

            AlturaBanners = $(this).height();

            $(".DivBarraMobile").css("height", AlturaBanners + "px");

        }
    );

    $("#DivBarraMobile li").each(
        function () {

            CONT_BANNERS_TOPO++;

        }
    );

    if (CONT_BANNERS_TOPO > 1) {

        var ConteudoAdd = "";
        for (i = 1; i <= CONT_BANNERS_TOPO; i++) {

            if (i == 1) {
                ConteudoAdd += "<li rel='Indice_" + i + "' class='SelectedIndice'><a href='javascript:void(FuncaoChamaBannerTopo(" + i + "))'>" + i + "</a></li>";
            } else {
                ConteudoAdd += "<li rel='Indice_" + i + "'><a href='javascript:void(FuncaoChamaBannerTopo(" + i + "))'>" + i + "</a></li>";
            }

        }

        if (ConteudoAdd != "") {

            $("#DivBarraMobile").append("<ul class='IndiceBanners'>" + ConteudoAdd + "</ul>");

        }

        WaitChangeBannersTopo = window.setInterval("FuncaoChamaBannerTopoAuto()", 5000);

    }


}


function FuncaoChamaBannerTopoAuto() {

    window.clearInterval(WaitChangeBannersTopo);

    var ATUAL = BANNER_ATUAL_TOPO;
    ATUAL++;
    if (ATUAL > CONT_BANNERS_TOPO) { ATUAL = 1; }

    FuncaoChamaBannerTopo(ATUAL);

}


function FuncaoChamaBannerTopo(Num) {

    window.clearInterval(WaitChangeBannersTopo);

    var WIDTH = $(window).width();

    if (CONT_BANNERS_TOPO > 1) {
        WaitChangeBannersTopo = window.setInterval("FuncaoChamaBannerTopoAuto()", 5000);
    }

    if (BANNER_ATUAL_TOPO != Num && BLOQUEIA_BANNERS == "") {

        BLOQUEIA_BANNERS = "OK";
        BANNER_ATUAL_TOPO = Num;

        var Posicao = (Num * WIDTH) - WIDTH + "px";

        $("#DivBarraMobile ul[rel='Bann']").animate({
            left: "-" + Posicao
        }, 500, function () {
            BLOQUEIA_BANNERS = "";
        });

        $(".IndiceBanners li").attr("class", "");
        $(".IndiceBanners li[rel='Indice_" + Num + "']").attr("class", "SelectedIndice");

    }

}


function AjustaAlturaItensLista() {

    try {

        var ProdsPorLinha = $("#HDProdsPorLinha").val();
        if (ProdsPorLinha == null || ProdsPorLinha == undefined) { ProdsPorLinha = 5; }
        if (ProdsPorLinha == "") { ProdsPorLinha = 5; }

    } catch (e) { alert(e.message); }

}







$(document).ready(
    function () {

        try{
    
            $(".LV_UL_BANNERS_116 li").each(function(index, el) {
               $(this).addClass("col-xs-6 col-sm-3"); 
            });

            $(".produtos-listagem .LV_LI_BLOCK_PRODS_LISTA li").each(function(index, el) {
               $(this).addClass("col-xs-6 col-md-3"); 
            });

            $(".LV_UL_BANNERS_114 li").each(function(index, el) {
               $(this).addClass("hidden-xs col-sm-4"); 
            });

            $(".LV_UL_BANNERS_113, .LV_PRODUTOS_DESTAQUE_V2").addClass("col-md-6 col-xs-12");            

            var checkProdutos = "";
            $(".LV_GRPS_PI .LV_LIST_PROD_BLOCK").each(function() {
                if ($(this).hasClass('LV_LIST_PROD_BLOCK_6')){

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-2 col-md-3 col-sm-4 col-xs-6");
                    checkProdutos = 6;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_4')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");
                    checkProdutos = 4;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_2')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-xs-6");
                    checkProdutos = 2;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_1')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-xs-12");
                    checkProdutos = 1;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_20')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");
                }
                
            });

        } catch (e) { }

        try{

            var checkProdutos = "";
            $(".LV_GRPS_PI .LV_LIST_PROD_BLOCK").each(function() {
                if ($(this).hasClass('LV_LIST_PROD_BLOCK_6')){

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-2 col-md-3 col-sm-4 col-xs-6");
                    checkProdutos = 6;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_4')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");
                    checkProdutos = 4;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_2')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-xs-6");
                    checkProdutos = 2;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_1')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-xs-12");
                    checkProdutos = 1;

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");

                }else if ($(this).hasClass('LV_LIST_PROD_BLOCK_20')) {

                    $(this).children(".LV_LIST_PROD_ITEM").addClass("col-lg-3 col-sm-4 col-xs-6");
                }
                
            });
            
        } catch (e) { }

        try {

            var barraEsquerda = $("#div-barra-esquerda");
            var barraDireita = $("#div-barra-direita");
            var divConteudo = $("#div-conteudo");
            var bannerLateral = $("#div-barra-direita").html();

            if (barraEsquerda.hasClass("DivMenu_1") && bannerLateral.indexOf("<img")>=1){
                barraEsquerda.attr("class", "col-md-2 hidden-xs hidden-sm");
                divConteudo.attr("class", "col-md-8 col-xs-12");
                barraDireita.attr("class", "col-md-2 hidden-xs hidden-sm");
            }else if (barraEsquerda.hasClass("DivMenu_0") && bannerLateral.indexOf("<img") >= 1) {
                barraEsquerda.hide();
                divConteudo.attr("class", "col-md-10 col-xs-12");
                barraDireita.attr("class", "col-md-2 hidden-xs hidden-sm");
            }else if (barraEsquerda.hasClass("DivMenu_1") && bannerLateral.indexOf("<img") <= 0) {
                barraEsquerda.attr("class", "col-md-2 hidden-xs hidden-sm");
                divConteudo.attr("class", "col-md-10 col-xs-12");
                barraDireita.hide();
            }else if (barraEsquerda.hasClass("DivMenu_0") && bannerLateral.indexOf("<img") <= 0) {
                barraEsquerda.hide();
                barraDireita.hide();
            }

        } catch (e) { }

        try {

            $("#MenuTopoMobile li").each(
                function () {

                    var Conteudo = $(this).html();
                    if (Conteudo.indexOf("<li") > 0) {

                        $(this).children("a:first-child").attr("rel", "ComSubs");

                    }

                }
            );

            var ContDPTS = 0;
            $("#MenuTopoMobile .LiMenuPersonalTopo").each(
                function () {

                    ContDPTS++;

                    $(this).attr("id", "LiMenuPersonalTopo" + ContDPTS);
                    var URL_DPT = $("#LiMenuPersonalTopo" + ContDPTS + " .LINK_MASTER_1").attr("href");
                    var NOME_DPT = $("#LiMenuPersonalTopo" + ContDPTS + " .LINK_MASTER_1").html();

                    var ConteudoDpt = $(this).html();
                    if (ConteudoDpt.indexOf("UL_1") > 0) {

                        $("#MenuTopoMobile #LiMenuPersonalTopo" + ContDPTS + " .UL_1").attr("id", "UL_1" + ContDPTS);
                        $("#MenuTopoMobile #UL_1" + ContDPTS).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LiMenuPersonalTopo" + ContDPTS + " .LINK_MASTER_1").attr("href", "javascript:void(FuncaAbreSubMenu_Topo(" + ContDPTS + "))");

                    };

                }
            );

            var ContSEC = 0;
            $("#MenuTopoMobile .LI_1").each(
                function () {

                    ContSEC++;

                    $(this).attr("id", "LI_1" + ContSEC);
                    var URL_DPT = $("#LI_1" + ContSEC + " .LINK_2").attr("href");
                    var NOME_DPT = $("#LI_1" + ContSEC + " .LINK_2").html();

                    var ConteudoDpt = $(this).html();
                    if (ConteudoDpt.indexOf("UL_2") > 0) {

                        $("#MenuTopoMobile #LI_1" + ContSEC + " .UL_2").attr("id", "UL_2" + ContSEC);
                        $("#MenuTopoMobile #UL_2" + ContSEC).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LI_1" + ContSEC + " .LINK_1").attr("href", "javascript:void(FuncaAbreSubMenu_Topo2(" + ContSEC + "))");

                    };

                }
            );


            var ContCAT = 0;
            $("#MenuTopoMobile .LI_2").each(
                function () {

                    ContCAT++;

                    $(this).attr("id", "LI_2" + ContCAT);
                    var URL_DPT = $("#LI_2" + ContCAT + " .LINK_3").attr("href");
                    var NOME_DPT = $("#LI_2" + ContCAT + " .LINK_3").html();



                    var ConteudoDpt = $(this).html();
                    if (ConteudoDpt.indexOf("UL_3") > 0) {

                        $("#MenuTopoMobile #LI_2" + ContCAT + " .UL_3").attr("id", "UL_3" + ContCAT);
                        $("#MenuTopoMobile #UL_3" + ContCAT).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LI_2" + ContCAT + " .LINK_3").attr("href", "javascript:void(FuncaAbreSubMenu_Topo3(" + ContCAT + "))");

                    };

                }
            );



            var ContSUB = 0;
            $("#MenuTopoMobile .LI_3").each(
                function () {

                    ContSUB++;

                    $(this).attr("id", "LI_3" + ContSUB);
                    var URL_DPT = $("#LI_3" + ContSUB + " .LINK_4").attr("href");
                    var NOME_DPT = $("#LI_3" + ContSUB + " .LINK_4").html();



                    var ConteudoDpt = $(this).html();
                    if (ConteudoDpt.indexOf("UL_4") > 0) {

                        $("#MenuTopoMobile #LI_3" + ContSUB + " .UL_4").attr("id", "UL_4" + ContSUB);
                        $("#MenuTopoMobile #UL_4" + ContSUB).prepend("<a href='" + URL_DPT + "' class='LinkTodoDpto'>Todo departamento</a>");
                        $("#MenuTopoMobile #LI_3" + ContSUB + " .LINK_4").attr("href", "javascript:void(FuncaAbreSubMenu_Topo4(" + ContSUB + "))");

                    };

                }
            );


        } catch (e) { }


    }
);

function FuncaAbreSubMenu_Topo(MENU) {
    $("#LiMenuPersonalTopo" + MENU).toggleClass("active");
    $("#UL_1" + MENU).toggle();

};

function FuncaAbreSubMenu_Topo2(MENU) {

    $("#UL_2" + MENU).toggle();

};

function FuncaAbreSubMenu_Topo3(MENU) {

    $("#UL_3" + MENU).toggle();

};

function FuncaAbreSubMenu_Topo4(MENU) {

    $("#UL_4" + MENU).toggle();

};
