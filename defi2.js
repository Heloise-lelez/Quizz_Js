

/*Déclaration des variables*/

let defideux = document.getElementById("button2");

            let regles2 = document.getElementById("regles");      

          let divquestion2 = document.createElement('div');        

          let divreponse2 = document.createElement('div');
/*          let allbutton = document.getElementsByTagName('button');        */

let defi2btn = document.querySelector("#button2")
/*Création bouton*/

         let bpause2 = document.createElement('button');          

          let giveUp2 = document.createElement('button');      


/*      let bool = false;       */

    /* Déclaration des variables du timer */

/*    let timer = document.getElementById("tmp");       */

let temps2 = 5;

/*      let intervalle =1000;   */

    /*      let b = 0;      */
    /*      let m = 0;      */


    


          let paraquestion2 = document.createElement('p');             


    /*          let listerep = document.createElement('div');       */



function finDeJeu2() {

    if(temps2 <= 0){  
        defi2();
        temps2 =5;
    }


}
function fonctiontimer2(){
    timer.innerHTML =(temps2);
    setInterval(DiminuerTemps2, intervalle); // diminuer le temps à chaque seconde


}
// function pause(){
//     if (bool == false){
//         bpause2.innerHTML = "Pause"
//         fonctiontimer2();
//     }else{
//         bpause2.innerHTML ="Reprendre"
//     }
// }


function DiminuerTemps2 (){
    
    temps2--;
    window.localStorage.setItem('temps',temps2)
    timer.innerHTML =(temps2);   
    finDeJeu2();
}

    /* Bannière*/

     let divbanniere2 = document.createElement('div');        
/*      let banniere1 = document.createElement('p');            */
                    
                    // function banniere(){
                    
                    //     document.body.appendChild(divbanniere2);
                    //     divbanniere2.appendChild(banniere1);

                    //     banniere1.innerHTML = "Bonnes réponses : "+ b + " / " +  " Mauvaises réponses : "+ m;
                    //     window.localStorage.setItem("bonne rep",b);
                    //     window.localStorage.setItem("mauvaise rep",m)
                    // }




window.localStorage.clear();




function ajoutTemps2(){
    b++; //bonne réponse
    if(temps2 <= 176){
        temps2 = temps2+5;
        console.log(temps2);
    }else if(temps2 == 179 ){
        temps2= temps2+2;
    }else if(temps2 == 178 ){
        temps2= temps2+3;
    }else if(temps1 == 177 ){
        temps2= temps2+4;
    }
}
function Erreur(){

    temps2 = temps2 - 1; // On enlève 2 seconde du point de vue de l'utilisateur
                         // ensuite ajouter la fonction de fin de jeu une fois que le temps est est strictement inférieur à 0
    m++;    //  mauvaise réponse
}

function giveColor() {
    this.style.background = '#3BDC7D';
}

function removeColor() {
    this.style.background = 'white';
}



function refresh2(){      
      window.location.reload();
}


function abandon2(){
    temps2=1;       // 0 du point de vue de l'utilisateur
    giveUp2.addEventListener('click',refresh2)

}


function abandonetpause2(){
    document.body.appendChild(giveUp2);
    giveUp2.innerHTML = "Abandonner"
    giveUp2.addEventListener('click',abandon2)

    document.body.appendChild(bpause);
}




function defi2(){

    let tabrep = [];

    function reCall2(){
        //let idpara = document.getElementById('parabanniere')

        divquestion2.remove();
        divreponse2.remove();

        divbanniere2.remove();
        banniere();

        defi2();
    }
    
    regles2.remove();    // supprime tout les éléments de la div regles
 

    let numrandrep = Math.floor(Math.random()*tabrep.length);
    let randrep = tabrep[numrandrep];
 
    /* definition du randrep correpodant à une réponse choisi au hasard */

    let rand = Math.floor(Math.random()*allQuestions.length);

   
    let divreponse2 = document.createElement('div');
    document.body.appendChild(divreponse2);

    /* Création des boutons*/

        /* bouton abandonée et pause*/

        
    
    let buttonrep1 = document.createElement('button');
    divreponse2.appendChild(buttonrep1);
    tabrep.unshift('rep1')



    let buttonrep2 = document.createElement('button');
    divreponse2.appendChild(buttonrep2);
    tabrep.unshift('rep2')

    let buttonrep3 = document.createElement('button');
    divreponse2.appendChild(buttonrep3);


    let buttonrep4 = document.createElement('button');
    divreponse2.appendChild(buttonrep4);


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


    

    document.body.appendChild(divquestion2);
    divquestion2.appendChild(paraquestion2);

    document.body.appendChild(divreponse2);
    paraquestion2.innerHTML = quizz;


    for(let key in allQuestions[rand]){

        
        let goodrep = allQuestions[rand]["goodrep"];

        
        //console.log(goodrep)
        
        // if(key == "rep1" || key == "rep2" || key == "rep3" || key == "rep4"){
        //     let w = window.localStorage.setItem(key,allQuestions[44][key])
        // }
        
        //let repdefi1 = localStorage.getItem("i");
        //console.log(repdefi1)

        function finDeJeu2() {  //Vérification nombre d'erreur

            if(m == 5){
                window.alert('Fin du jeu , 5 erreurs')
                window.location.reload();
            }
        }

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
                buttonrep1.addEventListener('click',ajoutTemps2);
                buttonrep1.addEventListener('click',reCall2)
            }else{
                buttonrep1.addEventListener('click',Erreur);
                buttonrep1.addEventListener('click',reCall2)
            }
            finDeJeu2();




        }else if(key == "rep2"){
            

            buttonrep2.addEventListener('mouseover', giveColor);
            buttonrep2.addEventListener('mouseout', removeColor);

            buttonrep2.innerHTML = allQuestions[rand][key];
            
            if(key.charAt(3) == goodrep){
               // console.log("Bonne réponse 2")
               buttonrep2.addEventListener('click',ajoutTemps2);
               buttonrep2.addEventListener('click',reCall2)
               
            }else{
                buttonrep2.addEventListener('click',Erreur);
                buttonrep2.addEventListener('click',reCall2)
            }
            finDeJeu2();

        }else if(key == "rep3"){
            
            buttonrep3.addEventListener('mouseover', giveColor);
            buttonrep3.addEventListener('mouseout', removeColor);

            buttonrep3.innerHTML = allQuestions[rand][key];
        
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 3")
                buttonrep3.addEventListener('click',ajoutTemps2);
                buttonrep3.addEventListener('click',reCall2)
                
            }else{
                buttonrep3.addEventListener('click',Erreur);
                buttonrep3.addEventListener('click',reCall2)
            }
            finDeJeu2();

        
        }else if(key == "rep4"){
            
            buttonrep4.addEventListener('mouseover', giveColor);
            buttonrep4.addEventListener('mouseout', removeColor);

            buttonrep4.innerHTML = allQuestions[rand][key];

            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 4")
                buttonrep4.addEventListener('click',ajoutTemps2);
                buttonrep4.addEventListener('click',reCall2)
            }else{
                buttonrep4.addEventListener('click',Erreur);
                buttonrep4.addEventListener('click',reCall2)

            }

           

            finDeJeu2();
        
        }
    //   Heloise
        // bpause2.addEventListener('click',function(){
        //     if(bool==false){
        //         bool= true;
        //     }else{
        //         bool=false;
        //     }
        // })


    }



    //console.log(paraquestion2)

    // for(let key in allQuestions[1]){

    //     window.localStorage.setItem(key,allQuestions[1][key])


    // }

} 


defideux.addEventListener('click',abandonetpause2)

defideux.addEventListener('click',banniere);

defideux.addEventListener('click',defi2);

defideux.addEventListener('click',pause);



