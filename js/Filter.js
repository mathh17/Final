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
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
    };
    if (document.getElementById("formiddag").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.eftermiddag, .eftermiddagText').hide();
    };
    if (document.getElementById("eftermiddag").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.morgen, .morgenText').hide();
    };
});

//teams[i][e].teamStart.split(":")[0])
//Lav en if statement. "if teamstart == <12" - gå efter hvornår det starter

$(".steder").change(function () {
    if (document.getElementById("aSted").selected == true) {
        $('.lokation:not(:contains(" "))').closest('td').show();
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
    };
    if (document.getElementById("salen").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.lokation:not(:contains(" "))').closest('td').show();
        $('.lokation:not(:contains("Salen"))').closest('td').hide();
    };
    if (document.getElementById("styrkeSalen").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.lokation:not(:contains(" "))').closest('td').show();
        $('.lokation:not(:contains("Styrkesalen"))').closest('td').hide();
    };
    if (document.getElementById("udendørs").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.lokation:not(:contains(" "))').closest('td').show();
        $('.lokation:not(:contains("Udendørs"))').closest('td').hide();
    };
});

$(".hold").change(function () {
    if (document.getElementById("aHold").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.teamName:not(:contains(" "))').closest('td').show();
    };
    if (document.getElementById("bW").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.teamName:not(:contains(" "))').closest('td').show();
        $('.teamName:not(:contains("BodyWalk"))').closest('td').hide();
    };
    if (document.getElementById("cirkel").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.teamName:not(:contains(" "))').closest('td').show();
        $('.teamName:not(:contains("Cirkel"))').closest('td').hide();
    };
});

$(".træner").change(function () {
    if (document.getElementById("aTræner").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
    };
    if (document.getElementById("Katrine").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
        $('.teamTrainer:not(:contains("Katrine"))').closest('td').hide();
    };
    if (document.getElementById("Søren").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
        $('.teamTrainer:not(:contains("Søren"))').closest('td').hide();
    };
    if (document.getElementById("Anders").selected == true) {
        $('.eftermiddag, .eftermiddagText').show();
        $('.morgen, .morgenText').show();
        $('.teamTrainer:not(:contains(" "))').closest('td').show();
        $('.teamTrainer:not(:contains("Anders"))').closest('td').hide();
    };
});
