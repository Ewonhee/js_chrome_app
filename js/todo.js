const toDoForm = document.getElementById("todo-form");
const toDoInput =document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos=[]; //const 보다 let으로 하여 기존데이터 유지

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //string 형식으로 저장하기(string으로)
}




function deleteToDo(event){
  const li =event.target.parentElement;//각 x 버튼 연결설정
  console.log(li.id);
  li.remove();
  toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li.id)); // li.id는 string이므로 nu으로 변경후 필터
  saveToDos();//필터후 저장
}

function paintToDo(newTodo){
const li =document.createElement("li");
li.id=newTodo.id;
const span=document.createElement("span");
span.innerText=newTodo.text;
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
  const newTodoObj={
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();

}


toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos =localStorage.getItem(TODOS_KEY);

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos); //arry 변환
  toDos=parsedToDos;//기존 데이터 저장
  parsedToDos.forEach(paintToDo);//foreach로 각 item(요소)에 함수 작용설정 짧은 함수버전 사용 arrowfunction사용

}

