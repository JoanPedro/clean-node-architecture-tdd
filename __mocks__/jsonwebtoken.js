module.exports = {
  token: 'any_token',
  secretKey: '',
  sign (id, secretKey) {
    this.id = id
    this.secretKey = secretKey
    return this.token
  }
}
