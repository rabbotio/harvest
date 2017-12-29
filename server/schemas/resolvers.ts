let _contents = []
const Harvester = require('../harvester')
const harvester = new Harvester()

const resolvers = {
  Query: {
    prices: (root, _, context) => harvester.fetch()
  },
  Mutation: {
    setContent: (_, { bar }, context) => _contents.push(bar)
  }
}

module.exports = resolvers
