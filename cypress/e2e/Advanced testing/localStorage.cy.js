describe('LocalStorage', ()=>{
    it('create a task', ()=>{
        cy.visit('https://todo-cypress-iota.vercel.app')
        cy.get('#title').type("Test 1")
        cy.get('#description').type("Play with kids")
        cy.contains('Create').click()
        //assert para indicar que en la UI existe el texto Test 1
        cy.contains('Test 1')

        cy.reload()
        //doble assert que aparezca en la UI y en el localStorage
        cy.contains('Test 1').then (()=>{
            expect(localStorage.getItem('Test 1')).to.exist
        })
        //remueve la tarea y verifica en el localstorage
        cy.contains('Remove').click().then(()=>{
            expect(localStorage.getItem('Test 1')).to.not.exist
        })

        cy.clearLocalStorage('Test 1').should(localStorage=>{
            expect(localStorage.getItem('prop1')).to.be.null
        })
    })
})