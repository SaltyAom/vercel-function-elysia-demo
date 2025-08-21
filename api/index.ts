import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', 'hello')
    .post('/mirror', ({ body }) => body, {
	body: t.Object({
		name: t.String()
	})
    })
    .compile()

export default app.fetch
