const create = document.querySelector(".create");
const textBox = document.querySelector("#add");
const list = document.querySelector('.list');
const btnAdd = document.querySelector(".add");

// to add to list
const toDo = function(content){

    console.log(content);
    // list.innerHTML = " ";
    html =  `
    <li class="list--items">
    <p>${textBox.value}</p>
    <ion-icon class="add cross" name="close-outline"></ion-icon>
    </li>
    
    
    `;
    list.insertAdjacentHTML('afterbegin',html);

};

// to remove from list
list.addEventListener('click',function(e){
e.target.closest(".list--items").remove()
        

})


btnAdd.addEventListener('click',function(e){
    if(!textBox.value) return;
    // content.push();
    toDo(textBox.value);
    textBox.value = "";
    

});


