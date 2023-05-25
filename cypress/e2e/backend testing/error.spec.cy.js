describe('testing fails', ()=>{
    it('it should validate the failed status code and the error message', ()=> {

        cy.request({url:"https://pokeapi.co/api/v2/aaa", failOnStatusCode:false})
            .then(response=>{
                expect(response.status).to.eq(404)
                expect(response.body).to.eq('Not Found')
            })
    })

    it('it should validate the failed status code and the error message in the rick and morty api', ()=> {

        cy.request({url:"https://rickandmortyapi.com/api/location/3999999", failOnStatusCode:false})
            .then(response=>{
                expect(response.status).to.eq(404)
                expect(response.body).to.have.property('error','Location not found')

            })
    })

})