function onClickHamb() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const onClickMenuLinks = ()=>{
  let width = window.screen.width;;
  let menu = document.getElementById('myLinks')

  if(width <= 480){
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
}
