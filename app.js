const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";// string 문장이 많이 쓰이면 대문자 변수로 전환해두고 쓴다 (국룰임)

function onLoginSubmit(event){
  event.preventDefault();//submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)
  //즉 새로고침을 막아줌(브라우저 기본기능)
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText =`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername===null) //로컬스토리지에 데이터가 있으면 h1 없으면 form으로 
{
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else
{
  paintGreetings(saveUsername);
}


