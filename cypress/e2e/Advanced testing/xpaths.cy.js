describe("work with xpaths", ()=>{
    it ("obtain it with a CSS escapeSelector", ()=>{
        cy.visit("/")
        cy.get("#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1")
            .should("contain","Bulbasaur")
    })

    it ("obtain it with a xpath", ()=>{
        cy.visit("/")
        cy.xpath('//h1[contains(text(),"Bulbasaur")]')
            .should("contain","Bulbasaur")
    })
})