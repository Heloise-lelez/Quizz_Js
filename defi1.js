/*Déclaration des variables*/


let defiun = document.getElementById("button1");


let regles = document.getElementById("regles");


let divquestion = document.createElement('div');


let allbutton = document.getElementsByTagName('button');



/*Création bouton*/


let bpause = document.createElement('button');


let giveUp = document.createElement('button');



let bool = false;


    /* Déclaration des variables du timer */

let timer = document.getElementById("tmp");


let temps1 = 5;


let intervalle =1000;


let b = 0;

let m = 0;


    



let paraquestion = document.createElement('p');



let listerep = document.createElement('div');




function finDeJeu1() {


    if(temps1 == 0){  

        window.alert('Fin de jeu');

        window.location.reload();

    }



}

function fonctiontimer(){

    timer.innerHTML =(temps1);

    setInterval(DiminuerTemps1, intervalle); // diminuer le temps à chaque seconde



}

function pause(){

    if (bool == false){

        bpause.innerHTML = "Pause"

        fonctiontimer();

    }else{

        bpause.innerHTML ="Reprendre"

    }

}

function DiminuerTemps1 (){

    temps1--;

    timer.innerHTML =(temps1);   

    finDeJeu1();

}

let divbanniere = document.createElement('div');

let banniere1 = document.createElement('p');

  

function banniere(){

   

    document.body.appendChild(divbanniere);

    divbanniere.appendChild(banniere1);


    banniere1.innerHTML = "Bonnes réponses : "+ b + " / " +  " Mauvaises réponses : "+ m;

}





window.localStorage.clear();





function ajoutTemps(){

    b++; //bonne réponse

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

    m++;    //  mauvaise réponse

}


function giveColor() {

    this.style.background = '#3BDC7D';

}


function removeColor() {

    this.style.background = 'white';

}





function abandon(){

    temps1=1;       // 0 du point de vue de l'utilisateur

}


function abandonetpause(){

    document.body.appendChild(giveUp);

    giveUp.innerHTML = "Abandonner"

    giveUp.addEventListener('click',abandon)


    document.body.appendChild(bpause);

}



function defi1(){


    let tabrep = [];


    function reCall(){

        //let idpara = document.getElementById('parabanniere')


        divreponse.remove();

        divquestion.remove();

        divbanniere.remove();

        banniere();


        defi1();

    }

    

    regles.remove();    // supprime tout les éléments de la div regles

 


    let numrandrep = Math.floor(Math.random()*tabrep.length);

    let randrep = tabrep[numrandrep];

 

    /* definition du randrep correpodant à une réponse choisi au hasard */


    let rand = Math.floor(Math.random()*allQuestions.length);


   

    let divreponse = document.createElement('div');


    /* Création des boutons*/


        /* bouton abandonée et pause*/


        

    

    let buttonrep1 = document.createElement('button');

    divreponse.appendChild(buttonrep1);

    tabrep.unshift('rep1')




    let buttonrep2 = document.createElement('button');

    divreponse.appendChild(buttonrep2);

    tabrep.unshift('rep2')


    let buttonrep3 = document.createElement('button');

    divreponse.appendChild(buttonrep3);



    let buttonrep4 = document.createElement('button');

    divreponse.appendChild(buttonrep4);



    if (allQuestions[rand].rep3 == undefined){

        buttonrep3.remove()

     

    }else{

        tabrep.unshift('rep3')

    }


    if (allQuestions[rand].rep4 == undefined){

        buttonrep4.remove()

    }else{

        tabrep.unshift('rep4')

    }


    console.log('tableau: '+tabrep)


    let quizz = allQuestions[rand].quizz;



    


    document.body.appendChild(divquestion);

    divquestion.appendChild(paraquestion);


    document.body.appendChild(divreponse);

    paraquestion.innerHTML = quizz;



    for(let key in allQuestions[rand]){


        

        let goodrep = allQuestions[rand]["goodrep"];


        

        //console.log(goodrep)

        

        // if(key == "rep1" || key == "rep2" || key == "rep3" || key == "rep4"){

        //     let w = window.localStorage.setItem(key,allQuestions[44][key])

        // }

        

        //let repdefi1 = localStorage.getItem("i");

        //console.log(repdefi1)



        if(key == "goodrep"){

            //console.log(allQuestions[rand][key])

        }

        else if(key == "rep1"){

            

            

               


                buttonrep1.addEventListener('mouseover', giveColor);

                buttonrep1.addEventListener('mouseout', removeColor);


                buttonrep1.innerHTML = allQuestions[rand][key];

                tabrep.pop(numrandrep);

            

            

            if(key.charAt(3) == goodrep){

                //console.log("Bonne réponse 1")

                buttonrep1.addEventListener('click',ajoutTemps);

                buttonrep1.addEventListener('click',reCall)

            }else{

                buttonrep1.addEventListener('click',perdTemps);

                buttonrep1.addEventListener('click',reCall)

            }

            console.log('m '+m);




        }else if(key == "rep2"){

            


            buttonrep2.addEventListener('mouseover', giveColor);

            buttonrep2.addEventListener('mouseout', removeColor);


            buttonrep2.innerHTML = allQuestions[rand][key];

            

            if(key.charAt(3) == goodrep){

               // console.log("Bonne réponse 2")

               buttonrep2.addEventListener('click',ajoutTemps);

               buttonrep2.addEventListener('click',reCall)

               

            }else{

                buttonrep2.addEventListener('click',perdTemps);

                buttonrep2.addEventListener('click',reCall)

            }

        }else if(key == "rep3"){

            


            buttonrep3.addEventListener('mouseover', giveColor);

            buttonrep3.addEventListener('mouseout', removeColor);


            buttonrep3.innerHTML = allQuestions[rand][key];


     

            

        

            if(key.charAt(3) == goodrep){

                //console.log("Bonne réponse 3")

                buttonrep3.addEventListener('click',ajoutTemps);

                buttonrep3.addEventListener('click',reCall)

                

            }else{

                buttonrep3.addEventListener('click',perdTemps);

                buttonrep3.addEventListener('click',reCall)


            }

        

        }else if(key == "rep4"){

            

            buttonrep4.addEventListener('mouseover', giveColor);

            buttonrep4.addEventListener('mouseout', removeColor);


            buttonrep4.innerHTML = allQuestions[rand][key];


   

            if(key.charAt(3) == goodrep){

                //console.log("Bonne réponse 4")

                buttonrep4.addEventListener('click',ajoutTemps);

                buttonrep4.addEventListener('click',reCall)

            }else{

                buttonrep4.addEventListener('click',perdTemps);

                buttonrep4.addEventListener('click',reCall)


            }

        

        }

      

        bpause.addEventListener('click',function(){

            if(bool==false){

                bool= true;

            }else{

                bool=false;

            }

        })



    }




    //console.log(paraquestion)


    // for(let key in allQuestions[1]){


    //     window.localStorage.setItem(key,allQuestions[1][key])



    // }


} 

defiun.addEventListener('click',abandonetpause)

defiun.addEventListener('click',banniere);


defiun.addEventListener('click',defi1);


defiun.addEventListener('click',pause);