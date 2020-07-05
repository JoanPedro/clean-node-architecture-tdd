const LoginRouter = require('../../presentation/routers/login-router')
const AuthUseCase = require('../../domain/usecases/auth-usecase')
const EmailValidator = require('../../utils/helpers/email-validator')
const LoadByEmailRepository = require('../../infra/repositories/load-user-by-email-repository')
const UpdateAccessTokenRepository = require('../../infra/repositories/update-access-token-repository')
const Encrypter = require('../../utils/helpers/encrypter')
const TokenGenerator = require('../../utils/helpers/token-generator')
const env = require('../config/env')

const tokenGenerator = new TokenGenerator(env.tokenSecret)
const encrypter = new Encrypter()
const updateAccessTokenRepository = new UpdateAccessTokenRepository()
const loadByEmailRepository = new LoadByEmailRepository()
const emailValidator = new EmailValidator()
const authUseCase = new AuthUseCase({
  loadByEmailRepository,
  updateAccessTokenRepository,
  encrypter,
  tokenGenerator
})
const loginRouter = new LoginRouter({
  authUseCase,
  emailValidator
})

module.exports = loginRouter
