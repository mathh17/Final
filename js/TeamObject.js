
     function TeamObject (teamName, teamStart, teamEnd, teamDuration, teamTrainer, teamLocation, teamMaxParticipants, teamDescription, teamActiveDays, teamEachWeek){
        this.teamName = teamName;
        this.teamStart = teamStart;
        this.teamEnd = teamEnd;
        this.teamDuration = teamDuration;
        this.teamTrainer = teamTrainer;
        this.teamLocation = teamLocation;
        this.teamMaxParticipants = teamMaxParticipants;
        this.teamDescription = teamDescription;
        this.teamActiveDays = teamActiveDays;
        this.teamEachWeek = teamEachWeek;
    }
    
if(localStorage.getItem('newTeam_Data') == null){
    var EgenStyrke = new TeamObject(
            'EgenStyrke',
            '08:30',
            '09:25',
            55,
            'Anders',
            'Salen',
            10,
            '1 times styrketræning, hvor en instruktør er tilrådighed til hjælp og motivation. 15 min fælles opvarmning på kredsløbsmaskinerne og derefter 30-45 min individuel styrketræning - evt. med fælles afslutning i salen. Du træner dit eget program, men er stadig på hold og med mulighed for at få hjælp af en instruktør.',
            [0,2,4,6],
            false
        );
    var Fitpump = new TeamObject(
            'Fitpump',
            '08:30',
            '09:30',
            60,
            'Kathrine R',
            'Styrkesalen',
            12,
            'Træning i maskinerne med instruktør. Vi bruger skiftevis Cardiomaskinerne og styrketræningsmaskinerne så vi både for pulsen højt op og vi får arbejdet med musklerne. Vi har det næsten altid skægt undervejs. Det er samtidig meget socialt, så hvis du gerne vil styrketræne men syntes det er kedeligt at gøre alene, så er Cirkeltræning noget for dig.',
            [1,3,5],
            false
        );
        var fitpumpX = new TeamObject(
            'Fitpump X',
            '13:00',
            '14:00',
            60,
            'Søren',
            'Udendørs',
            20,
            'Hardcore bodyPump!',
            [3,6],
            false
        );
    var fitWalk = new TeamObject(
            'FitWalk',
            '14:00',
            '14:30',
            30,
            'Katrine',
            'Salen',
            10,
            'Få en god gåtur på løbebåndene',
            [0,2,4],
            false
        );
        var teamData = [EgenStyrke,Fitpump,fitpumpX,fitWalk];
        localStorage.setItem('newTeam_Data', JSON.stringify(teamData));
    
}
