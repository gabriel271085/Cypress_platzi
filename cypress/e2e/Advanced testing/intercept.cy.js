describe("intercepting network request",()=>{
    it("single request", () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
          expect(response.body).to.have.property("name", "ditto")
          expect(response.status).to.eq(200)
          cy.log(response.body)
        })
      })
      //prueba para intercept
      it.only("intercept test", () => {
        cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon-species/1").as("bulbasaur")
        cy.visit("/");
        //click sobre el boton de mas detalles
        cy.contains("Bulbasaur").parent().parent().within((element) => {

            cy.wrap(element).contains("Más detalles").click();

          });
    
        cy.wait("@bulbasaur").then((interception) => {
          cy.log(interception);
          expect(interception.response.body).to.have.property("name", "bulbasaur");
          expect(interception.response.statusCode).to.eq(200);
        });
       
    
        // suponiendo que la peticion se tarda mucho en responder podriamos esperar hasta 20 seg
        // cy.wait("@bulbasaur", { timeout: 20000 });
    
      });
    
      it.only("Prueba de intercept forzando a que falle", () => {
        cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon-species/1", {
          forceNetworkError: true,
        }).as("error");
        cy.visit("https://pokedexpokemon.netlify.app");
        cy.contains("Bulbasaur")
          .parent()
          .parent()
          .within((element) => {
            cy.wrap(element).contains("Más detalles").click();
          });
    
        cy.wait("@error").should("have.property", "error");
    
        // cy.wait('@bulbasaur').its('response.statusCode').should('eq', 200)
      });
})