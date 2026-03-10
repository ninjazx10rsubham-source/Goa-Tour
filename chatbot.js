const chatbot=document.getElementById("chatbot");
const button=document.getElementById("chatbot-button");
const close=document.getElementById("close-chat");

button.onclick=()=>{
chatbot.style.display="flex";
}

close.onclick=()=>{
chatbot.style.display="none";
}

function sendMessage(){

let input=document.getElementById("user-input");
let msg=input.value;

if(msg==="") return;

addMessage("You: "+msg);

let reply=getReply(msg.toLowerCase());

setTimeout(()=>{
addMessage("Bot: "+reply);
},500);

input.value="";
}

function addMessage(text){

let box=document.getElementById("chat-messages");

let div=document.createElement("div");
div.innerText=text;

box.appendChild(div);
}

function getReply(msg){

if(msg.includes("beach"))
return "Visit Baga, Calangute and Anjuna beaches.";

if(msg.includes("food"))
return "Try Goan Fish Curry and Bebinca dessert.";

if(msg.includes("places"))
return "Visit Fort Aguada and Dudhsagar Falls.";

return "Ask me about beaches, food or travel in Goa.";
}
