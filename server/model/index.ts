import Cryptox from '@rabbotio/cryptox'
class Model {
  static getExchanges = Cryptox.getExchanges
  static getPrice = Cryptox.getPrice
  static getPrices = Cryptox.getPrices
  static getTradeFee = Cryptox.getTradeFee
  static getWithdrawFee = Cryptox.getWithdrawFee
  static getTradeFees = Cryptox.getTradeFees
  static getWithdrawFees = Cryptox.getWithdrawFees
}

export default Model