
var hp = 100, dp, di, min, ma, vid
// var manual=["o goblin comum ataca de 0 a 16, essa raça geralmente é asqueirosa e ganancionsa, mantenha seus pertences longe de suas garras",
// "use sua magia para um fim decisivo as chances de vitoria são altos, mas cuidado com sua vida",
// "a poção de vida não é pura o suficiente, as vezes falha",
// "o goblin acha audacioso da sua parte ler durante a batalha, ele vai para cima de voce antes de conseguir ler"]

// dica = manual[math.floor(mathRamdom()*manual.length)]

var acao = document.getElementById("acao")

function submit() {

    switch (acao.value) {

        case "1":

            alert("Eu disse para não tentar...");

            alert("você causou 0 de dano ao seu mestre");

            alert("vida do seu senhor: ∞")


            hp = hp - Infinity

            alert(" v0c3 s3 4ch4 t40 f0rt3 4ss1m? ");

            alert("sua vida: "+hp)

            break;


        case "2":

            alert("Eu disse para não tentar...");

            alert("você causou 0 de dano ao seu mestre");

            alert("vida do seu senhor: ∞")


            hp = hp - Infinity

            alert(" c0ns3gu1u 0 qu3 qu3r14? n40? qu3 p3na... nunc4 v4i ch3g4r p3rt0 d3 m3 m4t4r.");

            alert("sua vida: "+hp)

            ; break;

        case "3":

            alert("Eu disse para não tentar...");

            alert("você causou 0 de dano ao seu mestre");

            alert("vida do seu senhor: ∞")


            hp = hp - Infinity

            alert(" p0d3 t3nt4r 0 qu4nt0 qu1s3r... ");

            alert("sua vida: "+hp)

            ; break;

        case "4":

            alert("Eu disse para não tentar...");

            alert("você causou 0 de dano ao seu mestre");

            alert("vida do seu senhor: ∞")


            hp = hp - Infinity

            alert(" v0c3 4t3 qu3 3´ 3ngr4ç4d1nh0, c4v4l31r0...");

            alert("sua vida: "+hp)

            ; break;

        default:
            alert("Eu disse para não tentar...");

            alert("você causou 0 de dano ao seu mestre");

            alert("vida do seu senhor: ∞")


            hp = hp - Infinity

            alert(" v0c3 3´ t40 m1s3r0 qu3 n40 c0ns3gu3 n3m m3 1rr1t4r ");

            alert("sua vida: "+hp)
                ; break;

    }

    if (hp < 1) {
        alert("n40 v0lt3...")
        document.write(`<script src="../html/script_medo.js"></script> `)
    }

}
