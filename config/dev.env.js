var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //API_HOST: '"http://localhost:8080"'
  //API_HOST: '"https://explore.apim.ca:8443"'
  //API_HOST: '"https://35.166.188.123:8443"'
 
 // API_HOST: '"https://192.168.22.131:8443"'
  API_HOST: '"https://api.poc.la.gov/permits"'
  
  
})
