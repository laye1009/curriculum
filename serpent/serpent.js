//problème avec l'ffichage du score

window.onload=function() //quand la fenêtre se charge le code qui est dedans est exécuté
{
    /*var canvas;//pour que canvas ctx delay soient des variables globales utilisables par d'autres //fonctions*/
    var canvasWidth=900;
    var canvasHeight=600;
    var blocksize=30;
    var ctx;
    var delay=100;
    /*
    var xcoord=0;
    var ycoord=0;*/
    var snakee;
    var applee;
    var widthinblock=canvasWidth/blocksize;// exprime les mesures entermes de blocks de taille //blocksize
    var heightinblock=canvasHeight/blocksize;
    var score;
    var timeout;
    init();// appel de la fonction init
    function init() // fonction servant à faire des initialisations
    {
        canvas=document.createElement("canvas");
        canvas.width=canvasWidth; //pas de px dans les tailles
        canvas.height=canvasHeight;
        //canvas.style.border="1px solid";
        canvas.style.border="30px solid gray";
        canvas.style.margin="50px auto";
        canvas.style.display="block";
        canvas.style.bachgroundColor="#ddd";
        document.body.appendChild(canvas);
        
        ctx=canvas.getContext("2d"); //pas de var devant car déclaré avant
        snakee=new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]],"right");
        applee=new Apple([10,10]);
        score=0;
        refreshCanvas();
    }
    function refreshCanvas()
    {
        snakee.advance();
        if(snakee.checkcollision())
            {
                gameOver();
            
            }
        else
            {
                if (snakee.iseatingapple(applee))
                    {
                        score++;
                        snakee.ateapple=true;
                        do{
                            applee.setnewposition();
                        }
                        while(applee.onsnake(snakee)) //le while do.si la condition du while //est false les instructions dans do sont exécutées
                        // le serpent a mangé la pomme                       
                    }
                    
                ctx.clearRect(0,0,canvasWidth,canvasHeight);
                drawscore();
                snakee.draw();
                applee.draw();
                
                timeout=setTimeout(refreshCanvas,delay);
            }
        /*xcoord+=2;
        ycoord+=2;*/
        /*ctx.fillStyle="#ff0000";
        ctx.clearRect(0,0,canvasWidth,canvasHeight)
        snakee.draw();
       
        /*ctx.fillRect(xcoord,ycoord,100,50)//les deux premiers chiffres donnent les coordonnées du //rectangle dans le canvas et les deux autres la longueur et la largeur*/
        /*applee.draw();
        setTimeout(refreshCanvas,delay);*/
    }
        function gameOver()
        {
            ctx.save();
             ctx.font="bold 70px sans-serif";
            ctx.fillStyle="#000";
            ctx.textAlign="center";
            ctx.textBaseline="middle";
            ctx.strokeStyle="white"; //mettre une sorte de bordure
            ctx.lineWidth=5;
            var centrex=canvasWidth/2;
            var centrey=canvasHeight/2;
            ctx.strokeText("Game Over",centrex,centrey-180);
            ctx.fillText("Game Over",centrex,centrey);
            ctx.font="bold 30px sans-serif";
            ctx.strokeText("Appuyer sur la touche espace pour rejouer",centrex,centrey-120);
            ctx.fillText("Appuyer sur la touche espace pour rejouer",centrex,centrey-120);
            ctx.restore();
        }
        function restart()
        {
            snakee=new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]],"right");
            applee=new Apple([10,10]);
            score=0;
            clearTimeout(timeout);
            refreshCanvas();
        
        }
    
        function drawscore()
        {
            
            ctx.save();
            ctx.font="bold 200px sans-serif";
            ctx.fillStyle="gray";
            ctx.textAlign="center";
            ctx.textBaseline="middle";
            var centrex=canvasWidth/2;
            var centrey=canvasHeight/2;
            ctx.fillText(score,toString,centrex,centrey);
            ctx.restore();
        }
    function drawblock(ctx,position)
    {
        var x=position[0]*blocksize;
        var y=position[1]*blocksize;
        ctx.fillRect(x,y,blocksize,blocksize);
    }
    function Snake(body,direction)
    {
        this.body=body;
        this.ateapple=false;
        this.direction=direction;
        this.draw=function()
        {
            ctx.save();// pour ne pas modifier le context
            ctx.fillStyle="#ff0000";
            for(var i=0;i<this.body.length;i++)
                {
                    drawblock(ctx,this.body[i]);
                }
            ctx.restore();
        }
        this.advance=function()
        {
            var nextpos=this.body[0].slice();//slice pour copier l'élément
            //nextpos[0]+=1;
            //this.body.unshift(nextpos);//rajoute la case nextpos au body
            //this.body.pop();
            switch(this.direction)
                {
                    case "left":
                        nextpos[0]-=1;
                        break;
                
                    case "right":
                        nextpos[0]+=1;
                        break;
                    case "down":
                        nextpos[1]+=1;
                        break;
                    case "up":
                        nextpos[1]-=1
                        break;
                    default:
                        throw("invalid diretion");//envoie un message d'erreur
                }
            this.body.unshift(nextpos);//rajoute nexpos au serpent
            if(!this.ateapple)
                {
                    this.body.pop();
                }
                
                //this.body.pop();
            else
                {
                    snakee.ateapple=false;
                }
                
                
            //this.body.pop();
            
        };
        this.setDirection=function(newDirection)
            {
                var allowDirections;
                switch(this.direction)
                    {
                            
                        case "left":
                        case "right":
                            allowDirections=["up","down"];
                            break;
                        case "down":
                        case "up":
                            allowDirections=["left","right"];
                            break;
                        default:
                            throw("invalid diretion");
                    }
                if(allowDirections.indexOf(newDirection)>-1)// indexOf(e) retourne l'indice de l'element e. s'il ne le trouve pas dans allowDirections il renvoie -1
                    {
                        this.direction=newDirection;
                    }
            };
            this.checkcollision=function()
            {
                var wallcollision=false;
                var snakecollision=false;
                var head=this.body[0];
                var rest=this.body.slice(1); //copie position en començant par l'élément //d'indice 1
                var snakex=head[0];
                var snakey=head[1];
                var minx=0;
                var miny=0;
                var maxx=widthinblock-1;
                var maxy=heightinblock-1;
                var isntvertwall=snakex<minx || snakex>maxx;
                var isnthorizwall=snakey<miny || snakey>maxy;
                if (isntvertwall || isnthorizwall)
                    {
                        wallcollision=true;
                    }
                for(var i=0;i<rest.length;i++)
                    {
                        if (snakex===rest[i][0] && snakey===rest[i][1])
                            {
                                snakecollision=true;
                            }
                        
                    }
                return wallcollision || snakecollision;
                
            };
        this.iseatingapple=function(appletoeat)
        {
            var head=this.body[0];
            if(head[0]===appletoeat.position[0] &&head[1]===appletoeat.position[1])
                {
                    return true;
                }
            else
                return false;
        };
        
    }
    
    function Apple(position)
    {
        this.position=position;
        this.draw=function()
        {
            ctx.save();//enregistre la configuration actuelle du canvas
            ctx.fillStyle="#33cc33";
            ctx.beginPath();
            var radius=blocksize/2;
            var x =this.position[0]*blocksize+radius;
            var y =this.position[1]*blocksize+radius;
            ctx.arc(x,y,radius,0,Math.PI*2,true);
            ctx.fill();
            ctx.restore();
            
        };
        this.setnewposition=function()
        {
            var newx=Math.round(Math.random()*(widthinblock-1));
            var newy=Math.round(Math.random()*(heightinblock-1));
            this.position=[newx,newy];
            
        }
        this.onsnake=function(snaketocheck)
        {
            var isonsnake=false;
            for (var i=0;i<snaketocheck.body.length;i++)
                {
                    if(this.position[0]===snaketocheck.body[i][0] && this.position[1]===snaketocheck.body[i][1])
                        {
                            isonsnake=true;
                        }
                }
            return isonsnake;
        };
    }
    document.onkeydown=function handleKeyDown(e)
    {
        var key=e.keyCode;
        var newDirection;
        switch(key)
            {
                case 37:
                    newDirection="left";
                    break;
                case 38:
                    newDirection="up";
                    break;
                case 39:
                    newDirection="right";
                    break;
                case 40:
                    newDirection="down";
                    break;
                case 32:
                    restart();
                    return;
                default:
                    return;//arrête l'exécution de la fonction au lieu d'envoyer un message d'erreur
                    
            }
        snakee.setDirection(newDirection);
    }
    
}
 