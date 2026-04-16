const txtInput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-text");

let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}' </span> isn't a palinderom!`;
    }
    infoTxt.innerHTML = `Yes, <span> '${txtInput.value}' </span> is a palinderom!`;
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    if(filterInput){
        return checkBtn.classList.add("active");    
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
})
