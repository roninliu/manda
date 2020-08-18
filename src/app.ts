import Koa from 'koa'
import config from './config/config'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'ok'
})

app.listen(config.port)
