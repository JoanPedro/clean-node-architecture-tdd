module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super('Unauthorized requisition')
    this.name = 'UnauthorizedError'
  }
}
