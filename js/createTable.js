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
var day;
var month;
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
    $('#dynamicTable').append('<table cellspacing="0"></table>');
    $('#dynamicTable table').addClass('mainTable');
    $('.mainTable').append('<thead></thead>' +
                           '<tbody></tbody>');
    
    var buttonHTML = '<br><div class="cube"><div class="front"> DELTAG </div><div class="bottom"><img class="knapImage" src="pictures/godForm.png"></div><div class="back"> AFMELD </div><div class="top"></div></div><div class="shadow"></div>';
    
    $('#dynamicTable table thead').append('<tr id="tableDates"></tr>');

    //Table Header
    for (var i = 0; i < weekday.length; i++) {
        $('#tableDates').append('<th id="' + weekday[i] + '" class="headerTable"></th>');
        $('tbody').append('<td class="inner' + weekday[i] + '" class="innerTable"></td>');
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

        day = someDate.getDate();
        month = someDate.getMonth() + 1;
        
        // appends dates to table
        if (month < 10 && day < 10) {
            $("#" + weekday[i]).append(weekday[i] + "<br>0" + day + '-0' + month);
        } else if (month < 10) {
            $("#" + weekday[i]).append(weekday[i] + "<br>" + day + '-0' + month );
        } else if (day < 10) {
            $("#" + weekday[i]).append(weekday[i] + "<br>0" + day + '-' + month );
        } else {
            $("#" + weekday[i]).append(weekday[i] + "<br>" + day + '-' + month );
        }
        
        
       for (e = 0; e < teams[i].length; e++) {
            $('.inner' + weekday[i]).append(
                '<tr><td class="' + teams[i][e].teamName + '-' + day + month + '-' + e + '">' +
                '</td></tr>'
            );

            //Adds table with teams
            if (teams[i][e] !== undefined) {
                $('.' + teams[i][e].teamName + '-' + day + month + '-' + e).append( teams[i][e].teamName +
                    '<br>' + teams[i][e].teamStart + '-' + teams[i][e].teamEnd +
                    '<br>' + teams[i][e].teamDuration + ' min' +
                    '<br>' + teams[i][e].teamLocation +
                    '<br>' + teams[i][e].teamTrainer +
                    '<br> 0/' + teams[i][e].teamMaxParticipants + buttonHTML                                                      
                    );
            }
            
        }
    }
    
    $(".cube").click(function() {
                //use a class, since your ID gets mangled
                if ($(this).hasClass('rotate') == true) {
                    $(this).removeClass('rotate');
                } else
                    $(this).addClass('rotate'); //add the class to the clicked element
            });
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
        if(currentWeek < 2)
        currentWeek++;
        else
            alert("Det er ikke muligt at booke mere end to uger frem. Vh. God Form :)")
        $(".buttonMid").text('UGE ' + (week + currentWeek).toString());
        buildTable();
    });
    $(".buttonMidLeft").click(function () {
        $(".buttonMid").text('UGE ' + week.toString());
         if(currentWeek > 0)
        currentWeek--;
        else
            alert("Det er ikke muligt at gå tilbage i tiden :)")
        buildTable();   
    });
    
   // $('.mainTable').stacktable();
   // $('.mainTable').stackcolumns();
});




// --------------------------------




