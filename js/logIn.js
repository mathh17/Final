var loggedUser = 

function checkForUser(){
    var userNameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    
    for(index in users ){
        var user = userData[index];
        
        if(userNameInput == user.email && passwordInput == user.password){
            return alert('Logged in as ' + user.first_name +  ' ' + user.last_name);
        }
        
    }
    
}