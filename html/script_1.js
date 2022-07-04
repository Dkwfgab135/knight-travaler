
var hp = 100, hpi = 100, dp, di, min, ma, vid
// var manual=["o goblin comum ataca de 0 a 16, essa raça geralmente é asqueirosa e ganancionsa, mantenha seus pertences longe de suas garras",
// "use sua magia para um fim decisivo as chances de vitoria são altos, mas cuidado com sua vida",
// "a poção de vida não é pura o suficiente, as vezes falha",
// "o goblin acha audacioso da sua parte ler durante a batalha, ele vai para cima de voce antes de conseguir ler"]

// dica = manual[math.floor(mathRamdom()*manual.length)]

var acao = document.getElementById("acao")

function submit() {

    switch (acao.value) {

        case "1":


            dp = Math.floor(Math.random() * 21);

            hpi = hpi - dp

            alert("voce causou " + dp + " de dano. vida do goblin: " + hpi);
            // 
            if (hpi < 5) {
                alert("o goblin não consegue atacar")
            }

            else {
                di = Math.floor(Math.random() * 17);

                hp = hp - di

                alert("o goblin lhe causou " + di + " de dano, sua vida: " + hp);
            }

            break;


        case "2":

            vid = Math.floor(Math.random() * 21);

            hp = hp + vid

            alert("voce da um gole em sua poção, ganhando " + vid + " de vida, sua vida atual: " + hp)

            if (hpi < 5) {
                alert("o goblin não consegue atacar")
            }
            else {
                di = Math.floor(Math.random() * 17);

                hp = hp - di

                alert("o goblin lhe causou " + di + " de dano, sua vida: " + hp);
            }

            ; break;

        case "3":

            var magia_a, dark = 20, miss = 40


            magia_a = Math.floor(Math.random() * 3)

            if (magia_a >= 1) {

                alert("um selo é aberto, uma magia negra sai de dentro do goblin sendo absorvida pelo cavaleiro, goblin perde parte de sua vitalidade")
                hpi = hpi - dark
                alert("vida do goblin: " + hpi)

                alert("o goblin está atordoado, ele não consegue atacar")
            }

            else {
                alert("a conjuração da magia deu errada o selo explode perto de si")
                hp = hp - miss
                alert("sua vida atual: " + hp)

                alert("o goblin não ataca, ele ri da sua desgraça 'XD' ")

            }

            ; break;

        case "4":

            alert("fugir é para os fracos a sua tentativa só lhe tras desatenção ")

            if (hpi < 5) {
                alert("pelo seu esforço, o goblin não consegue atacar")
            }
            else {
                di = Math.floor(Math.random() * 17);

                hp = hp - di

                alert("o goblin lhe causou " + di + " de dano, sua vida: " + hp);
            }
            ; break;

        default:
            alert("favor selecione uma opção valida, o Goblin esta se cansando de esperar")
                ; break;

    }

    if (hp < 1) {
        alert("o goblin termina de abater o cavaleiro. ele rouba suas vestes e foge com seu dinheiro. patetico.")
        window.location.href = "../html/gameoverG.html"
    }

    if (hpi < 1) {
        alert(" o Goblin vai ao chao, o cavaleiro dizima o selvagem. ele toma um tempo na floresta para se recuperar ")

        document.write(`<script src="../html/script_win1.js"></script> `)
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