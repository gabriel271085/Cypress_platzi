describe('Waiting Function', () => {
    
    beforeEach(() => {
    cy.visit('https://platzi.com/')
    })

    it('wait for a defined time', ()=>{
        cy.wait(3000)
    })

    it('wait for an element', ()=>{
        cy.get('.LogoHeader',{timeout:3000}) //le da una espera de 3 segundos para aparecer
    })

    it.only('wait for an element and make an assertion', ()=>{
        cy.get('.LogoHeader',{timeout:3000}).should('be.visible') 
    })

})