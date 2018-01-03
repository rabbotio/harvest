import Adapter from '../adapters'
class Model {
  static getExchanges = Adapter.getExchanges
  static getPrice = Adapter.getPrice
  static getPrices = Adapter.getPrices
  static getTradeFee = Adapter.getTradeFee
  static getWithdrawFee = Adapter.getWithdrawFee
  static getTradeFees = Adapter.getTradeFees
  static getWithdrawFees = Adapter.getWithdrawFees
}

export default Model