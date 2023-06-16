const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://pokedexpokemon.netlify.app/',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        log(message){
         console.log('Mensaje del console log del task ' + message)
         return null
        } 
      })
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
    testIsolation: false
  },
});
