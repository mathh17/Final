    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function checkForUser(){
    var userNameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    
    
    var validEmail = emailRegex.test(userNameInput);
        if(validEmail == false){
            alert('The email you have entered is invalid')
        }
    
    for(index in users ){
        var user = userData[index];
        
        if(userNameInput == user.email && passwordInput == user.password){
            return alert('Logged in as ' + user.first_name +  ' ' + user.last_name);
        }
        
    }
    
}