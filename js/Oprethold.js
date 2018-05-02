
// STARTHOUR
    for (var i = 0; i <= 23; i++) {
        let select = document.getElementById('startHours');
        var opt = document.createElement('option');
        var hours = i;
        opt.value = i;
        if (hours.toString().length == 1) {
            opt.innerHTML = '0' + hours;
        } else {
            opt.innerHTML = hours;

        }
        select.appendChild(opt);
    }

    function myFunction() {
        var x = document.getElementById("startHours");
        var i = x.selectedIndex;
        var text = x.options[i].text;
        var first = text;
        return first;
    }

    // STARTMINUTES

    for (var i = 0; i <= 55; i += 5) {
        let select = document.getElementById('startMinutes');
        let opt = document.createElement('option');
        let minutes = i;
        opt.value = i;
        if (minutes.toString().length == 1) {
            opt.innerHTML = '0' + minutes;
        } else {
            opt.innerHTML = minutes;
        }
        select.appendChild(opt);
    }

    function myFunction2() {
        var x = document.getElementById("startMinutes");
        var i = x.selectedIndex;
        var text = x.options[i].text;
        var second = text;
        return second;

    }

    // ENDHOURS

    for (var i = 0; i <= 23; i++) {
        let select = document.getElementById('endHours');
        let opt = document.createElement('option');
        let hours = i;
        if (hours.toString().length == 1) {
            opt.innerHTML = '0' + hours;
        } else {
            opt.innerHTML = hours;

        }
        opt.value = i;
        select.appendChild(opt);
    }

    function myFunction3() {
        var x = document.getElementById("endHours");
        var i = x.selectedIndex;
        var text = x.options[i].text;
        var third = text;
        return third;

    }

    //ENDMINUTS

    for (var i = 0; i <= 55; i += 5) {
        let select = document.getElementById('endMinutes');
        let opt = document.createElement('option');
        let minutes = i;
        if (minutes.toString().length == 1) {
            opt.innerHTML = '0' + minutes;
        } else {
            opt.innerHTML = minutes;

        }
        opt.value = i;
        select.appendChild(opt);
    }

    function myFunction4() {
        var x = document.getElementById("endMinutes");
        var i = x.selectedIndex;
        var text = x.options[i].text;
        var fourth = text;
        return fourth;
    }

    function calculateDuration() {
        var min1 = myFunction3() * 60 + myFunction4() * 1;
        var min2 = myFunction() * 60 + myFunction2() * 1;

        var theTime = ((min1 - min2));

        document.getElementById("duration").innerHTML = theTime

        return theTime;

    }


    function teamStartTime() {
        var startHour = myFunction();
        var startMinut = myFunction2();
        return startHour + ":" + startMinut;
    }

    function teamEndTime() {
        var endHour = myFunction3();
        var endMinutes = myFunction4();
        return endHour + ":" + endMinutes;
    }


    // TAGER INFO FRA FORM  
    function storeTeamLocation() {
        var locationId = document.getElementById("lokation");
        var newLokationName = locationId.value.toString();
        return newLokationName;
    }

    function storeTeamName() {
        var nameId = document.getElementById("holdnavn");
        var newTeamName = nameId.value.toString();
        return newTeamName;
    }


    function storeMaxParticipants() {
        var maxParticipantId = document.getElementById("maxDeltagere");
        var newMaxParticipants = parseInt(maxParticipantId.value);

        return newMaxParticipants;
    }

    function trainerSelect() {
        var x = document.getElementById('trainers');
        var i = x.selectedIndex - 1;
        return trainerArray[i].trainerName;

    }
    
    function storeWeekDays (){
        var selectedDay = [];
        if(document.getElementById('monday').checked == true){
            selectedDay.push(0);
        }
        if(document.getElementById('tuesday').checked == true){
            selectedDay.push(1);
        }
        if(document.getElementById('wednesday').checked == true){
            selectedDay.push(2);
        }
        if(document.getElementById('thursday').checked == true){
            selectedDay.push(3);
        }
        if(document.getElementById('friday').checked == true){
            selectedDay.push(4);
        }
        if(document.getElementById('saturday').checked == true){
            selectedDay.push(5);
        }
        if(document.getElementById('sunday').checked == true){
            selectedDay.push(6);
        }
        return selectedDay;
    }
    

    function storeTeamDescription (){
        return document.getElementById('description').value.toString();
        
    }

    document.getElementById("opretHold").addEventListener("click", function() {
        var newTeam = new TeamObject(
            storeTeamName(),
            teamStartTime(),
            teamEndTime(),
            calculateDuration(),
            trainerSelect(),
            storeTeamLocation(),
            storeMaxParticipants(),
            storeTeamDescription(),
            storeWeekDays(),
            document.getElementById('eachWeek').checked
        );
         var lsTeam = localStorage.getItem('newTeam_Data');
            if (lsTeam != null) {
                lsTeamsArray = JSON.parse(lsTeam);
            } else {
                lsTeamsArray = new Array();
            }

            lsTeamsArray.push(newTeam);

            localStorage.setItem('newTeam_Data', JSON.stringify(lsTeamsArray));
        
        console.log(newTeam);
    });