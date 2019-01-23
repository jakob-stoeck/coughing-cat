'use strict'
const dotenv = require('dotenv')
const amazon = require('amazon-product-api')
const util = require('util')

const result = dotenv.config()
if (result.error) {
  throw result.error
}

function inspect(myObject) {
  console.log(util.inspect(myObject, {showHidden: false, depth: null, colors: true}))
}

const client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET
})

const searchOptions = {
  keywords: 'Lustige Weihnachtspullover',
  // sort: 'salesrank',
  // searchIndex: 'Apparel',
  responseGroup: 'Small,Reviews',
  domain: 'webservices.amazon.de'
}

client.itemSearch(searchOptions)
.then(results => inspect(results[0]))
.catch(err => inspect(err))
