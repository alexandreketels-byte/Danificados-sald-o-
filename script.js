const produtos = [
  {
    os: "12345",
    descricao: "Ar Split com vazamento",
    fabricante: "LG",
    btus: "12000",
    valor: "R$ 800",
    imagem: "imagens/ar1.jpg"
  },
  {
    os: "12346",
    descricao: "Não liga",
    fabricante: "Samsung",
    btus: "9000",
    valor: "R$ 600",
    imagem: "imagens/ar2.jpg"
  }
];

const catalogo = document.getElementById("catalogo");

produtos.forEach(produto => {
  catalogo.innerHTML += `
    <div class="card">
      <img src="${produto.imagem}" />
      <h3>${produto.fabricante}</h3>
      <p><strong>OS:</strong> ${produto.os}</p>
      <p>${produto.descricao}</p>
      <p>${produto.btus} BTUs</p>
      <p class="preco">${produto.valor}</p>
    </div>
  `;
});
