let count = 0;
function updateCount(){
    document.getElementById('count').innerHTML = count;
}

function plusCount(){
    count++;
    updateCount();
}

function negativeCount(){
    count--;
    updateCount();
}

function resetCount(){
    count = 0;
    updateCount();
}

function saveCount(){
    localStorage.setItem("count",count);
}

function loadCount(){
    let saved = localStorage.getItem("count");
    if(saved !== null){
        count = Number(saved);
    }   
    updateCount();
}

