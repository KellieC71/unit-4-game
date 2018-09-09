var wins = 0;
var losses = 0;
var computerNumber; 
var userScore = 0; 
var emeraldImg = $("#emeraldImg");
var rubyImg = $("#rubyImg");
var diamondImg = $("#diamondImg");
var showScore = $("#score");
var showcompscore = $("#compscore");
var winscore = $("#wins");
var lossescore = $("#losses");
var purpleGemImg = $("#purpleGemImg");
showScore.text(userScore);
winscore.text(wins);
lossescore.text(losses);

// console.log(computerNumber);
// console.log(wins);
// console.log(losses);

// $("#rubyImg").click(function(){
    jewelNumbers = function () {
    var ruby = Math.floor(Math.random() * 20) + 1 ;
    var emerald = Math.floor(Math.random() * 20) + 1 ;
    var diamond = Math.floor(Math.random() * 20) + 1 ;
    var purpleGem = Math.floor(Math.random() * 20) + 1 ;
    purpleGemImg.attr("gemNumber", purpleGem);
    emeraldImg.attr("gemNumber", emerald);
    rubyImg.attr("gemNumber", ruby);
    diamondImg.attr("gemNumber", diamond);
    // userScore = userScore + ruby; 
    // showScore.innerHTML = userScore;
    // console.log(ruby + "rub");
    // console.log(userScore + "user");
    console.log (emerald);
    console.log (ruby);
    console.log (diamond);
    console.log (purpleGem);

};

jewelNumbers();

gencomptnumber = function (){
    computerNumber = Math.floor(Math.random() * 100) + 1 ; 
console.log (computerNumber);
showcompscore.text(computerNumber);
};

gencomptnumber();

$(".jewels").click(function(){
   var jewelvalue = ($(this).attr("gemNumber"));
   jewelvalue = parseInt(jewelvalue);
   console.log (jewelvalue);
   userScore += jewelvalue;
   console.log (userScore + "jewel");
   if(userScore == computerNumber){
    wins++; 
    console.log(wins);
    winscore.text (wins);
    userScore = 0;
    gencomptnumber();
    jewelNumbers();
} else if(userScore > computerNumber){
    losses++
    console.log(losses);
    lossescore.text (losses);
    userScore = 0;
    gencomptnumber();
    jewelNumbers();
};
   showScore.text (userScore);
});



// var html = 
//             "<p>computer Score: " + computerNumber + "</p>"+
//             "<p>" + emeraldImg + "</p>";
//             // "<img id = \"emeraldImg\" src=\"Emerald.jpg\" width=\"200px\" height=\"200px\">"
// 			// "<p>Losses: " + losses + "</p>" +
// 			// "<p>Guesses Left: " + numGuesses + "</p>" +
// 			// "<p>User Score: " + userScore + "</p>";

//             var jewel = $("#emeraldImg");
//             jewel.innerHTML = html;
            
   

// function emeraldAdd(){
//         var emerald = Math.floor(Math.random() * 20) + 1 ; 
//         userScore = userScore + emerald; 
//         console.log(emerald);
//         console.log(userScore);
    
// }
// function diamondAdd(){
//     var diamond = Math.floor(Math.random() * 20) + 1 ; 
//     userScore = userScore + diamond; 
//     console.log(diamond);
//     console.log(userScore);
// }

// function rubyAdd(){
//     var ruby = Math.floor(Math.random() * 20) + 1 ; 
//     userScore = userScore + ruby; 
//     console.log(ruby);
//     console.log(userScore);
// }

// emeraldImg.onclick=emeraldAdd;
// diamondImg.onclick=diamondAdd;
// rubyImg.onclick=rubyAdd;







//             document.getElementById("rubyImg").onclick = function(event) {
//     userScore = userScore + ruby; 
//     console.log(userScore);
// }


    // if (userScore === computerNumber) {
    //     wins++;
    // }

    // if (userScore < computerNumber) {
    //     userScore = userScore + clicked; 
    // }

    // if (userScore > computerNumber) {
    //     losses++;
    // }
       
   

