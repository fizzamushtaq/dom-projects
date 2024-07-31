// generate a random color 

const randomcolor = function () {
    const hex = "123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color;
   
}
// console.log(randomcolor());
let intervalid;
const startChangingColor = function () {
  if (! intervalid) {
    intervalid = setInterval(changbgc, 1000);
  }

    function  changbgc() {
        document.body.style.backgroundColor = randomcolor();
    }
}
document.querySelector("#start").addEventListener('click', startChangingColor)

const stopChangingColor = function () {
    clearInterval(intervalid);
    intervalid = null
    
}
document.querySelector("#stop").addEventListener('click', stopChangingColor)


