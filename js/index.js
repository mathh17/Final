var user = JSON.parse(localStorage.getItem("loggedInUser"));
var teamCalendar = JSON.parse(localStorage.getItem("teamCalendar"));
var teamData = JSON.parse(localStorage.getItem("newTeam_Data"));
var deltag = [];
var participatingTeams
var teamNameDeltag = [];
var chosenTeam = [];

for(var i = 0 ; i < teamCalendar.length; i++){
    for(var j = 0; j < teamCalendar[i][2].length; j++){
        if(user.email == teamCalendar[i][2][j].email){
            if(deltag == null){
           deltag = (teamCalendar[i][0].toString());
            }
            else{
                deltag.push(teamCalendar[i][0].toString());
            }
        }
    }
}
for(index in deltag){
    teamNameDeltag.push(deltag[index].split("-"));
}
console.log(teamNameDeltag);
for(var i = 0; i < teamNameDeltag.length; i++){
    if(teamNameDeltag[i][0] == teamData[i].teamName ){
        if(chosenTeam == null){
            chosenTeam = teamData[i];
            continue;
        }
        else{
            chosenTeam.push(teamData[i]);
            
        }
    }
}
console.log(chosenTeam);    
    


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


