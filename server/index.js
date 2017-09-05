import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import mongoose from 'mongoose'
import Prize from './models/prize'
import PrizeSeed from './seeds/prize'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/prizes')
let db=mongoose.connection.db


app.set('port', port)

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

db.once('open', function () {
  db.listCollections().toArray( function(err, names) {
    if (err) console.log(err)
    if (names.length <= 0) {
      //Seed the MongoDB
      PrizeSeed.forEach( function (prize) {
        new Prize(prize).save()
      })
    }
  })
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
})
