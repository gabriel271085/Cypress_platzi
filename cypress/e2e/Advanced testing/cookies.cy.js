//este comando tiene la funcion de mantener las cookies dentro de los tests
Cypress.Cookies.defaults({
    preserve:'nombre'
})
describe("obtain cookies", () => {
    before(() => {
      cy.clearCookies()
    })
    after(() => {
        cy.clearCookie("name")
      })
 
})

describe("obtain cookies",()=>{
    it("obtain cookies", ()=>{
        cy.visit('/')
        cy.getCookies().should("be.empty")  
    })
    it('add cookie',()=>{
        cy.setCookie('nombre','Gabriel')
        cy.getCookies().should('have.length',1)
    })

    it ('obtain an specific cookie', ()=>{

        cy.getCookie("nombre").should("have.a.property", "value","Gabriel")
    })
})