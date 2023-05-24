describe('testing http status', ()=>{
    it('validate successful status code', ()=> {

        cy.request('employees')
            .its('status').should('eq', 200)
    })
    it('validate faillure status code', ()=> {

        cy.request({url:'employees/7', failOnStatusCode: false})
            .its('status').should('eq', 404)
    })

})