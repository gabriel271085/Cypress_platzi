import { loginPage } from "./PageObjects/loginPage"

describe ("login with POM", ()=>{
    
    beforeEach(()=>{
        loginPage.visit()
    })

    it("wrong login", ()=>{
        loginPage.validateLoginPage()
        loginPage.login("sara","rafael")
        loginPage.validateErrorLogin() 
    })

    it("successfull login", ()=>{
        loginPage.validateLoginPage()
        loginPage.login("username","password")
        loginPage.validateSuccessLogin

    })
//se configura una variable de entorno en el archivo cypress.config.js
//sin embargo el archivo cypress.config.js siempre se sube al repositorio
    it("successfull login with cy.env", ()=>{
        loginPage.validateLoginPage()
        cy.log(Cypress.env())
        loginPage.login("username","password")
        loginPage.validateSuccessLogin

    })
// aqui se crea un archivo llamado cy.env.json el cual puede estar protegido
// al momento de subir a un repositorio
    it("successfull login with cy.env.json", ()=>{
        loginPage.validateLoginPage()
        cy.log(Cypress.env())

        loginPage.login(Cypress.env("credentials").user,Cypress.env("credentials").password)
        loginPage.validateSuccessLogin

    })

    it.only("successfull login from terminal", ()=>{
        loginPage.validateLoginPage()
        cy.log(Cypress.env())

        loginPage.login(Cypress.env("credentials").user,Cypress.env("credentials").password)
        loginPage.validateSuccessLogin

    })

})