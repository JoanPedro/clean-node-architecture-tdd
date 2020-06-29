const bcrypt = require('bcrypt')
const MissinParamError = require('../errors/missing-param-error')

module.exports = class Encrypter {
  async compare (value, hash) {
    if (!value) {
      throw new MissinParamError('value')
    }
    if (!hash) {
      throw new MissinParamError('hash')
    }
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
