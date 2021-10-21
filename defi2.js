
/*Déclaration des variables*/

let defideux = document.getElementById("button2");

let divquestion2 = document.createElement('div');



//let allbutton = document.getElementsByTagName('button');



    /* Déclaration des variables du timer */



let temps2 = 20;



function DiminuerTemps2 (){
        temps2--;
        timer.innerHTML =(temps2);   
}
    

function fonctiontimer(){
    timer.innerHTML =(temps2);
    setInterval(DiminuerTemps2, intervalle); // diminuer le temps à chaque seconde


}

let paraquestion2 = document.createElement('p');


let listerep2 = document.createElement('div');









window.localStorage.clear();




function defi2(){


    temps2 = 20;
    timer.innerHTML = temps2;


    
    regles.remove();    // supprime tout les éléments de la div regles
    let rand = Math.floor(Math.random()*allQuestions.length);


    // for(let i =0;i<allbutton.length;i++){           //affichage de la couleur au survol de chaque réponse
    //     allbutton[i].addEventListener('mouseover',function(){
    //         console.log(allbutton[i]);
    //         allbutton[i].style.color =red;

    //     })
    // }

    let divreponse2 = document.createElement('div');


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


        if(key == "goodrep"){
            //console.log(allQuestions[rand][key])
        }
        else if(key == "rep1"){
            let buttonrep1 = document.createElement('button');
            divreponse2.appendChild(buttonrep1);

            buttonrep1.addEventListener('mouseover', giveColor);
            buttonrep1.addEventListener('mouseout', removeColor);

            buttonrep1.innerHTML = allQuestions[rand][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 1")

                buttonrep1.addEventListener('click',function(){
                    divreponse2.remove();
                    divquestion2.remove();
                    defi2();
                 })
            }else{

                buttonrep1.addEventListener('click',function(){
                    divreponse2.remove();
                    divquestion2.remove();
                    defi2();
                 })
            }

        }else if(key == "rep2"){
            let buttonrep2 = document.createElement('button');
            divreponse2.appendChild(buttonrep2);

            buttonrep2.addEventListener('mouseover', giveColor);
            buttonrep2.addEventListener('mouseout', removeColor);

            buttonrep2.innerHTML = allQuestions[rand][key];
            if(key.charAt(3) == goodrep){
               // console.log("Bonne réponse 2")

               buttonrep2.addEventListener('click',function(){
                divreponse2.remove();
                divquestion2.remove();
                defi2();
            })
            }else{

                buttonrep2.addEventListener('click',function(){
                    divreponse2.remove();
                    divquestion2.remove();
                    defi2();
                })
            }
        }else if(key == "rep3"){
            let buttonrep3 = document.createElement('button');
            divreponse2.appendChild(buttonrep3);

            buttonrep3.addEventListener('mouseover', giveColor);
            buttonrep3.addEventListener('mouseout', removeColor);

            buttonrep3.innerHTML = allQuestions[rand][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 3")
                buttonrep3.addEventListener('click',function(){
                    divreponse2.remove();
                    divquestion2.remove();
                    defi2();               
                })
                
            }else{
                buttonrep3.addEventListener('click',function(){
                    divreponse2.remove();
                    divquestion2.remove();
                    defi2();               
                })

            }
        
        }else if(key == "rep4"){
            let buttonrep4 = document.createElement('button');
            divreponse2.appendChild(buttonrep4);

            buttonrep4.addEventListener('mouseover', giveColor);
            buttonrep4.addEventListener('mouseout', removeColor);

            buttonrep4.innerHTML = allQuestions[rand][key];
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 4")

                buttonrep4.addEventListener('click',function(){
                    divreponse2.remove();
                    divquestion2.remove();
                    defi2();
                })
            }else{

                buttonrep4.addEventListener('click',function(){
                    divreponse2.remove();
                    divquestion2.remove();
                    defi2();
                })

            }
        
        }


    }

        



    //console.log(paraquestion)

    // for(let key in allQuestions[1]){

    //     window.localStorage.setItem(key,allQuestions[1][key])


    // }

} 

defideux.addEventListener('click',defi2);
defideux.addEventListener('click',fonctiontimer);