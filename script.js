function sendMessage(){

let input = document.getElementById("userInput").value
let messages = document.getElementById("messages")

messages.innerHTML += "<p><b>You:</b> "+input+"</p>"

let reply = analyzeMarket(input)

messages.innerHTML += "<p><b>Shanzida:</b> "+reply+"</p>"

}

function analyzeMarket(text){

let rand = Math.random()

if(rand > 0.6){
return "Market going UP probability 80%"
}

else if(rand > 0.3){
return "Market going DOWN probability 75%"
}

else{
return "Market sideways wait for confirmation"
}

}
