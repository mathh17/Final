/*This functions checks whether the list items with the .menu class are displayed or not, then sets them to the opposite when the first list item (menu) is clicked. It also rotates the arrow img to point the opposite direction.*/
$(".buttonLeft").click(function () {
    if ($(".dropContent").css("display") == 'none') {
        $(".dropContent") /*.slideDown()*/ .css("display", "block");
        $(".buttonLeft img").css("transform", "rotate(-180deg)");
    } else if ($(".dropContent").css("display") == 'block') {
        $(".dropContent") /*.slideUp()*/ .css("display", "none");
        $(".buttonLeft img").css("transform", "rotate(0deg)");
    }
});

$(".tid").change(function () {
    /*var str = document.getElementById("teamTime");
    var strFirst = str.split(':', 1);*/
    
    if (document.getElementById("aTid").selected == true) {
        $('.teamTime:not(:contains("  "))').closest('td').show();
    };
    if (document.getElementById("formiddag").selected == true) {
        //if(teams[i][e].teamStart < 12)
        $('.teamTime:not(:contains("  "))').closest('td').show();
        $('.teamTime:not(:contains("00:"), :contains("01:"), :contains("02:"), :contains("03:"), :contains("04:"), :contains("05:"), :contains("06:"), :contains("07:"), :contains("08:"), :contains("09:"), :contains("10:"), :contains("11:"), :contains("12:"))').closest('td').hide();
    };
    if (document.getElementById("eftermiddag").selected == true) {
        $('.teamTime:not(:contains("  "))').closest('td').show();
        $('.teamTime:not(:contains("13:"), :contains("14:"), :contains("15:"), :contains("16:"), :contains("17:"), :contains("18:"), :contains("19:"), :contains("20:"), :contains("21:"), :contains("22:"), :contains("23:"))').closest('td').hide();
    };
});

//teams[i][e].teamStart.split(":")[0])
//Lav en if statement. "if teamstart == <12" - gå efter hvornår det starter

$(".steder").change(function () {
    if (document.getElementById("aSted").selected == true) {
        $('.lokation:not(:contains(" "))').closest('td').show();
    };
    if (document.getElementById("salen").selected == true) {
        $('.lokation:not(:contains(" "))').closest('td').show();
        $('.lokation:not(:contains("Salen"))').closest('td').hide();
    };
    if (document.getElementById("styrkeSalen").selected == true) {
        $('.lokation:not(:contains(" "))').closest('td').show();
        $('.lokation:not(:contains("Styrkesalen"))').closest('td').hide();
    };
    if (document.getElementById("udendørs").selected == true) {
        $('.lokation:not(:contains(" "))').closest('td').show();
        $('.lokation:not(:contains("Udendørs"))').closest('td').hide();
    };
});

$(".hold").change(function () {
    if (document.getElementById("aHold").selected == true) {
        $('.teamName:not(:contains(" "))').closest('td').show();
    };
    if (document.getElementById("bW").selected == true) {
        $('.teamName:not(:contains(" "))').closest('td').show();
        $('.teamName:not(:contains("BodyWalk"))').closest('td').hide();
    };
    if (document.getElementById("cirkel").selected == true) {
        $('.teamName:not(:contains(" "))').closest('td').show();
        $('.teamName:not(:contains("Cirkel"))').closest('td').hide();
    };
});

$(".træner").change(function () {
    if (document.getElementById("aTræner").selected == true) {
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
    };
    if (document.getElementById("Katrine").selected == true) {
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
        $('.teamTrainer:not(:contains("Katrine"))').closest('td').hide();
    };
    if (document.getElementById("Søren").selected == true) {
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
        $('.teamTrainer:not(:contains("Søren"))').closest('td').hide();
    };
    if (document.getElementById("Anders").selected == true) {
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
        $('.teamTrainer:not(:contains("Anders"))').closest('td').hide();
    };
});
