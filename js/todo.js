const toDoForm = document.getElementById("todo-form");
const toDoInput =document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function deleteToDo(event){
  const li =event.target.parentElement;//각 x 버튼 연결설정
  li.remove();
}

function paintToDo(newTodo){
const li =document.createElement("li");
const span=document.createElement("span");
span.innerText=newTodo;
const button=document.createElement("button");
button.innerText="❌";
button.addEventListener("click",deleteToDo);
li.appendChild(span); //li 안에 span 넣기
li.appendChild(button);
toDoList.appendChild(li);
}


function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo =toDoInput.value; //데이터 복사
  toDoInput.value=""; //입력공간 비우기
  paintToDo(newTodo); 
}


toDoForm.addEventListener("submit",handleToDoSubmit);