
var hp = 100, hpi = 150, dp, di, min, ma, vid, v = 0
// var manual=["o goblin comum ataca de 0 a 16, essa raça geralmente é asqueirosa e ganancionsa, mantenha seus pertences longe de suas garras",
// "use sua magia para um fim decisivo as chances de vitoria são altos, mas cuidado com sua vida",
// "a poção de vida não é pura o suficiente, as vezes falha",
// "o goblin acha audacioso da sua parte ler durante a batalha, ele vai para cima de voce antes de conseguir ler"]

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

                hpi = hpi - 10

                alert("o veneno exalado e aplicado pela faca se alastra nos seres, vida do trio: " + hpi)

                v = v - 1
            }


            dp = Math.floor(Math.random() * 21);

            hpi = hpi - dp

            alert("voce causou " + dp + " de dano. vida do trio: " + hpi);


            if (hpi < 15) {
                alert("a neve esta derretendo")
            }

            else {
                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("uma das bolinhas lhe causou " + di + " de dano, sua vida: " + hp);

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a segunda bolinha lhe causou " + di + " de dano, sua vida: " + hp);

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a terceira " + di + " de dano, sua vida: " + hp);
            }

            break;


        case "2":
            if (v >= 1) {

                hpi = hpi - 10

                alert("o veneno exalado e aplicado pela faca se alastra nos seres, vida do trio: " + hpi)

                v = v - 1
            }

            var ajuda

            ajuda = Math.floor(Math.random() * 5)

            if (ajuda > 1) {
                hp = hp + 50
                alert("o cavaleiro absorve as sombras e energias ruins do local, isso o revigora, vida atual: " + hp)
            }

            else {
                hpi = hpi + 35
                alert("a magia conjurada por si acidentalmente estoura a volta criando um odor revigorante. As criaturas misticas se alimentam da magica, vida do trio: " + hpi)
            }


            if (hpi < 15) {
                alert("a neve esta derretendo")
            }
            else {
                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("uma das bolinhas lhe causou " + di + " de dano, sua vida: " + hp);

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a segunda bolinha lhe causou " + di + " de dano, sua vida: " + hp);

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a terceira " + di + " de dano, sua vida: " + hp);
            }


            ; break;

        case "3":

            if (v >= 1) {

                hpi = hpi - 7

                alert("o veneno exalado e aplicado pela faca se alastra nos seres, vida do trio: " + hpi)

                v = v - 1
            }

            var magia_a, dark = 40, miss = 40

            magia_a = Math.floor(Math.random() * 3)

            if (magia_a > 0) {

                alert(" uma magia proibida é exalada da armadura do cavaleiro, uma sombra drena a energia de um dos seres")
                hpi = hpi - dark
                alert("vida do trio: " + hpi)

                alert("uma toma o golpe pelo seus irmãos, as restantes atacam")

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a segunda bolinha lhe causou " + di + " de dano, sua vida: " + hp);

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a terceira " + di + " de dano, sua vida: " + hp);
            }



            else {
                alert("a conjuração da magia deu errada o selo explode perto de si")
                hp = hp - miss
                alert("sua vida atual: " + hp)

                alert("o trio atacam de uma vez só")

                if (hpi < 5) {
                    alert("a neve esta derretendo")
                }
                else {
                    di = Math.floor(Math.random() * 16)

                    hp = hp - di

                    alert("uma das bolinhas lhe causou " + di + " de dano, sua vida: " + hp);

                    di = Math.floor(Math.random() * 16)

                    hp = hp - di

                    alert("a segunda bolinha lhe causou " + di + " de dano, sua vida: " + hp);

                    di = Math.floor(Math.random() * 16)

                    hp = hp - di

                    alert("a terceira " + di + " de dano, sua vida: " + hp);
                }
            }



            ; break;

        case "4":

            if (v >= 1) {

                hpi = hpi - 7

                alert("o veneno exalado e aplicado pela faca se alastra nos seres, vida do trio: " + hpi)

                v = v - 1
            }

            dp = Math.floor(Math.random() * 19) + 7;

            hpi = hpi - dp

            alert("com a faca retalhada voce causou " + dp + " de dano. vida do trio: " + hpi);

            if (hpi < 15) {
                alert("a neve esta derretendo")
            }
            else {
                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("uma das bolinhas lhe causou " + di + " de dano, sua vida: " + hp);

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a segunda bolinha lhe causou " + di + " de dano, sua vida: " + hp);

                di = Math.floor(Math.random() * 16)

                hp = hp - di

                alert("a terceira " + di + " de dano, sua vida: " + hp);
            }

            if (v > 0) {
                alert("venenos fortes são melhores em pequenas doses")
            }
            else {
                //veneno
                v = v + 3
                alert("sua lamina perfura a pele macia dos seres, aplicando um veneno forte e de curto prazo")
                //veneno

            }

            ; break;

        default:
            alert("favor selecione uma opção valida, as criaturas fofas de neve estão ficando entediadas")
                ; break;

    }

    if (hp < 1) {
        alert("as bolinhas começam a observar voce congelando na neve, o frio penetra sua armadura. Eles observam você sem poder dar ao menos um piscar de olhos. ")
        window.location.href = "../html/gameovern.html"
    }

    if (hpi < 1) {
        alert(" o cavaleiro termina de absorver toda a magia na neve, que por sinal era muita, até finalmente só existir um monte de neve patetico. ")

        document.write(`<script src="../html/script_win3.js"></script> `)
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