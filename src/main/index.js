const MongoHelper = require('../infra/helpers/mongo-helper')
const env = require('./config/env')

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    const app = require('./config/app')
    console.log('Oi')
    app.listen(5858, () => console.log('Server Running'))
  })
  .catch(() => console.error)
