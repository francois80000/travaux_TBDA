var nom = window.prompt("Saisissez votre nom");

var prenom = window.prompt("Saisissez votre prénom");


if (window.confirm("Etes-vous un homme ?") == true) 
{ 
    var genre = "Monsieur"
}
else 
{
    var genre= "Madame"
}

window.alert("Bonjour " + genre + " " + nom + " " + prenom + "\nBienvenue sur notre site web");