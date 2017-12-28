// Helper
const prod = process.env.NODE_ENV === 'production'
const dev = process.env.NODE_ENV === 'dev'
const test = process.env.NODE_ENV === 'test'

const config = {
  // Environments
  prod,

  // Server
  baseURL: process.env.BASE_URL,
}

module.exports = config