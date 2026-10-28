import { describe, expect, test } from 'vitest'
import request from 'supertest'
import { app } from '../index'

describe('Dog routes', () => {
  test('GET /api/dogs/random returns dog image', async () => {
    const res = await request(app).get('/api/dogs/random')

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
  })
})
