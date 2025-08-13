'use strict'

// Importa os dados do arquivo JSON.
import funcionarios from "./funcionarios.json" with {type: "json"}

//Adicionando o body
const body = document.querySelector('body')
body.classList.add('body') 

//Adicionando a classe container
const container = document.querySelector('.container')

//Leitura de array
funcionarios.forEach((funcionarios) => {

    //Cria a div com os cards
    const card = document.createElement('div')
    card.classList.add('card')

    // Cria e configura a imagem
    const imagem = document.createElement('img')
    imagem.src = funcionarios.imagem
    imagem.alt = `Foto de ${funcionarios.nome}`

    // Cria o nome do funcionário
    const nome = document.createElement('span')
    nome.textContent = funcionarios.nome

    //Cria o cargo do funcionário
    const cargo = document.createElement('p')
    cargo.textContent = funcionarios.cargo

    // Adiciona todos os elementos criados dentro do card
    card.append(imagem, nome, cargo)

    //Adiciona o card ao container
    container.appendChild(card)

    //Adiciona o container ao body
    body.appendChild(container)

})
