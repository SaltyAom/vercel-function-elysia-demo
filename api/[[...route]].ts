import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

export default new Elysia({ prefix: '/api' })
    .use(swagger())
    .get('/', 'Hello Elysia!')
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })
    .compile()
