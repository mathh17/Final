var user = JSON.parse(localStorage.getItem('loggedInUser'));

$('.opretHold').hide();
    
    if(user != null){
    if(user.email == 'admin@godform.dk'){
      $('.opretHold').show();  
    }
    }
