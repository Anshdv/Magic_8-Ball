let button = document.querySelector(".button");
button.addEventListener("click", buttonclicked);

function buttonclicked(){
    var answers = [
        "It is certain", 
        "It is decidedly so", 
        "Without a doubt", 
        "Yes - definitely",
        "Probably", 
        "You may rely on it", 
        "As I see it, yes", 
        "Most likely", 
        "Outlook good", 
        "Yes", 
        "Signs point to yes", 
        "Maybe",
        "Don't count on it", 
        "Unlikely",
        "My reply is no", 
        "My sources say no", 
        "Outlook not so good",
        "Very doubtful", 
        "Reply hazy, try again", 
        "Ask again later", 
        "Better to not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again"];

        var randomchoice = Math.floor(Math.random() * answers.length);

        document.querySelector(".eight").style.visibility = "hidden";
        document.querySelector(".answer").innerHTML = answers[randomchoice];
        document.querySelector(".answer").style.visibility = "visible";

        document.querySelector(".triangle").style.visibility = "visible";
        document.querySelector(".inner_circle").style.background = "darkgray";
        document.querySelector(".inner_circle").style.width = "235px";
        document.querySelector(".inner_circle").style.height = "235px";

}