let a;
let date;
let time;

setInterval(() => {
  a = new Date();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  date = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
  document.getElementById("id").innerHTML = time + " On " + date;
}, 1000);
