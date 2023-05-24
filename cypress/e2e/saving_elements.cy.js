describe('Saving Elements', () => {
    

    it('avoid repetitions', () => {
      cy.visit('/automation-practice-form')
      cy.get('input[placeholder="Last Name"]').parents('form').then((form)=> {

        const inputs = form.find('input')  //guarda en un array la cantidad de inputs que hay dentro de form
        const divs = form.find('div')
        const labels = form.find('label')

        expect(inputs.length).to.eq(15) //si los inputs no son iguales a 15 el test falla
        expect(divs.length).to.eq(70)  
        expect(labels.length).to.eq(16)

        cy.wrap(inputs).should('have.property', 'length',15) // hace un assert para comparar si hay 15 inputs encontrados
          
        cy.task('log',inputs.length)
      })  

    })

    
  })

