var hp = 200,
    hpi = 500,
    dp, di, min, ma, vid, v = 0,
    golp = 0,
    f = 0


// dica = manual[math.floor(mathRamdom()*manual.length)]

// Timer
// function startTimer(duration,display){
//     var timer=duration,minutes,seconds;

//     setInterval(function(){
//         minutos=parseInt(timer/60, 10);
//         segundos=parseInt(timer%60, 10);

//         minutos=minutos<10?"0"+minutos:minutos;
//         segundos=segundos<10?"0"+segundos:segundos;

//         display.textContent=minutos+":"+segundos;

//         if(--timer<0){
//             timer=duration;
//         }
//     },1000);
// }

// window.onload=function(){
//     var duration=60*2.5;
//     var display=document.querySelector("#timer");

//     startTimer(duration,display);
// }


var acao = document.getElementById("acao")



function submit() {

    switch (acao.value) {

        case "1":

            if (v >= 1) {

                hpi = hpi - 15

                alert("o veneno corre pelas veias do Dragão. vida do Dragão: " + hpi)

                v = v - 1
            }

            if (f >= 1) {

                hp = hp - 15

                alert("o calor te inferniza por dentro da armadura, sua vida: " + hp)

                f = f - 1
            }


            dp = Math.floor(Math.random() * 41);

            hpi = hpi - dp

            alert("voce causou " + dp + " de dano. vida do Dragão: " + hpi);


            if (hpi < 15) {
                alert("o dragão esta caindo")
            } else {
                golp = Math.floor(Math.random() * 3)

                if (golp === 2) {

                    //ataque 1 dragão
                    di = Math.floor(Math.random() * 21)

                    hp = hp - di

                    alert("o dragão cospe um fogo infernal perante voce, causando " + di + " de dano, sua vida: " + hp);
                } else if (golp === 1) {
                    //ataque 2 dragão

                    alert("a fera da uma sequencia de patadas em você")

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("primeira patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("segunda patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("terceira patada: " + di)

                    alert("voce se mantem recebendo os golpes, sua vida: " + hp);
                } else if (golp === 0) {

                    //terceiro golpe

                    di = 40

                    hp = hp - di

                    alert("o Dragão cospe uma maldição magica de fogo sobre voce o incendiando, sua vida: " + hp);

                    if (f > 0) {
                        alert("o fogo ainda te queima")
                    } else {
                        //brasas
                        f = f + 3
                        alert("as brasas da maldição penetram sua armadura, voce queima")
                            //burn

                    }
                }

            }


            ;
            break;


        case "2":
            if (v >= 1) {

                hpi = hpi - 15

                alert("o veneno corre pelas veias do Dragão, vida do Dragão: " + hpi)

                v = v - 1
            }

            if (f >= 1) {

                hp = hp - 15

                alert("o calor te inferniza por dentro da armadura, sua vida: " + hp)

                f = f - 1
            }

            var ajuda

            ajuda = Math.floor(Math.random() * 5)

            if (ajuda > 1) {
                hp = hp + 40
                alert("As sombras se unem ao cavaleiro, isso o revigora: " + hp)
            } 
            
            else {
                hpi = hpi + 40
                alert("a magia de cura estora, aproveitando o dragão inala a cura se recuperando: " + hpi)
            }


            if (hpi < 15) {
                alert("o dragão esta caindo")
            } else {
                golp = Math.floor(Math.random() * 3)

                if (golp === 2) {

                    //ataque 1 dragão
                    di = Math.floor(Math.random() * 21)

                    hp = hp - di

                    alert("o dragão cospe um fogo infernal perante voce, causando " + di + " de dano, sua vida: " + hp);
                } else if (golp === 1) {
                    //ataque 2 dragão

                    alert("a fera da uma sequencia de patadas em você")

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("primeira patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("segunda patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("terceira patada: " + di)

                    alert("voce se mantem recebendo os golpes, sua vida: " + hp);
                } else if (golp === 0) {

                    //terceiro golpe

                    di = 40

                    hp = hp - di

                    alert("o Dragão cospe uma maldição magica de fogo sobre voce o incendiando, sua vida: " + hp);

                    if (f > 0) {
                        alert("o fogo ainda te queima")
                    } else {
                        //veneno
                        f = f + 3
                        alert("as brasas da maldição penetram sua armadura, voce queima")
                            //veneno

                    }

                }
            }


            ;
            break;

        case "3":

            if (v >= 1) {

                hpi = hpi - 15

                alert("o veneno corre pelas veias do Dragão: " + hpi)

                v = v - 1
            }

            if (f >= 1) {

                hp = hp - 15

                alert("o calor te inferniza por dentro da armadura, sua vida: " + hp)

                f = f - 1
            }

            var magia_a, dark = 50,
                miss = 40

            magia_a = Math.floor(Math.random() * 7)

            if (magia_a >= 4) {

                alert("sua aura demoniaca cresce envolvendo a cabeça do dragão e tirando um pouco de sua vitalidade.")
                hpi = hpi - dark
                alert("vida do Dragão: " + hpi)

            } else {
                alert("a conjuração da magia deu errada o selo explode perto de si")
                hp = hp - miss
                alert("sua vida atual: " + hp)

                alert("A fera aproveita de seu fracasso para lhe acertar um golpe")
            }

            if (hpi < 5) {
                alert("o dragão esta caindo")
            } else {
                golp = Math.floor(Math.random() * 3)

                if (golp === 2) {

                    //ataque 1 dragão
                    di = Math.floor(Math.random() * 21)

                    hp = hp - di

                    alert("o dragão cospe um fogo infernal perante voce, causando " + di + " de dano, sua vida: " + hp);
                } else if (golp === 1) {
                    //ataque 2 dragão

                    alert("a fera da uma sequencia de patadas em você")

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("primeira patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("segunda patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("terceira patada: " + di)

                    alert("voce se mantem recebendo os golpes, sua vida: " + hp);
                } else if (golp === 0) {

                    //terceiro golpe

                    di = 40

                    hp = hp - di

                    alert("o Dragão cospe uma maldição magica de fogo sobre voce o incendiando, sua vida: " + hp);

                    if (f > 0) {
                        alert("o fogo ainda te queima")
                    } else {
                        //veneno
                        f = f + 3
                        alert("as brasas da maldição penetram sua armadura, voce queima")
                            //veneno

                    }

                }
            }



            ;
            break;

        case "4":

            if (v >= 1) {

                hpi = hpi - 15

                alert("o veneno corre pelas veias do Dragão: " + hpi)

                v = v - 1
            }

            if (f >= 1) {

                hp = hp - 15

                alert("o calor te inferniza por dentro da armadura, sua vida: " + hp)

                f = f - 1
            }

            dp = Math.floor(Math.random() * 19) + 7;

            hpi = hpi - dp

            alert("com a faca retalhada voce causou " + dp + " de dano. vida do Dragão: " + hpi);

            if (hpi < 15) {
                alert("o dragão esta caindo")
            } else {
                golp = Math.floor(Math.random() * 3)

                if (golp === 2) {

                    //ataque 1 dragão
                    di = Math.floor(Math.random() * 21)

                    hp = hp - di

                    alert("o dragão cospe um fogo infernal perante voce, causando " + di + " de dano, sua vida: " + hp);
                } else if (golp === 1) {
                    //ataque 2 dragão

                    alert("a fera da uma sequencia de patadas em você")

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("primeira patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("segunda patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("terceira patada: " + di)

                    alert("voce se mantem recebendo os golpes, sua vida: " + hp);
                } else if (golp === 0) {

                    //terceiro golpe

                    di = 40

                    hp = hp - di

                    alert("o Dragão cospe uma maldição magica de fogo sobre voce o incendiando, sua vida: " + hp);

                    if (f > 0) {
                        alert("o fogo ainda te queima")
                    } else {
                        //veneno
                        f = f + 3
                        alert("as brasas da maldição penetram sua armadura, voce queima")
                            //veneno

                    }

                }
            }


            if (v > 0) {
                alert("venenos fortes são melhores em pequenas doses")
            } else {
                //veneno
                v = v + 3
                alert("sua lamina crava nas escamas do Dragão, aplicando um veneno forte e de curto prazo")
                    //veneno

            }

            ;
            break;

        case "666":

            window.location.href = "../html/lorde.html"

        ;break;

        case "5":


            if (v >= 1) {

                hpi = hpi - 15

                alert("o veneno corre pelas veias do Dragão: " + hpi)

                v = v - 1
            }

            
            if (f >= 1) {

                hp = hp - 15

                alert("o calor te inferniza por dentro da armadura, sua vida: " + hp)

                f = f - 1
            }

            dp = Math.floor(Math.random() * 18)
            hpi = hpi - dp

            alert("Primeiro ataque: " + dp)

            dp = Math.floor(Math.random() * 18)
            hpi = hpi - dp

            alert("Segundo ataque: " + dp)

            di = Math.floor(Math.random() * 18)
            hpi = hpi - dp

            alert("Terceiro ataque: " + dp)

            alert("o Dragão recebe os ataques: " + hpi);

            if (hpi < 15) {

                alert("o dragão esta caindo")

            } else {
                golp = Math.floor(Math.random() * 3)

                if (golp === 2) {

                    //ataque 1 dragão
                    di = Math.floor(Math.random() * 21)

                    hp = hp - di

                    alert("o dragão cospe um fogo infernal perante voce, causando " + di + " de dano, sua vida: " + hp);
                } else if (golp === 1) {
                    //ataque 2 dragão

                    alert("a fera da uma sequencia de patadas em você")

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("primeira patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("segunda patada: " + di)

                    di = Math.floor(Math.random() * 16)
                    hp = hp - di

                    alert("terceira patada: " + di)

                    alert("voce se mantem recebendo os golpes, sua vida: " + hp);
                } else if (golp === 0) {

                    //terceiro golpe

                    di = 40

                    hp = hp - di

                    alert("o Dragão cospe uma maldição magica de fogo sobre voce o incendiando, sua vida: " + hp);

                    if (f > 0) {
                        alert("o fogo ainda te queima")
                    } else {
                        //veneno
                        f = f + 3
                        alert("as brasas da maldição penetram sua armadura, voce queima")
                            //veneno

                    }
                }
            }

            ;
            break;

        default:
            alert("favor selecione uma opção valida, o dragão esta prestes a soltar uma rajada mortal");
            break;

    }


    if (hp == 66||hp == 6){
        alert("você recebe uma ajuda gratificante de seu mestre, parece que seu pacto foi completo...")

        hp = 666

        alert("sua vida: "+hp)

        alert("há mais segredinhos por ai : )")
    }

    if (hp < 1) {
        alert("voce é humilhado diante do mundo. O dragão te amassa com sua extensa garra, o segura e finalmente devora o cavaleiro por inteiro. ")
        window.location.href = "../html/gameoverD.html"
    }

    if (hpi < 1) {
        alert(" a terrivel fera cai, sua vitalidade esvai como uma fumaça negra enorme, o cavaleiro começa a absorver tudo a sua volta, todas as energias da terra ")

        document.write(`<script src="../html/script_win4.js"></script> `)
    }
}





// let imagemv
// if(hp <= 90||hpi <= 90)
// {
//     imagemv++

//     document.getElementsById("vida").src="../imagens/icones/hp/vida"+img+".png"

// if(hp<=80)
//     {
//         document.getElementById("vida").src="../imagens/icones/hp/vida"+img+".png"

//         if(hp<=70)
//     {
//         document.getElementById("vida").src="../imagens/icones/hp/vida"+img+".png"

//         if(hp<=60)
//         {
//             document.getElementById("vida").src="../imagens/icones/hp/vida"+img+".png"

//             if(hp<=50)
//             {
//                 document.getElementById("vida").src="../imagens/icones/hp/vida"+img+".png"

//                 if(hp<=40)
//                 {
//                     document.getElementById("vida").src="../imagens/icones/hp/vida"+img+".png"

//                     if(hp<=30)
//                     {
//                         document.getElementById("vida").src="../imagens/icones/hp/vida"+img+".png"

//                         if(hp<=20)
//                         {
//                             document.getElementById("vida").src="../imagens/hp/icones/vida"+img+".png"

//                             if(hp<=10)
//                             {
//                                 document.getElementById("vida").src="../imagens/icones/hp/vida"+img+".png"
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     }

// }