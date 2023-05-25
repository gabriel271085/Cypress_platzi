describe('uso de BaseURL', () => {
    it('navigate in a BaseURL webpage, get by a tag', () => {
      // Deshabilitar el manejo de excepciones no capturadas
      cy.once('uncaught:exception', () =>false);
      cy.visit('/automation-practice-form')
      cy.viewport(1920,1080)
      cy.get('input') //nos muestra todo los inputs de la pagina actual
  
    })

    it('get by an attribute', () => {
      cy.get('[placeholder="First Name"]') //get para obtener el input por su atributo placeholder
    })

    it('get by an attribute and a tag', () => {
      cy.get('input[placeholder="Last Name"]') 
    })

    it('get by an id', () => {
      cy.get('#userEmail')
    })

    it('get by a class', () => {
      cy.get('.mr-sm-2.form-control')
    })

    it('use of contains', () => {
      cy.contains('Name')
      //delimita la busqueda en una clase especifica
      cy.contains('.header-wrapper','Widgets')
    })

    it('looking for parents', () => {
      cy.get('.mr-sm-2.form-control').parent() //obtiene el elemento padre
      //obtiene todos los elementos padre y de ellos solo selecciona el label
      cy.get('#userEmail').parents().find('label') 
      cy.get('form').find('label')  //aqui va del padre al hijo
    })
  })

