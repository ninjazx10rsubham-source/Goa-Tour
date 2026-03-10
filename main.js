document.getElementById("modeToggle").onclick=()=>{
document.body.classList.toggle("dark-mode");
};

let count=localStorage.getItem("visits");

if(count==null){
count=1;
}else{
count++;
}

localStorage.setItem("visits",count);

let counter=document.getElementById("counter");

if(counter){
counter.innerText=count;
}

let searchBar=document.getElementById("searchBar");

if(searchBar){

searchBar.addEventListener("keyup",function(){

let filter=searchBar.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(filter)?"":"none";

});

});

}
