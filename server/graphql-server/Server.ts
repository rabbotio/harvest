class Server {
  _initApp () {
    // Express
    const express = require('express')
    const app = express()

    // CORS
    const cors = require('cors')
    app.use(cors())

    // Helmet
    const helmet = require('helmet')
    app.use(helmet())

    // JSON
    const bodyParser = require('body-parser')
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    // Static
    app.use(express.static('public'))

    return app
  }

  constructor (baseURL, options = {}) {
    this.baseURL = baseURL
    this._app = this._initApp()
  }

  get app () {
    return this._app
  }

  start () {
    return new Promise((resolve, reject) => {
      // Graceful Shutdown Server
      const gracefulShutdown = (server, signal) => {
        console.info(`Received kill signal (${signal}), shutting down gracefully.`)
        server.close(() => {
          console.info('Closed out remaining connections.')
          process.exit()
        })
      }

      // Server
      const { URL } = require('url')
      const port = new URL(this.baseURL).port

      // Dispose old one
      if (this.server) this.server.close()

      // New server
      this.server = this._app.listen(port, err => {
        if (err) return reject(err)
        console.info(`Server   : ${this.baseURL}`)
        resolve(this.server)
      })

      // Graceful server shutdown
      // listen for TERM signal .e.g. kill
      process.on('SIGTERM', () => {
        gracefulShutdown(this.server, 'SIGTERM')
      })

      // listen for TERM siganal .e.g. Ctrl-C
      process.on('SIGINT', () => {
        gracefulShutdown(this.server, 'SIGINT')
      })
    })
  }

  stop () {
    if (!this.server) return Promise.resolve(false)

    return new Promise((resolve, reject) => {
      console.info(`Server   : closing...`)
      this.server.close(() => {
        console.info(`Server   : bye!`)
        resolve(true)
      })
      this.server = null
    })
  }
}

module.exports = Server
