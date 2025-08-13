'use strict'

// Importa os dados do arquivo JSON.
import funcionarios from "./funcionarios.json" with {type: "json"}

const body = document.querySelector('body')
body.classList.add('body') 

const container = document.querySelector('.container')

funcionarios.forEach((funcionarios) => {

    const card = document.createElement('div')
    card.classList.add('card')



    // Cria e configura a imagem
    const imagem = document.createElement('img')
    imagem.src = funcionarios.imagem
    imagem.alt = `Foto de ${funcionarios.nome}`

    // Cria o nome
    const nome = document.createElement('span')
    nome.textContent = funcionarios.nome

    //Cria o cargo
    const cargo = document.createElement('p')
    cargo.textContent = funcionarios.cargo

    // Adiciona todos os elementos criados dentro do card
    card.append(imagem, nome, cargo)

    container.appendChild(card)

    body.appendChild(container)

})
