const path = "./assets/memory/images/"
let slike = [
    "d1.jpg",
    "d2.jpg",
    "d3.jpg",
    "d4.jpg",
    "d5.jpg",
    "d6.jpg",
    "d7.jpg",
    "d8.jpg",
    "d1.jpg",
    "d2.jpg",
    "d3.jpg",
    "d4.jpg",
    "d5.jpg",
    "d6.jpg",
    "d7.jpg",
    "d8.jpg"];


function promesaj() {
    let i, pom;
    for( i = 0; i < 16; i++){  
        let j = Math.round(Math.random() * 15);     
        pom = slike[i];                                
        slike[i] = slike[j];                        
        slike[j] = pom;
    }
}


let prva = null;
let druga = null;
let brParova = 0;
function dugmeKliknuto(self, num){
    if(prva == null){
        prva = self;
        self.style.backgroundImage = "url(" + path + slike[num] + ")";
    }
    else if (prva != null && druga == null) {
        druga = self;
        self.style.backgroundImage = "url(" + path + slike[num] + ")";

        //pronadjen par
        if(prva.style.backgroundImage == druga.style.backgroundImage){
            prva = null;
            druga = null;
            brParova++;
            if(brParova == 8) {
                alert("POBEDA");
                brPodeda ++;
            }
        }

        //nisu par 
        else{
            setTimeout(function() {
                prva.style.backgroundImage = "";
                druga.style.backgroundImage = "";
                prva = null;
                druga = null;
            }, 1000)
        }
    }
}

function dodeliKlik() {
    let nizDugmica = document.getElementsByClassName("kartica");
    for(let i = 0; i < nizDugmica.length; i++){
        nizDugmica[i].addEventListener("click",
        function()  { dugmeKliknuto(nizDugmica[i], i) })
    }
}

function sakrijSve(){
    let i;
    for( i = 0; i < 16; i++)    {

        const element = document.getElementsByClassName('kartica')[i]; //getelementbyclass name daje listu pa nije radilo bez [i] (pozicije?? idk kako se zove)
        element.style.backgroundImage = "";}
    
}


function reset(){
    promesaj();   //randomizuje slike kao na pocetku
    sakrijSve();  //sklanja backround image
}

// function resetgame(){
//     document.getElementsByClassName("resetbutton").addEventListener("click", reset(){
//         promesaj();
//     })
// }
