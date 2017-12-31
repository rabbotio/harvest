class Model {

  static Probe = require('../probe')
  static probe = new Probe()

  static getPrice = probe.getPrice
}

export default Model