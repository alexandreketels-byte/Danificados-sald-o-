let produtos = [];

async function carregarDados() {
  const resposta = await fetch("dados.csv");
  const texto = await resposta.text();

  const linhas = texto.split("\n").slice(1);

  produtos = linhas.map(linha => {
    const [os, item, defeito, fabricante, btus, valor, foto] = linha.split(",");
    return { os, item, defeito, fabricante, btus, valor, foto };
  }).filter(p => p.os);

  renderizar(produtos);
}

function renderizar(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  lista.forEach(p => {
    const mensagem = `Tenho interesse na OS ${p.os} - ${p.item}`;
    const link = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;

    catalogo.innerHTML += `
      <div class="card">
        <img src="${p.foto}" />
        <h3>${p.fabricante}</h3>
        <p><strong>OS:</strong> ${p.os}</p>
        <p><strong>Item:</strong> ${p.item}</p>
        <p>${p.defeito}</p>
        <p>${p.btus} BTUs</p>
        <p class="preco">R$ ${p.valor}</p>
        <a class="botao" href="${link}" target="_blank">Falar no WhatsApp</a>
      </div>
    `;
  });
}

document.getElementById("busca").addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();

  const filtrados = produtos.filter(p =>
    p.fabricante.toLowerCase().includes(termo) ||
    p.item.toLowerCase().includes(termo)
  );

  renderizar(filtrados);
});

carregarDados();
