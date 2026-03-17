
async function sendMessage(){

let input = document.getElementById("userInput").value
let messages = document.getElementById("messages")

messages.innerHTML += "<p><b>You:</b> "+input+"</p>"

const response = await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"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
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{role:"system",content:"You are Shanzida, a trading assistant."},
{role:"user",content:input}
]
})
})

const data = await response.json()

let reply = data.choices[0].message.content

messages.innerHTML += "<p><b>Shanzida:</b> "+reply+"</p>

}
