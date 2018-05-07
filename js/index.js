$(document).ready(function () {
    
    /*The two next put hover effect on all list items in the sidenav*/
    $(".sidenav li").mouseenter(function () {
        $(this).addClass("hoverEffektIndex");
    });

    $(".sidenav li").mouseout(function () {
        $(this).removeClass("hoverEffektIndex");
    });

    /*The next two make the hover also possible on the log out link, aka the list item with an a*/
    $(".sidenav li a").mouseenter(function () {
        $(this).parent().addClass("hoverEffektIndex");
    });

    $(".sidenav li a").mouseout(function () {
        $(this).parent().removeClass("hoverEffektIndex");
    });

    /*Switches between the .beskeder and the .mineBookninger being shown when the corresponding list item in the sidenav is clicked*/
    $(".beskederBtn").click(function () {
        $(".beskeder").css("display", "inline-block");
        $(".mineBookninger").css("display", "none");
    });

    $(".mineBookningerBtn").click(function () {
        $(".mineBookninger").css("display", "inline-block");
        $(".beskeder").css("display", "none");
    });
});
