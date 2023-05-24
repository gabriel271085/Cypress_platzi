describe('Asserts', () => {
    before(() => {
        cy.visit('/automation-practice-form')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
    after(()=>{
        cy.visit('/') //despues de todas las pruebas va al home
    })
    
    it('assert test', () => {
      cy.url().should('include', 'demoqa.com') // valida si la pagina web tiene ese URL
      //valida si el elemento es visible en la UI y que el atributo es el indicado
      cy.get('#firstName').should('be.visible').and('have.attr','placeholder','First Name') 
      })  
    
    it('assert test second way', () => {
        cy.get('#firstName').then((element) =>{
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder','First Name')
        })
    }) 
    it('assert third way',() => {
        cy.get('#firstName').then((element) =>{
            assert.equal(element.attr('placeholder'),'First Name')
        })
    })
})