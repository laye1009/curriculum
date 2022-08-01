var name="John";/*déclaration de variable*/
console.log(name);// équivalent de print dans python. ouvrir le console du fichier html pour voir
//var my_new=string1+""+string2 /*concatener les chaines de caractères string1 et string2*/
var x=5;
var mybool=(x===5);//si x=5. les trois égalité prend en compte les type dans les comparaisons.si //== le type n'est pas pris en compte
x!==5 // si x est différent de 5
var y=12;
var mybool=(x>3 && y<12);//&& les deux condtions sont vraies le ou se traduit par ||. 
// !true = not true
/*
if(condition)
    {
        console.log("exécute ce code")
    }
else if(condition2){
    
}
else{
    console.log("alores exécute ce code là")
}

var favoriteCol= ;*/
/*
switch("yellow"){
    case "yellow": //réunit les cs yellow et blue qui partage la même instruction
    case "blue":
        console.log("la bleue est belle");
        break;
    case "red":
        console.log("j'aime la voiture rouge");
        break;
    default:
        console.log("je ne connais pas cette couleur")
}*/
/*
function name(paramètre1,paramètre2...){
    code à exécuter
    resultMult=param1*param2 // définit une variable globale reconnue en dehors de la fonction
    return resultat
}

var exécute=name(param1,param2)

//les variables définies dans des fonctions ne sont reconnues que dans ces fonctions*/

/*var fruits=["pomme","banane","orange","citron"];
//fruits.lenght: donne la longueur. fruits[0]: donne le premier élement
for(var i=0;i<=fruits.length;i++){
    console.log(fruits[i])
}

fuits.push("kiwi"); // rajoute kiwi à la liste
fruits.pop();//enlève la dernière valeur
fruits.slice(2,4) // donne les élément d'index entre 2 et 4 exclu
//fruit[0][1] si on a une liste de liste*/

/*objets
var dog=new Object(); // création d'un objet
dog.name="choupette";
dog.color="white";
dog.age=5;
dog.aboie=function(number){
    while(number>0){
        console.log(number.toString()+"wouaf");
        number--;// enlève 1 de number
    }
}; //warning au ;
dog.aboie(4);//appel de la fonction*/

/*les fonctions constructeur (de chien par exemple)*/

function Dog(name,color,age)
{
    this.name=name;
    this.color=color;
    this.age=age;
    this.aboie=function()
    {
        console.log("wouaf");
    }
}
var caniche=new Dog("choupette","white",4);// appel de la classe Dog
console.log(caniche);