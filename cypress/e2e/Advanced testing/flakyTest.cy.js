describe('flaky test', ()=>{
    it('single query comand', ()=>{
        cy.visit('/')
        //es mejor usar este comando cuando se tiene elementos dinamicos
        cy.contains('//h1[contains(text(),"Bulbasaur")]')
            .should("contain","Bulbaaaaasaur")
    })
    it('alternate a command with assertions',()=>{
        cy.visit('/')
        cy.get('#submit').click()
        //con esta validacion nos aseguramos primero que el boton este activado
        //si no hacemos esto el test fallara    
        cy.get('#submit').should('not.be.disabled').click()
    })

})