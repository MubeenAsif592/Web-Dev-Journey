const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openModal(){
    modal.classList.add("show");
}

function closeModal(){
    modal.classList.remove("show");
}

openBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);

modal.addEventListener("click",function(event){
    if(event.target === modal){
        closeModal();
    }
});

document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        closeModal();
    }
});
