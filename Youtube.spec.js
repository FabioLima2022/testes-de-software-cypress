/// <reference types="Cypress"/>

//Descrição do teste a ser realizado.

describe('Central de Atendimento ao Cliente TAT', function()
{
    
    //Antes de executar os testes, visita a página do youtube.com.

    beforeEach(function()
    {
        cy.visit('https://www.youtube.com')
    })

    //Busca o campo de pesquisa com o nome do canal e após pesquisar faz o click no canal oficial.
    it('busca o campo de pesquisa com o nome do canal', function()
    {
        cy.get('#search-input > #search').type('lokis')
        cy.get('#search-icon-legacy > yt-icon.style-scope > .style-scope > .yt-spec-icon-shape > div').click()
        cy.get('#channel-title > #container > #text-container > #text').click()
        cy.contains('#meta > #channel-name > #container > #text-container > #text', 'Lokis')
          .should('be.visible')
        
    })
    
})