function clicar() {
    let res = document.getElementById('res')
    let botao = document.getElementById('info')
    let resultados = "";
    resultados += `
    <section id="res">
    <div class="item-resultado">
    <p>Olá pode me chamar de Laio, estou estudando programacão e segurança da informação,
    tenho um pouco de experiência em design.   
    Este é meu portfólio e meus projetos estão abaixo, espero que goste! 
    </p>
    </div>
    </section>
    `
    botao.style.display = 'none';

res.innerHTML = resultados;
}