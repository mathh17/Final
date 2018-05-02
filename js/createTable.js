var teamMandagFormiddag = [];
var teamTirsdagFormiddag = [];
var teamOnsdagFormiddag = [];
var teamTorsdagFormiddag = [];
var teamFredagFormiddag = [];
var teamLørdagFormiddag = [];
var teamSøndagFormiddag = [];
var teams = [teamMandagFormiddag, teamTirsdagFormiddag, teamOnsdagFormiddag, teamTorsdagFormiddag, teamFredagFormiddag, teamLørdagFormiddag, teamSøndagFormiddag];


var weekday = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
var week = moment().week();
var date = moment().format("MMM Do YY");
var currentWeek = 0;


 function loadTeamArray() {
            var lsTeam = localStorage.getItem('newTeam_Data');
            if (lsTeam != null) {
                lsTeamsArray = new Array();
                lsTeamsArray = JSON.parse(lsTeam);
                $(lsTeamsArray).each(function (index, data) {
                console.log("index: " + index + ", data: " + data);
                });
            }
        }

loadTeamArray();

for (var i = 0; i < lsTeamsArray.length; i++) {
    var weekDay = lsTeamsArray[i].teamActiveDays;
    for(var j = 0; j < teams.length; j++){
        for(var e = 0; e < weekDay.length; e++)
        if(weekDay[e] == j){
            teams[j].push(lsTeamsArray[i]);
        }
    }
    console.log(lsTeamsArray);
    console.log(weekDay[0]);
    console.log(teams);
}

function buildTable() {
    $('#dynamicTable').empty();
    $('#dynamicTable').append('<table></table>');

    $('#dynamicTable table').append('<tr></tr>').attr('id', 'tableDates');

    //Table Header
    for (var i = 0; i < weekday.length; i++) {
        $('#tableDates').append('<td><table id="' + weekday[i] + '" class="innerTable"></table></td>');
    }


    //Adds date to table
    for (var i = 0; i < weekday.length; i++) {
        var someDate = new Date();
        var day1 = new Date().getDay() - 1;
        var numberOfDaysToAdd = 0;

        // 
      if (currentWeek == 0) {
            if (i < day1) {
                numberOfDaysToAdd -= day1 - i;
            } else if (i > day1) {
                numberOfDaysToAdd += i - day1;
            } else {
                numberOfDaysToAdd = 0 ;
            }
        }
        else {
            if (i < day1) {
                numberOfDaysToAdd -= day1 - i;
                numberOfDaysToAdd += currentWeek * 7;
            } else if (i > day1) {
                numberOfDaysToAdd += i - day1;
                numberOfDaysToAdd += currentWeek * 7;
            } else {
                numberOfDaysToAdd = 0;
                numberOfDaysToAdd += currentWeek * 7;
            }
            
        }


        //appends dates to table head
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

        if (someDate.getMonth() < 10 && someDate.getDate() < 10) {
            $("#" + weekday[i]).append('<th>' + weekday[i] + "<br>0" + someDate.getDate() + '-0' + (someDate.getMonth() + 1) + '</th>');
        } else if (someDate.getMonth() < 10) {
            $("#" + weekday[i]).append('<th>' + weekday[i] + "<br>" + someDate.getDate() + '-0' + (someDate.getMonth() + 1) + '</th>');
        } else if (someDate.getDate() < 10) {
            $("#" + weekday[i]).append('<th>' + weekday[i] + "<br>0" + someDate.getDate() + '-' + (someDate.getMonth() + 1) + '</th>');
        } else {
            $("#" + weekday[i]).append('<th>' + weekday[i] + "<br>" + someDate.getDate() + '-' + (someDate.getMonth() + 1) + '</th>');
        }

        console.log(someDate);
        for (e = 0; e < teams[i].length; e++) {
            $('#' + weekday[i]).parent().append(
                '<tr class="' + teams[i][e].teamName + '-' + someDate.getDate() + (someDate.getMonth() + 1) + '-' + e + '">' +
                '</tr>'
            );

            //Adds table with teams
            if (teams[i][e] !== undefined) {
                $('.' + teams[i][e].teamName + '-' + someDate.getDate() + (someDate.getMonth() + 1) + '-' + e).append('<td class="' + teams[i][e].teamName + '">' + '<div><tr><td>' + teams[i][e].teamName +
                    '<br>' + teams[i][e].teamStart + '-' + teams[i][e].teamEnd +
                    '<br>30 min' +
                    '<br>' + teams[i][e].teamLocation +
                    '<br>' + teams[i][e].teamTrainer +
                    '<br> 0/' + teams[i][e].teamMaxParticipants +
                    '</td></tr></div>' +
                    '</td>');
            }
            
        }
    }
}


function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


$(document).ready(function () {
    for (var i = 0; i < teams.length; i++) {
        teams[i].sort(dynamicSort('teamStart'));
    }

    buildTable();


    // Week + Buttons
    $(".buttonMid").text('UGE ' + week.toString());

    $(".buttonMidRight").click(function () {
        $(".buttonMid").text('UGE ' + (week + 1).toString());
        currentWeek++;
        buildTable();
    });
    $(".buttonMidLeft").click(function () {
        $(".buttonMid").text('UGE ' + week.toString());
        currentWeek--;
        buildTable();   
    });


});




// --------------------------------




