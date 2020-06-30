const jwt = require('jsonwebtoken')
const MissingParamError = require('../errors/missing-param-error')

module.exports = class TokenGenerator {
  constructor (secretKey) {
    this.secretKey = secretKey
  }

  async generate (id) {
    if (!this.secretKey) {
      throw new MissingParamError('Secret Key')
    }
    if (!id) {
      throw new MissingParamError('ID')
    }
    return jwt.sign(id, this.secretKey)
  }
}
