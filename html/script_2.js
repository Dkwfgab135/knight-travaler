
var hp = 100, hpi = 100, dp, di, min, ma, vid, c = 0
// var manual=["o goblin comum ataca de 0 a 16, essa raça geralmente é asqueirosa e ganancionsa, mantenha seus pertences longe de suas garras",
// "use sua magia para um fim decisivo as chances de vitoria são altos, mas cuidado com sua vida",
// "a poção de vida não é pura o suficiente, as vezes falha",
// "o goblin acha audacioso da sua parte ler durante a batalha, ele vai para cima de voce antes de conseguir ler"]

// dica = manual[math.floor(mathRamdom()*manual.length)]

var acao = document.getElementById("acao")



function submit() {

    while (c === 0) {

        alert("o escorpião nao gosta do cheiro de sua vitalidade alta, ele te injeta um veneno pelas costas em um movimento certeiro")
        c = 1

        console.log(c)
    }

    switch (acao.value) {

        case "1":

            //envenenamento

            if (hp >= hpi) {
                hp = hp - 5
                alert("o veneno se alastra, sua vida atual: " + hp)
            }

            //
            dp = Math.floor(Math.random() * 21);

            hpi = hpi - dp

            alert("voce causou " + dp + " de dano. vida do escorpião: " + hpi);
            // 
            if (hpi < 5) {
                alert("o escorpião esta fraco")
            }

            else {
                di = Math.floor(Math.random() * 18);

                hp = hp - di

                alert("o escorpião lhe causou " + di + " de dano, sua vida: " + hp);
            }

            break;


        case "2":

            if (hp >= hpi) {
                hp = hp - 5
                alert("o veneno se alastra, sua vida atual: " + hp)
            }

            vid = Math.floor(Math.random() * 21);

            hp = hp + vid

            alert("voce da um gole em sua poção, ganhando " + vid + " de vida, sua vida atual: " + hp)

            if (hpi < 5) {
                alert("o escorpião não consegue atacar")
            }
            else {
                di = Math.floor(Math.random() * 18);

                hp = hp - di

                alert("o escorpião lhe causou " + di + " de dano, sua vida: " + hp);
            }

            ; break;

        case "3":

            if (hp >= hpi) {
                hp = hp - 5
                alert("o veneno se alastra, sua vida atual: " + hp)
            }

            var magia_a, dark = 20, miss = 40

            magia_a = Math.floor(Math.random() * 3)

            if (magia_a >= 1) {

                alert("um selo é aberto, uma magia negra sai de dentro do escorpião sendo absorvida pelo cavaleiro, o escorpião perde parte de sua vitalidade")
                hpi = hpi - dark
                alert("vida do escorpião: " + hpi)

                alert("o escorpião está atordoado, ele não consegue atacar")
            }

            else {
                alert("a conjuração da magia deu errada o selo explode perto de si")
                hp = hp - miss
                alert("sua vida atual: " + hp)

                alert("o escorpião ve oportunidade")

                if (hpi < 5) {
                    alert("o escorpião não consegue atacar")
                }
                else {
                    di = Math.floor(Math.random() * 18);

                    hp = hp - di

                    alert("o escorpião lhe causou " + di + " de dano, sua vida: " + hp);
                }

            }


            ; break;

        case "4":

            if (hp >= hpi) {
                hp = hp - 5
                alert("o veneno se alastra, sua vida atual: " + hp)
            }

            dp = Math.floor(Math.random() * 17) + 5;

            hpi = hpi - dp

            alert("com a faca retalhada voce causou " + dp + " de dano. vida do escorpião: " + hpi);

            if (hpi < 5) {
                alert("o escorpião não consegue atacar")
            }
            else {
                di = Math.floor(Math.random() * 18);

                hp = hp - di

                alert("o escorpião lhe causou " + di + " de dano, sua vida: " + hp);
            }

            ; break;

        default:
            alert("favor selecione uma opção valida, o escorpião esta furioso e logo vai avançar")
                ; break;

    }

    if (hp < 1) {
        alert("o escorpião observa voce se debatendo e espumando com o veneno, voce vira alimento. ")
        window.location.href = "../html/gameovere.html"
    }

    if (hpi < 1) {
        alert(" o cavaleiro pisa no escorpião como o inseto que ele é... figurativamente falando. ")

        document.write(`<script src="../html/script_win2.js"></script> `)
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