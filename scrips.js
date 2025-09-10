let produtos = [
    {
        id: 1,
        nome: "iPhone 16 Pro Max 512 Gb",
        categoria: "smartphones",
        preco: 9.629,
        precoOriginal: 10.629,
        desconto: 1.000,
        imagem: "./01 iPhone 16 varios.jpg",
        descricao: "Smartphone Apple de última geração"
    },

    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 9.999,
        precoOriginal: 15.180,
        desconto: 1.000,
        imagem: "./04 MacBook.jpg",
        descricao: "Notebook Apple Potente"
    },

    {
        id: 3,
        nome: "Headphone JBL",
        categoria: "headphones",
        preco: 463,
        precoOriginal: 156,
        desconto: 100,
        imagem: "./05 headfone jbl.jpg",
        descricao: "Fones sem fio JBL"
    },

    {
        id: 4,
        nome: "Celular Samsung Galaxy S25",
        categoria: "smartphones",
        preco: 5.999,
        precoOriginal: 6.999,
        desconto: 1.000,
        imagem: "./02 samsung.jpg",
        descricao: "Celular Samsung Galaxy S25 Ultra 5G, 512GB, 12GB RAM, Câmera Quádrupla de 200+50+10+50, Tela Grande de 6.9"
    },

    {
        id: 5,
        nome: "Caixa de Som Bombox 3 JBL",
        categoria: "accessories",
        preco: 2.044,
        precoOriginal: 2.144,
        desconto: 100,
        imagem: "./03 Caixa de som jbl.jpg",
        descricao: "Caixa de som com 2 transdutores woofers de 4 polegadas e 2 tweeters de 20 mm."
    },

    {
        id: 6,
        nome: "Teclado Gamer",
        categoria: "teclado-gamer",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "./07 teclado gamer.jpg",
        descricao: "Teclado mecânico RGB para gamers"
    },

    {
        id: 7,
        nome: "Pc Gamer",
        categoria: "laptops",
        preco: 7.499,
        precoOriginal: 8.499,
        desconto: 1.000,
        imagem: "./06 pc gamer.jpg",
        descricao: "Fone com cancelamento de ruído"
    },

];

let containerProdutos = document.querySelector(".produtos-container");
let inputPesquisa = document.querySelector(".input-pesquisa");
let textoInput = ""
let todosBotoes = document.querySelectorAll(".botao-categorias")
let categoria = "todos"


function mostrarProdutos (){
    let htmlProdutos = ""


    produtos.forEach(prd => {


        if(prd.nome.toLocaleLowerCase().includes(textoInput.toLocaleLowerCase())){


        if(prd.categoria === categoria || categoria === "todos") {


        htmlProdutos += `
            <div class="cartao-produto">
                <img src="${prd.imagem}" class="imagem-produto" style="height: 200px; width: 100%; object-fit: cover; aspect-ratio: 1/1;">
                <div class="info-produto">
                    <h3 class="nome-produto">${prd.nome}</h3>
                    <p class="descricao-produto">${prd.descricao}</p>
                    <p class="preco-produto">R$ ${prd.preco}</p>
                    <button class="botao-produto">Ver Detalhes</button>
                </div>


            </div>
        `
          }


        }      


    })


    containerProdutos.innerHTML = htmlProdutos

}


mostrarProdutos ()


function pesquisar(){
    textoInput = inputPesquisa.value


    mostrarProdutos ()


}


inputPesquisa.addEventListener("input", pesquisar)


todosBotoes.forEach(botao => {


    botao.addEventListener("click", function(){
        categoria = botao.getAttribute("data-categoria")


        todosBotoes.forEach(b => b.classList.remove("ativo"))


        botao.classList.add("ativo")


        mostrarProdutos()


    })


})




