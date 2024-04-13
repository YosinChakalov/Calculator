let calcbtn = document.querySelector(".calcApkImg");
let dialog_main = document.querySelector(".dialog_main");
let formbtns = document.querySelector(".form_1");
let mini_answer = document.querySelector(".small_answer");
let deletone = document.querySelector(".deletone");
let h2 = document.querySelector(".h2");
let info = document.querySelector(".info");
let cancelbtn = document.querySelector(".cancelBtn");

calcbtn.onclick = () => {
  dialog_main.showModal();
};

formbtns.onsubmit = (e) => {
  e.preventDefault();
};
formbtns["one"].onclick = () => {
 h2.innerHTML += formbtns["one"].value;
};
formbtns["two"].onclick = () => {
 h2.innerHTML += formbtns["two"].value;
};
formbtns["three"].onclick = () => {
 h2.innerHTML += formbtns["three"].value;
};
formbtns["four"].onclick = () => {
 h2.innerHTML += formbtns["four"].value;
};
formbtns["five"].onclick = () => {
 h2.innerHTML += formbtns["five"].value;
};
formbtns["six"].onclick = () => {
 h2.innerHTML += formbtns["six"].value;
};
formbtns["seven"].onclick = () => {
 h2.innerHTML += formbtns["seven"].value;
};
formbtns["eight"].onclick = () => {
 h2.innerHTML += formbtns["eight"].value;
};
formbtns["nine"].onclick = () => {
 h2.innerHTML += formbtns["nine"].value;
};
formbtns["zero"].onclick = () => {
 h2.innerHTML += formbtns["zero"].value;
};
formbtns["plus"].onclick = () => {
 h2.innerHTML +=formbtns["plus"].value;
};
formbtns["minus"].onclick = () => {
 h2.innerHTML +=formbtns["minus"].value;
};
formbtns["multiply"].onclick = () => {
 h2.innerHTML +=formbtns["multiply"].value;
};
formbtns["divide"].onclick = () => {
 h2.innerHTML +=formbtns["divide"].value;
};
formbtns["percent"].onclick = () => {
 h2.innerHTML += formbtns["percent"].value;
};
formbtns["neg-pos"].onclick = () => {
 h2.innerHTML *= -1;
};
formbtns["equal"].onclick = () => {
  info.innerHTML = eval(h2.innerHTML);
  mini_answer.innerHTML = info.innerHTML;
};
formbtns["float"].onclick = () => {
  h2.innerHTML += formbtns["float"].value;
};
deletone.onclick = () => {
  let newDelete = h2.innerHTML;
  h2.innerHTML = newDelete.slice(0, -1);
};

cancelbtn.onclick = () => {
  dialog_main.close();
};
formbtns['resetall'].onclick=()=> {
    h2.innerHTML=''
    info.innerHTML=''
    mini_answer.innerHTML=''
}