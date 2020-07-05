jest.mock('jsonwebtoken', () => ({
  token: 'any_token',
  sign (payload, secretKey) {
    this.payload = payload
    this.secretKey = secretKey
    return this.token
  }
}))
const jwt = require('jsonwebtoken')
const MissingParamError = require('../errors/missing-param-error')
const TokenGenerator = require('./token-generator')

const makeSut = () => {
  return new TokenGenerator('secretKey')
}

describe('Token Generator', () => {
  test('Sould return null if JWT returns null', async () => {
    const sut = makeSut()
    jwt.token = null
    const token = await sut.generate('any_id')
    expect(token).toBeNull()
  })

  test('Sould return a token if JWT returns token', async () => {
    const sut = makeSut()
    const token = await sut.generate('any_id')
    expect(token).toBe(jwt.token)
  })

  test('Sould call JWT with correct values', async () => {
    const sut = makeSut()
    await sut.generate('any_id')
    expect(jwt.payload).toEqual({
      _id: 'any_id'
    })
    expect(jwt.secretKey).toBe(sut.secretKey)
  })

  test('Sould throws if no secretKey is provided', async () => {
    const sut = new TokenGenerator()
    const promise = sut.generate('any_id')
    expect(promise).rejects.toThrow(new MissingParamError('Secret Key'))
  })

  test('Sould throws if no id is provided', async () => {
    const sut = makeSut()
    const promise = sut.generate()
    expect(promise).rejects.toThrow(new MissingParamError('ID'))
  })
})
