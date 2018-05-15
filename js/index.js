var user = JSON.parse(localStorage.getItem("loggedInUser"));
var teamCalendar = JSON.parse(localStorage.getItem("teamCalendar"));
var teamData = JSON.parse(localStorage.getItem("newTeam_Data"));
var deltag = [];
var participatingTeams
var teamNameDeltag = [];
var chosenTeam = [];


if(teamData == null){
    var spinning = new TeamObject(
            'Spinning',
            '10;00',
            '11:00',
            60,
            'Anders',
            'Salen',
            10,
            'Hardcore Cykling!',
            [0,2,4],
            false
        );
    var fitpump = new TeamObject(
            'Fitpump',
            '13;00',
            '14:00',
            60,
            'Søren',
            'Udendørs',
            20,
            'Hardcore bodyPump!',
            [3],
            false
        );
    var fitWalk = new TeamObject(
            'FitWalk',
            '13;00',
            '14:30',
            90,
            'Katrine',
            'Salen',
            10,
            'Få en god gåtur på løbebåndene',
            [5],
            false
        );
    teamData.push(fitWalk, fitpump, spinning)
     localStorage.setItem('newTeam_Data', JSON.stringify(teamData));
    
}


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
for(var j = 0; j < teamNameDeltag.length; j++){
for(var i = 0; i < teamData.length; i++){
    if(teamNameDeltag[j][0] == teamData[i].teamName ){
        if(chosenTeam == null){
            chosenTeam = teamData[i];
        }
        else{
            chosenTeam.push(teamData[i]);
            
        }
    }
}
}
console.log(teamData);    
    





$(document).ready(function () {
    
    /*loading participating teams */
    for(var i = 0; i < chosenTeam.length; i++){
        $('.deltagerBookninger').append('<div>'+chosenTeam[i].teamName+'<div>');
        $('.deltagerBookninger').append('<div>' + chosenTeam[i].teamStart + ' - ' + chosenTeam[i].teamEnd +'</div>');
        $('.deltagerBookninger').append('<div>' + chosenTeam[i].teamLocation + '</div>');
        $('.deltagerBookninger').append('<div>---------------------------------------------------------------</div>');
    }
    
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


