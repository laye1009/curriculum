var test = document.getElementsByClassName('l_text');
var im = document.querySelector('.profile img');
function displayDim(displ,dim){
    for(var i = 0; i <test.length;i++)
    {
        test[i].style.display = displ;
    }
    im.style.width = dim;
}
function myresizeEvent(){
    if(window.innerWidth < 768)
    {
        displayDim("none","75%");
        
    }
    if(768 <= window.innerWidth)
    {
        displayDim("contents","20%");
    }
}
function ongletManage(clicked_element){
    clicked_element[i].addEventListener("click",function(e){
        //var htmlVal = competences.getElementByClass(innerHTML);
        //container.appendChild(competences);
        var node_parent =e.target.parentNode;
        var delement = node_parent.getAttribute("data-element");
        console.log(delement);
        if (delement == "competences") {
            console.log('ef');
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
    });
}

//console.log(test[1].style.display(');
var sidebar = document.querySelector(".sidebar");
var menu = document.querySelector("#btn");

//if(window.innerWidth <768) 

var competences = document.querySelector('.competences');
var experiences = document.querySelector('.experiences');
var formation = document.querySelector('.formation');
var dashboard = document.querySelector('.dashboard');

var container = document.querySelector('.container');
menu.onclick  = function(){
    sidebar.classList.toggle("active");
    var side_classe = Array.from(sidebar.classList);
    if(side_classe.indexOf('active') !=-1){
        displayDim("none","75%");
        container.style.left = "7%";
    } else
    {
        displayDim("contents","20%");
        container.style.left = "22%";
    }
}

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
console.log(lacoste.style);

var clients = document.querySelector(".clients");

for(var i =0; i < clientEl.length;i++) {
    clientEl[i].addEventListener("click",function(e){
        var d = e.target.className.split(" ")[2];
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
        if (d =="lacoste") {
            clients.innerHTML= "";
            clients.appendChild(lacoste);
            lacoste.classList.remove("lacostec");
        }
    })
}
window.onresize = myresizeEvent;