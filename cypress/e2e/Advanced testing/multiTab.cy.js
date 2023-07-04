describe("browse between different tabs", ()=>{

    it ('visit a website who has the target: _blank', ()=>{
        cy.visit('https://demoqa.com/links')
        //al hacer click en el link nos manda a un target _blank o sea se abre una pagina nueva
        //y por tanto el test ya no es realizable
        cy.get('#simpleLink').click() 
    })
    it.only('open the linkpage inside Cypress window', ()=>{
        cy.visit('https://demoqa.com/links')
        // con el comando invoke se remueve el atributo de target
        cy.get('#simpleLink').invoke('removeAttr','target').click() 
    })
})