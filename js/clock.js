const clock = document.querySelector("h2#clock");

function getClock(){
  const date =new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //date.gethours()은 숫자이므로 padstart 할려면 string으로 변환해주어야한다.
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText =`${hours}:${minutes}:${seconds}`;
 
}

getClock();//새로고침할때 오류 막기위해 설정
setInterval(getClock,1000); //1초마다 반복 (실시간)