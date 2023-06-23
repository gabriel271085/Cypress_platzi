const devices = [
    { viewport: "macbook-15", type: "desktop" },
    { viewport: "ipad-2", type: "mobile" },
    { viewport: [1280, 720], type: "desktop" },
    { viewport: [375, 667], type: "mobile" },
  ];
describe('Emulate Mobile Devices', ()=>{
    
    devices.forEach((device)=>{
        it('viewport iteration',()=>{
            if(Cypress._.isArray(device.viewport)){
            cy.viewport(device.viewport[0],device.viewport[1])
            }
            else{
                cy.viewport(device.viewport)
            }
        cy.visit('/')
        if (device.type ==="desktop"){
            cy.contains('Safari').should("be.visible")
        }
        else{
            cy.contains('Safari').should("not.be.visible")
        }
        })
    })
})