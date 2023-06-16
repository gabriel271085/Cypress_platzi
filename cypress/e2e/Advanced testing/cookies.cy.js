
//session nos sirve por ejemplo para guardar el token de autenticacion en una cookie
//session almacena el dato para reutilizarlo
    beforeEach (()=>{
        cy.session("login", ()=>{
            cy.visit('/')
            cy.setCookie("nombre","Gabriel")
        })
    })

describe("obtain cookies",()=>{
   
    it('add cookie',()=>{
        cy.setCookie('nombre','Gabriel')
        cy.getCookies().should('have.length',1)
    })

    it ('obtain an specific cookie', ()=>{

        cy.getCookie("nombre").should("have.a.property", "value","Gabriel")
    })
})