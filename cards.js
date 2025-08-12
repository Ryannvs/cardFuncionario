'use strict'

// Importa os dados do arquivo JSON.
import funcionarios from "./funcionarios.json" with {type: "json"}

/**
 * Cria um elemento de card HTML para um funcionário.
 @param {object} funcionario - O objeto do funcionário contendo nome, cargo e imagem.
 @returns {HTMLElement} O elemento div do card criado.*/
const criarCard = (funcionario) => {
    // Cria o elemento principal do card
    const card = document.createElement('div')
    card.classList.add('card')

    // Cria e configura a imagem
    const imagem = document.createElement('img')
    imagem.src = funcionario.imagem
    imagem.alt = `Foto de ${funcionario.nome}`

    // Cria o nome
    const nome = document.createElement('span')
    nome.textContent = funcionario.nome

    //Cria o cargo
    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    // Adiciona todos os elementos criados dentro do card
    card.append(imagem, nome, cargo)

    return card
}

// Seleciona o container onde os cards serão inseridos
const container = document.getElementById('funcionarios')

// Mapeia cada objeto funcionário para um elemento de card HTML
const cards = funcionarios.map(criarCard)

// Adiciona todos os cards gerados ao container de uma só vez
container.replaceChildren(...cards)