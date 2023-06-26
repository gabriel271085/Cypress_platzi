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
})