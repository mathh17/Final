var user = JSON.parse(localStorage.getItem('loggedInUser'));


if(user != null){
    if(user.email !== 'admin@godform.dk'){
      $('.opretHold').remove();  
    }
    }
