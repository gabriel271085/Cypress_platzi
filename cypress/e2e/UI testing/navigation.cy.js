describe('Navigation',{ testIsolation: false }, () =>{  //se debe quitar el Testisolation para recargar la pagina
    it('navigate in a webpage', ()=> {                  //porque desde la v.12 no se guardan datos del cache
        cy.viewport(1920, 1080)
        cy.visit('https://google.com')
    })
    it('reload webpage', ()=> {
        cy.reload()
    })
    it('go backward and fordward', ()=> {
        cy.visit('https://cvpiqpaa.umsa.bo')
        cy.visit('https://cvpiqpaa.umsa.bo/course/index.php?categoryid=7')
        // cy.go('back') primera forma
        cy.go(-1) //segunda forma
        //cy.go('fordward') primera forma
        cy.go(1)
    })
})