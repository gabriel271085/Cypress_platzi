describe ('visual testing', ()=>{
    it('a regular regression test',()=>{
        
        cy.visit('/')
        cy.wait(2000)
        //cy.scrollTo('bottom')
        cy.matchImageSnapshot()

    })

    it("second regression test, only one element", () => {
        cy.visit("/");
        cy.contains("Bulbasaur").should("be.visible").matchImageSnapshot();
      });
})