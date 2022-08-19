const longinInput = document.querySelector("#login-form input");
const longinButton = document.querySelector("#login-form button");



function onLoginBtnClick(){
  console.log(longinInput.value);
}

longinButton.addEventListener("click", onLoginBtnClick);