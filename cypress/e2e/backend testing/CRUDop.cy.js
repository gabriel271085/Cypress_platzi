describe('testing CRUD opeartions', ()=>{
    it('create a new employee item', ()=> {

        cy.request({
            url: "employees",
            method: "POST",
            body: {
              first_name: "Esteban",
              last_name: "Cayoja",
              email: "esteban@gmail.com",
            }
        })
        .then(response=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')

            const id =response.body.id
            cy.wrap(id).as('id')
        })

    });
    it('validate the creation in the db', ()=>{
        cy.request('GET','employees').then(response=>{
            expect(response.body[response.body.length -1].first_name).to.eq('Esteban')
        })

    })
    it('modify data in the db', function (){
        cy.request({
            url: `employees/${this.id}`,
            method: "PUT",
            body:{
              first_name: "Esteban",
              last_name: "Cayoja",
              email: "esteban@cayoja.com",
            }
        }).then(response =>{
            cy.log(response);
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
        })

    })
    it('delete data', function(){
        cy.request({
            url: `employees/${this.id}`,
            method: "DELETE",
        }).then(response =>{
            expect(response.status).to.eq(200)
        })
    })

})
