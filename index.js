const popUp = document.querySelector(".pop-up")
const noOfMoves = document.querySelector("#moves");
const emojiList = document.querySelectorAll("#emoji");
const cards = document.querySelectorAll(".card");
const popUpMove = document.getElementById("move");
const emojis = ["😍","😍","😇","😇","😵‍💫","😵‍💫", "🙂","🙂", "🥹","🥹","🥴","🥴","🫠","🫠","🥵","🥵"];
const shuffleEmoji = emojis.sort( ()=> (Math.random() > 0.5) ? 2 : -1);

var lengthOfList = emojiList.length;
var count = 0;

//Create board
for(var i = 0 ; i < lengthOfList ; i++){
    var currentCard = emojiList[i] ;
    var currentEmoji = shuffleEmoji[i];
    currentCard.innerText = ` ${currentEmoji}`;
}


//Flip card on user click
cards.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.classList.add("flip-card");
        count++;

        const moves = document.getElementById("moves");
        moves.innerText = count ;

        var userChoice = document.querySelectorAll(".flip-card") ;
        var userChoiceList = document.querySelectorAll(".swap-card");

        //To check whether selected cards are equal or not
        setTimeout(function(){

            if(userChoice.length > 1){

                if(userChoice[0].firstElementChild.innerText === document.querySelectorAll(".flip-card")[1].firstElementChild.innerText){
                    userChoice[0].classList.add("flip-card");
                    userChoice[1].classList.add("flip-card");

                    userChoice[0].classList.add("swap-card");
                    userChoice[1].classList.add("swap-card");

                    userChoice[0].classList.remove("flip-card");
                    userChoice[1].classList.remove("flip-card");


                    if(userChoiceList.length == 14){
                        popUp.classList.add("open");
                        popUpMove.innerText = count;
                    }
                }else{
                    userChoice[1].classList.remove("flip-card");
                    userChoice[0].classList.remove("flip-card");
                }
            }
        }, 400)

    })
})


