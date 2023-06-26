describe ("login with Custom commands", ()=>{
    
    it("wrong login", ()=>{
    cy.login("esteban","samuel")
    })

    it("successfull login", ()=>{
        cy.login("username","password")

    })

})