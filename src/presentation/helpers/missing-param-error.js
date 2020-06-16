module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`${paramName} should be provided`)
    this.name = 'MissingParamError'
  }
}
