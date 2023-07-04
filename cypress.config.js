const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} =
require("cypress-image-snapshot/plugin")

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://pokedexpokemon.netlify.app/',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on, config)
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
    testIsolation: false,

    env:{
      user: "username",
      password:"password"
    }
  },
});
