import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

export default new Elysia()
    .use(swagger())
    .get('/', 'hello')
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })
    .compile()
