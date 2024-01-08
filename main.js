const DB_KEY='localTickets';
const toolBoxPriorityContainer=document.querySelector('.toolbox')

const addBtn=document.querySelector('.add-btn');
const delBtn=document.querySelector('.add-btn');
const modal=document.querySelector('.modal');

const modalCloseBtn=document.querySelector('.fa-xmark');

addBtn.addEventListener('click',()=>{
    modal.style.display='flex';   
})

modalCloseBtn.addEventListener('click',()=>{
    modal.style.display='none';   
})


function saveTaskList(){

    localStorage.setItem(DB_KEY,JSON.stringify(taskList))

}

function getTaskList(){
    return JSON.parse(localStorage.getItem(DB_KEY));

}