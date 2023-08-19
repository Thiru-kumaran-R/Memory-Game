const noOfMoves = document.querySelector("#moves");
const emojiList = document.querySelectorAll("#emoji");
const cards = document.querySelectorAll(".card");
const time = document.querySelector("#time");
const emojis = ["😍","😍","😇","😇","😵‍💫","😵‍💫", "🙂","🙂", "🥹","🥹","🥴","🥴","🫠","🫠","🥵","🥵"];
const shuffleEmoji = emojis.sort( ()=> (Math.random() > 0.5) ? 2 : -1);
var startGame = false ;
var counter = 0;
var lengthOfList = emojiList.length;
var count = 0;


for(var i = 0 ; i < lengthOfList ; i++){
    var currentCard = emojiList[i] ;
    var currentEmoji = shuffleEmoji[i];
    currentCard.innerText = ` ${currentEmoji}`;
}

 function startCountDown(number){
        
    var timer = setInterval(() =>{
        time.innerText = `${counter}s`;
        console.log(counter);
        counter++;
    }, 1000)

    if(number == 14){
        clearInterval(timer)
    }
}
        
if(startGame){
    startCountDown()
}

cards.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.classList.add("flip-card");
        count++;
        startGame = true ;

        const moves = document.getElementById("moves");
        moves.innerText = count ;

        var userChoice = document.querySelectorAll(".flip-card") ;
        var userChoiceList = document.querySelectorAll(".swap-card");

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
                        alert("Congratulations, You Won!") ;
                        startGame = false ;
                        window.location.reload();

                    }
                }else{
                    userChoice[1].classList.remove("flip-card");
                    userChoice[0].classList.remove("flip-card");
                }
            }
        }, 400)
    
    })
})


