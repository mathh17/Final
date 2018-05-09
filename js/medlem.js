//Henter den loggede in User's info og sætter det ind i de respektive input bokse på medlem siden.
var user = JSON.parse(localStorage.getItem("loggedInUser"));

document.getElementById("medlemsnummer").value = user.id;
document.getElementById("ditNavn").value = user.first_name;
document.getElementById("eMail").value = user.email;
document.getElementById("adresse").value = user.address;
document.getElementById("by").value = user.by;
document.getElementById("postnummer").value = user.postnummer;
document.getElementById("telefon").value = user["phone number"];