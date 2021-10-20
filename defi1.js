
/*Déclaration des variables*/

let defiun = document.getElementById("button1");

let regles = document.getElementById("regles");

let divquestion = document.createElement('div');

let divreponse = document.createElement('div');


    /* Déclaration des variables du timer */
let timer = document.getElementById("tmp");
let temps1 = 120;



let quizz = allQuestions[77].quizz;



let paraquestion = document.createElement('p');


let listerep = document.createElement('div');







window.localStorage.clear();



function DiminuerTemps1 (){
    temps1--;
    timer.innerHTML =(temps1);   
}

function ajoutTemps(){
    if(temps1 <= 176){
        temps1 = temps1+5;
    }else if(temps1 == 179 ){
        temps1= temps1+2;
    }else if(temps1 == 178 ){
        temps1= temps1+3;
    }else if(temps1 == 177 ){
        temps1= temps1+4;
    }
}
function perdTemps(){

    temps1 = temps1 - 1; // On enlève 2 seconde du point de vue de l'utilisateur
                         // ensuite ajouter la fonction de fin de jeu une fois que le temps est est strictement inférieur à 0

}

function defi1(){

    
    regles.remove();    // supprime tout les éléments de la div regles


    timer.innerHTML =(temps1);
    setInterval(DiminuerTemps1, 1000); // diminuer le temps à chaque seconde


    document.body.appendChild(divquestion);
    divquestion.appendChild(paraquestion);

    document.body.appendChild(divreponse);
    paraquestion.innerHTML = quizz;


    for(let key in allQuestions[55]){
        let goodrep = allQuestions[77]["goodrep"];
        //console.log(goodrep)
        
        // if(key == "rep1" || key == "rep2" || key == "rep3" || key == "rep4"){
        //     let w = window.localStorage.setItem(key,allQuestions[44][key])
        // }
        
        let repdefi1 = localStorage.getItem("i");
        console.log(repdefi1)


        if(key == "goodrep"){
            //console.log(allQuestions[77][key])
        }
        else if(key == "rep1"){
            let buttonrep1 = document.createElement('button');
            divreponse.appendChild(buttonrep1);

            buttonrep1.innerHTML = allQuestions[77][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 1")
                buttonrep1.addEventListener('click',ajoutTemps);
            }else{
                buttonrep1.addEventListener('click',perdTemps);
            }

        }else if(key == "rep2"){
            let buttonrep2 = document.createElement('button');
            divreponse.appendChild(buttonrep2);

            buttonrep2.innerHTML = allQuestions[77][key];
            if(key.charAt(3) == goodrep){
               // console.log("Bonne réponse 2")
               buttonrep2.addEventListener('click',ajoutTemps);
            }else{
                buttonrep2.addEventListener('click',perdTemps);
            }
        }else if(key == "rep3"){
            let buttonrep3 = document.createElement('button');
            divreponse.appendChild(buttonrep3);

            buttonrep3.innerHTML = allQuestions[77][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 3")
                buttonrep3.addEventListener('click',ajoutTemps);
            }else{
                buttonrep3.addEventListener('click',perdTemps);

            }
        
        }else if(key == "rep4"){
            let buttonrep4 = document.createElement('button');
            divreponse.appendChild(buttonrep4);

            buttonrep4.innerHTML = allQuestions[77][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 4")
                buttonrep4.addEventListener('click',ajoutTemps);
            }else{
                buttonrep4.addEventListener('click',perdTemps);

            }
        
        }


    }

        



    //console.log(paraquestion)

    // for(let key in allQuestions[1]){

    //     window.localStorage.setItem(key,allQuestions[1][key])


    // }

} 

defiun.addEventListener('click',defi1);