let defideux = document.getElementById("button2");
let divquestion2 = document.createElement('div');

let divreponse2 = document.createElement('div');

let paraquestion2 = document.createElement('p');






    /* Déclaration des variables du timer */
 let temps2 = 20;
 
 
 
 function DiminuerTemps2 (){
    temps2--;
    timer.innerHTML =(temps2);   
     
 }


let k = 0;


function defi2(){

    regles.remove();

    timer.innerHTML =(temps2);
    setInterval(DiminuerTemps2, 1000); // diminuer le temps à chaque seconde


    let quizz2 = allQuestions[k].quizz;

    document.body.appendChild(divquestion2);
    divquestion2.appendChild(paraquestion2);

    document.body.appendChild(divreponse2);
    paraquestion2.innerHTML = quizz2;


    let changescore =0;
    function score(){
        changescore ++;
    }

    function scorerien(){
        console.log("Pas de point en plus mdr")
    }

    for(let key in allQuestions[k]){
        let goodrep = allQuestions[k]["goodrep"];
        //console.log(goodrep)
        
        // if(key == "rep1" || key == "rep2" || key == "rep3" || key == "rep4"){
        //     let w = window.localStorage.setItem(key,allQuestions[44][key])
        // }
        
        //let repdefi1 = localStorage.getItem("i");
        //console.log(repdefi1)


        if(key == "goodrep"){
            //console.log(allQuestions[77][key])
        }
        else if(key == "rep1"){
            let buttonrep1 = document.createElement('button');
            divreponse.appendChild(buttonrep1);

            buttonrep1.innerHTML = allQuestions[k][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 1")
                buttonrep1.addEventListener('click',score);
            }else{
                buttonrep1.addEventListener('click',scorerien);
            }

        }else if(key == "rep2"){
             buttonrep2 = document.createElement('button');
            divreponse.appendChild(buttonrep2);

            buttonrep2.innerHTML = allQuestions[k][key];
            if(key.charAt(3) == goodrep){
               // console.log("Bonne réponse 2")
               buttonrep2.addEventListener('click',score);
            }else{
                buttonrep2.addEventListener('click',scorerien);
            }
        }else if(key == "rep3"){
            let buttonrep3 = document.createElement('button');
            divreponse.appendChild(buttonrep3);

            buttonrep3.innerHTML = allQuestions[k][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 3")
                buttonrep3.addEventListener('click',score);
            }else{
                buttonrep3.addEventListener('click',scorerien);

            }
        
        }else if(key == "rep4"){
            let buttonrep4 = document.createElement('button');
            divreponse.appendChild(buttonrep4);

            buttonrep4.innerHTML = allQuestions[k][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 4")
                buttonrep4.addEventListener('click',score);
            }else{
                buttonrep4.addEventListener('click',scorerien);

            }
        
        }


}
}
defideux.addEventListener('click',defi2);