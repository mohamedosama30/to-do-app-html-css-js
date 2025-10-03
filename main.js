const inputBox =document.getElementById('input-box');
const listContanir =document.getElementById('list-contanir');

function addtask(){  
    if(inputBox.value === ''){
        alert("You Shoud write something!")
      
    }else{
        let li = document.createElement("li");
        // this line it's men bot (li) in inputBox(input)
        li.innerHTML = inputBox.value; 
        listContanir.appendChild(li);
            inputBox.value = '';
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

    }
}

listContanir.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
