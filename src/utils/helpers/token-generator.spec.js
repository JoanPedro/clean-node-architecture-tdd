const jwt = require('jsonwebtoken')

class TokenGenerator {
  constructor (secretKey) {
    this.secretKey = secretKey
  }

  async generate (id) {
    return jwt.sign(id, this.secretKey)
  }
}

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
    expect(jwt.id).toBe('any_id')
    expect(jwt.secretKey).toBe(sut.secretKey)
  })
})
