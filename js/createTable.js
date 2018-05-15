var teamMandagFormiddag = [];
var teamTirsdagFormiddag = [];
var teamOnsdagFormiddag = [];
var teamTorsdagFormiddag = [];
var teamFredagFormiddag = [];
var teamLørdagFormiddag = [];
var teamSøndagFormiddag = [];
var teams = [teamMandagFormiddag, teamTirsdagFormiddag, teamOnsdagFormiddag, teamTorsdagFormiddag, teamFredagFormiddag, teamLørdagFormiddag, teamSøndagFormiddag];

var user = JSON.parse(localStorage.getItem('loggedInUser'));

var weekday = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
var week = moment().week();
var date = moment().format("MMM Do YY");
var day;
var month;
var currentWeek = 0;
var modal = document.getElementById('myModal');
var teamCalendar = JSON.parse(localStorage.getItem('teamCalendar'));
var deltagerAntal = 0;

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


function loadTeamArray() {
    var lsTeam = localStorage.getItem('newTeam_Data');
    if (lsTeam != null) {
        lsTeamsArray = new Array();
        lsTeamsArray = JSON.parse(lsTeam);
        $(lsTeamsArray).each(function (index, data) {});
    }
}

loadTeamArray();

for (var i = 0; i < lsTeamsArray.length; i++) {
    var weekDay = lsTeamsArray[i].teamActiveDays;
    for (var j = 0; j < teams.length; j++) {
        for (var e = 0; e < weekDay.length; e++)
            if (weekDay[e] == j) {
                teams[j].push(lsTeamsArray[i]);
            }
    }

}

function buildTable() {
    $('#dynamicTable').empty();
    $('#dynamicTable').append('<table cellspacing="0"></table>');
    $('#dynamicTable table').addClass('mainTable');
    $('.mainTable').append('<thead></thead>' +
        '<tbody class="morgenText"></tbody>');

    var buttonHTML = '<br><div align="center" class="cube"><div class="front"> DELTAG </div><div class="bottom"><img class="knapImage" src="pictures/godForm.png"></div><div class="back"> AFMELD </div><div class="top"></div></div><div align="center"> <div class="shadow"></div></div>';

    $('#dynamicTable table thead').append('<tr id="tableDates"></tr>');
    $('.mainTable').append('<tbody class="morgen"></tbody>');
    $('.morgenText').append('<td colspan="7">Morgen</td>');
    //Table Header
    for (var i = 0; i < weekday.length * 2; i++) {
        if (i < 7) {
            $('#tableDates').append('<th id="' + weekday[i] + '" class="headerTable"></th>');
            $('.morgen').append('<td class="inner' + weekday[i] + '" class="innerTable"></td>');
        }
        if (i == 6) {

            $('.mainTable').append('<tbody class="eftermiddagText"></tbody>');
            $('.eftermiddagText').append('<td colspan="7">Eftermiddag</td>');
            $('.mainTable').append('<tbody class="eftermiddag"></tbody>');

        }

        if (i > 6) {
            $('.eftermiddag').append('<td class="innerEftermiddag' + weekday[i - 7] + '" class="innerTable"></td>');
        }
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
                numberOfDaysToAdd = 0;
            }
        } else {
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
            $("#" + weekday[i]).append(weekday[i] + "<br>" + day + '-0' + month);
        } else if (day < 10) {
            $("#" + weekday[i]).append(weekday[i] + "<br>0" + day + '-' + month);
        } else {
            $("#" + weekday[i]).append(weekday[i] + "<br>" + day + '-' + month);
        }


        for (e = 0; e < teams[i].length; e++) {
            var teamIdWithSpace = teams[i][e].teamName + '-' + day + month + '-' + e;
            var teamId = teamIdWithSpace.replace(/ /g, '-');

            if (parseInt(teams[i][e].teamStart.split(":")[0]) < 12) {
                $('.inner' + weekday[i]).append(
                    '<tr><td class="' + teamId + ' calendarSquare">' +
                    '</td></tr>'
                );
            } else {
                $('.innerEftermiddag' + weekday[i]).append(
                    '<tr><td class="' + teamId + ' calendarSquare">' +
                    '</td></tr>'
                );
            }



            //Adds table with teams
            if (teams[i][e] !== undefined) {
                var inTable = false;
                if (teamCalendar == null) {
                    teamCalendar = new Array();
                    teamCalendar.push([[teamId], [teams[i][e].teamMaxParticipants], []]);
                }
                /*for(var k = 0; k < teams.length; k++){*/
                for (var j = 0; j < teamCalendar.length; j++) {

                    if (teamCalendar[j][0].toString() == teamId) {
                        inTable = true;
                        deltagerAntal = teamCalendar[j][2].length;
                        break;
                    }
                }
                if (inTable == false) {
                    teamCalendar.push([[teamId], [teams[i][e].teamMaxParticipants], []]);

                }
                /*}*/


                //teamname
                $('.' + teamId).append('<div class="teamName">' + teams[i][e].teamName + '</div>');
                //start and end
                $('.' + teamId).append('<div class="teamTime">' + teams[i][e].teamStart + ' - ' + teams[i][e].teamEnd + '</div>');
                //team duration
                $('.' + teamId).append('<div class="teamDuration">' + teams[i][e].teamDuration + ' min' + '</div>');
                //Location
                $('.' + teamId).append('<div class="lokation">' + teams[i][e].teamLocation + '</div>');
                //Trainer
                $('.' + teamId).append('<div class="teamTrainer">' + teams[i][e].teamTrainer + '</div>');
                //Participants
                $('.' + teamId).append('<div> <span class="deltagerCounter"></span>' + '/' + teams[i][e].teamMaxParticipants + '</div>');

                if (user != null) {
                    //participate button
                    $('.' + teamId).append(buttonHTML);
                }
                /*$('.deltagerCounter').text(teamCalendar[i][2].length);*/


            }

        }

    }


    $(".cube").click(function () {
        //use a class, since your ID gets mangled
        var clickedTeam = $(this).closest('td').attr('class').split(' ')[0];
        if ($(this).hasClass('rotate') == true) {
            $(this).removeClass('rotate');
            for (var i = 0; i < teamCalendar.length; i++) {
                if (teamCalendar[i][0] == clickedTeam) {
                    teamCalendar[i][2].pop(user);
                    /*deltagerAntal = teamCalendar[i][2].length;*/
                    localStorage.setItem('teamCalendar', JSON.stringify(teamCalendar));
                    $('.' + clickedTeam + ' span').text(teamCalendar[i][2].length);
                }
            }
        } else {
            for (var i = 0; i < teamCalendar.length; i++) {
                if (teamCalendar[i][0] == clickedTeam) {
                    if (checkDeltager(i) == false) {
                        teamCalendar[i][2].splice(0, 0, user);
                        localStorage.setItem('teamCalendar', JSON.stringify(teamCalendar));
                        /*deltagerAntal = teamCalendar[i][2].length;*/
                        $('.' + clickedTeam + ' span').text(teamCalendar[i][2].length);
                        $(this).addClass('rotate'); //add the class to the clicked element
                    } else {
                        alert('du deltager allerede');
                    }
                }
            }
        }
    });

    $('.teamName, .teamTime, .teamDuration, .lokation, .teamTrainer, .deltagerCounter').click(function () {
        modal.style.display = "block";
        selectedName = $(this).closest('td').attr('class').split('-')[0];
        var selectedNameTry = $(this).closest('td').attr('class').split('-');
        var selectedNameTry1 = '';

        for (var k = 0; k < selectedNameTry.length; k++) {

            if (isNaN(parseInt(selectedNameTry[k].toString())) && selectedNameTry1 === '') {
                var selectedNameTry1 = selectedNameTry[k].toString();
            } else if (isNaN(parseInt(selectedNameTry[k].toString()))) {
                selectedNameTry1 = selectedNameTry1 + ' ' + selectedNameTry[k].toString();
            }
        }
        console.log(selectedNameTry1);



        for (var i = 0; i < teams.length; i++) {
            for (var j = 0; j < teams[i].length; j++) {
                if (teams[i][j].teamName == selectedName) {
                    var selectedTeam = teams[i][j];
                }
            }
        }

        $('.modal-contentName').html(selectedName);
        $('.modal-contentBeskrivelse').html(selectedTeam.teamDescription);
        $('.modal-trainer').html(selectedTeam.teamTrainer);
    });

    checkCalendar();
    myFunction();

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
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

function updateDeltagere() {
    $('.' + clickedTeam + ' span').text(teamCalendar[i][2].length);
}

function checkDeltager(i) {

    for (var j = 0; j < teamCalendar[i][2].length; i++) {
        if (teamCalendar[i][2][j].email == user.email) {
            return true;
        }
    }
    return false;
}

function checkCalendar() {
    for (var i = 0; i < teamCalendar.length; i++) {
        for (var j = 0; j < teamCalendar[i][2].length; j++) {
            if (teamCalendar[i][2][j].email == user.email) {
                $('.' + teamCalendar[i][0].toString()).find('.cube').addClass('rotate');
            }
        }
        $('.' + teamCalendar[i][0].toString()).find('.deltagerCounter').text(teamCalendar[i][2].length);
    }

}


/*for(var i )
    deltagerAntal = teamCalendar[i][2].length;
    
    // FUNCTION FOR RESPONSIVE TABLE
*/
function myFunction() {

    var day = new Date().getDay() - 1;
    if (x.matches) { // If media query matches
        dayButtons();
        $('.godForm').hide();
        for (var i = 0; i < weekday.length; i++) {
            if (weekday[i] == weekday[day] && currentWeek == 0) {
                $('#' + weekday[day]).append();
                $('#' + weekday[day]).show();
                $('.inner' + weekday[day]).show();
                $('.innerEftermiddag' + weekday[day]).show();
            } else if (currentWeek !== 0 && i == 0) {
                $('#' + weekday[0]).show();
                $('.inner' + weekday[0]).show();
                $('.innerEftermiddag' + weekday[0]).show();
            } else {
                $('#' + weekday[i]).hide();
                $('.inner' + weekday[i]).hide();
                $('.innerEftermiddag' + weekday[i]).hide();
            }
        }
    } else {
        $('.godForm').show();
        for (var i = 0; i < weekday.length; i++) {
            $('#' + weekday[i]).show();
            $('.inner' + weekday[i]).show();
            $('.innerEftermiddag' + weekday[i]).show();
        }

    }
}

function dayButtons() {

    $('.dayButtons').on('click', function () {
        if ($(this).attr("onClick") == undefined) {
            var dag = $(this).val();
            for (var i = 0; i < weekday.length; i++) {
                if (weekday[i] == weekday[dag]) {
                    $('#' + weekday[dag]).show();
                    $('.inner' + weekday[dag]).show();
                    $('.innerEftermiddag' + weekday[dag]).show();
                } else {
                    $('#' + weekday[i]).hide();
                    $('.inner' + weekday[i]).hide();
                    $('.innerEftermiddag' + weekday[i]).hide();
                }
            }
        }

    });

}


$(document).ready(function () {
    for (var i = 0; i < teams.length; i++) {
        teams[i].sort(dynamicSort('teamStart'));


    }


    buildTable();


    // Week + Buttons
    $(".buttonMid").text('UGE ' + week.toString());

    $(".buttonMidRight").click(function () {
        if (currentWeek < 2)
            currentWeek++;
        else
            alert("Det er ikke muligt at booke mere end to uger frem. Vh. God Form :)")

        $(".buttonMid").text('UGE ' + (week + currentWeek).toString());


        $('#dynamicTable').slideUp(400).slideDown(400);
        setTimeout(buildTable, 400);

    });
    $(".buttonMidLeft").click(function () {
        if (currentWeek > 0)
            currentWeek--;
        else
            alert("Det er ikke muligt at gå tilbage i tiden :)")

        $(".buttonMid").text('UGE ' + (week + currentWeek).toString());
        $('#dynamicTable').slideUp(400).slideDown(400);
        setTimeout(buildTable, 400);
    });
});




// --------------------------------
