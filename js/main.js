
// défilement
var msg = "N'hésitez à me contacter, je serai ravi de répondre à vos besoins";
var parag = document.querySelector("#phead");
var pos =90;

function defilText(){
    parag.innerHTML=msg;
    parag.style.left=pos+"%";
    pos -= 1;
    if(pos==-50) pos=100;
    setTimeout("defilText()",200);
}
//
var test = document.getElementsByClassName('l_text');

function ongletManage(clicked_element){
    clicked_element[i].addEventListener("click",function(e){
        //var htmlVal = competences.getElementByClass(innerHTML);
        //container.appendChild(competences);
        var node_parent =e.target.parentNode;
        var delement = node_parent.getAttribute("data-element");
        if (delement == "competences") {
            container.innerHTML="";
            container.appendChild(competences);
            competences.classList.remove("competences");
            delete delement;
        }
        if (delement == "experiences") {
            container.innerHTML="";
            container.appendChild(experiences);
            experiences.classList.remove("experiences");
            delete delement;
        }
        if (delement == "formation") {
            container.innerHTML="";
            container.appendChild(formation);
            formation.classList.remove("formation");
            delete delement;
        }
        if (delement == "realisation") {
            container.innerHTML="";
            container.appendChild(realisation);
            realisation.classList.remove("realisation");
            delete delement;
        }
    });
}

//console.log(test[1].style.display(');
var sidebar = document.querySelector("#navbarSupportedContent");
//var menu = document.querySelector("#btn");*/

//if(window.innerWidth <768) 

var competences = document.querySelector('.competences');
var experiences = document.querySelector('.experiences');
var formation = document.querySelector('.formation');
var realisation = document.querySelector('.realisation');

var container = document.querySelector('.container');

arraySide = sidebar.getElementsByTagName('a');
for(var i=0;i<arraySide.length;i++){
    ongletManage(arraySide);
}

////////////////
var clients = document.getElementById("sousMenu");
var clientEl = clients.getElementsByTagName("li");
var compet = document.querySelector(".competences");

var darty = document.querySelector(".dartyc");
var electro = document.querySelector(".electroc");
var lacoste = document.querySelector(".lacostec");

var clients = document.querySelector(".clients");

for(var i =0; i < clientEl.length;i++) {
    clientEl[i].addEventListener("click",function(e){
        var d = e.target.className.split(" ")[3];
        if (d =="fnac") {
            clients.innerHTML= "";
            clients.appendChild(darty);
            darty.classList.remove("dartyc");
        }
        if (d =="electro") {
            clients.innerHTML= "";
            clients.appendChild(electro);
            electro.classList.remove("electroc");
        }
    })
}
//window.onresize = myresizeEvent;
window.onload=defilText();