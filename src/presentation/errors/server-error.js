module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super('Internal Error')
    this.name = 'ServerError'
  }
}
