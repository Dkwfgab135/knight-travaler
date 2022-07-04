document.write(`
<!DOCTYPE html>
<html lang="pt=br" class="fixed">

<head>
  <meta charset="UTF-8">
  <title>cutcene </title>

  <link rel="stylesheet" href="../CSS/animationdeath.css">
  <link rel="stylesheet" href="../CSS/style_level4c.css">

</head>

<body>

  <div id="conteudo">

    <section>
      <img src="../imagens/Personagens/cavaleiro4.gif" height="750" width="750" id="cavaleiro">
      <img src="../imagens/Personagens/particulas2.gif" id="particulas" height="170" width="170">

    </section>


  </div>

  <div class="wrap">
    <div id="conteudo2">

      <section>
        <img src="../imagens/Personagens/dragãom.png" id="dragao" class="opac-0" height="700" width="700">
        <img src="../imagens/Personagens/maodg.png" id="maodg" class="opac-0" height="300" width="300">
      </section>
    </div>
  </div>


  <div class="footer" id="pag1" >
    <footer>

      <p class="info"> A besta cai perante seus pés, tu é mais agora, sua esperteza é a maior, seu poder é maior, sua força, seus requisitos chegam ao limite, você é deus agora, faça o que quiser com estes poderes... GAME OVER</p>

      <a href="../home.html" >
        <button id="binst">fim?</button>
      </a>

    </footer>
  </div>

  <!--        <div id="pag2" class="instr">
            <div class="modal-content">
              <div>

                <button onclick="document.getElementById('pag2').style.display='none'" id="binst"> voltar </button>
              <p class="p"> 1 - o cavaleiro é bem treinado mas<br> não é perfeito seus ataques variam<br> de 0 a 20. <br><br>
                2 - você ingeriu toda a poção se modificando<br> em seu organismo. chance de 2 em 3 para se<br> curar, erro: o inimigo é curado, valor da cura: 40</p>
              <p class="p2"> 3 - com seu poder magico tu tens probabilidade<br> de 4 em 7
                para retirar a vitalidade do inimigo.<br> A magia pode dar errado e te machucar<br><br>
                4-  voce roubou uma habilidade: faca retalhada;<br> seus ataques variam de 0 a 17 +5.</p>
                

                <button onclick="document.getElementById('pag3').style.display='block'" id="binst1"> pagina 2 </button>
              </div>
            </div>
          </div>

          <div id="pag3" class="instr">
            <div class="modal-content">
              <div>
                <button onclick="document.getElementById('pag3').style.display='none'" id="binst"> pag 1 </button>
              <p class="p"> 4.2 - voce esta expelindo uma gosma pela palma de sua mão,<br> a faca retalhada aplica veneno </p>
              <p class="p2"> dica: a vida total é de 150.<br> os ataques deles variam de 0 à 15</p>
                </p>
              </div>
            </div>
          </div> -->

  <script src="../html/script_3.js"></script>

  <header>
    <div>
      <figure>
        <!-- area da animação inicial da pagina-->
        <div>
          <img id="sombra" src="../imagens/Personagens/sombra.png" alt="sombra">
        </div>
      </figure>
    </div>
  </header>

</body>

</html>
`)