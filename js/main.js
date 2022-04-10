var test = document.getElementsByClassName('l_text');
var im = document.querySelector('.profile img');
function myresizeEvent(){
    if(window.innerWidth < 768)
    {
        for(var i = 0; i <test.length;i++)
        {
            test[i].style.display = "none";
        }
        im.style.width = "100%";
    }
    if(768 <= window.innerWidth)
    {
        for(var i = 0; i <test.length;i++)
        {
            test[i].style.display = "contents";
        }
        im.style.width = "20%";
    }
}
window.onresize = myresizeEvent;

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
}

arraySide = sidebar.getElementsByTagName('li');
for(var i=0;i<arraySide.length;i++){
    arraySide[i].addEventListener("click",function(e){
        //var htmlVal = competences.getElementByClass(innerHTML;
        //container.appendChild(competences);
        var delement = e.target.getAttribute("data-element");
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
    });
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