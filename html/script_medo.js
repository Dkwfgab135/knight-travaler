document.write(`<!DOCTYPE html>
<html lang="pt=br" class="fixed">

<head>
  <meta charset="UTF-8">
  <title>... </title>

  <style>

*{
    text-align: center;
    font-family: cursive;
    text-decoration: none;
    color: white;
}

body {
background-color: #000000;
    height: 100%;
    overflow: hidden;
}

html {
position: relative;
    padding: 303px;
    height: 20%;
}

div.wrap {
    height: 100%;
    overflow: hidden;
}

#binst {
    border: none;
    color: rgb(0, 0, 0);
    padding: 30px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 40%;
    cursor: pointer;
    position: absolute;
    padding-top: 10px;
    padding-bottom: 10px;

    right: 100px;
    bottom: 100px;

}

.pegar{
    position: absolute;
  top: 100px;
  left: 20%;
  opacity: 0%;
  }

  .surgir{

    animation: surgir;
    animation-delay: 2s;
    animation-duration: 10s;
    animation-fill-mode: forwards;
  }

  @keyframes surgir{
    0%{
      opacity: 0%;
    }

    100%{
      opacity: 100%;
    }
  }

  </style>
</head>

<body>

  <div id="conteudo">

    <section>

      <img src="../imagens/cenario/lorde.png" class="pegar">

    </section>


  </div>

  <div class="wrap">
    <div id="conteudo2">

    </div>
  </div>


        <button id="binst">...</button>

<script>

document.getElementById("binst").onclick = function surgir() {

  PlayAudio('../html/lorde.wav')

  setTimeout(tchau, 9000)

document.querySelector(".pegar").classList.add('surgir')

}

  function PlayAudio(url) {
    new Audio(url).play();
}

function tchau(){
  window.location.href = "../home.html"
}
</script>
</body>

</html>
`)