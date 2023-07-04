describe ('security', ()=>{
    it('navigate between many domains',()=>{
        cy.visit('/')

        //no es posible visitar dos paginas dentro de un solo test 
        //por motivos de seguridad, ya que una pagina web puede contener
        //un link malicioso
        cy.visit("https://todo-cypress-iota.vercel.app")
        cy.get("#title").type("Titulo de prueba")
    })

    it.only("navego un dominio aqui", function () {
        cy.visit("https://todo-cypress-iota.vercel.app");
        //obtenemos el titulo del contenedor h1 y lo guardamos
        cy.get("h1").invoke("text").as("titulo");
      });
      it.only("navego otro dominio aqui", function () {
        // como es el mismo dominio no habra problema para invocar el texto guardado
        cy.visit("https://todo-cypress-iota.vercel.app");
        cy.log(this.titulo);
      })
})