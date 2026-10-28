import { describe, test, expect, vi } from 'vitest'
import { getRandomDogImage } from '../services/dogService'

describe('Dog Service', () => {
  test('should return imageUrl and success status', async () => {
    const mockData = {
      message: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
      status: 'success'
    }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData
    })

    const result = await getRandomDogImage()

    expect(result.imageUrl).toBe(mockData.message)
    expect(result.status).toBe('success')
    expect(fetch).toHaveBeenCalledOnce()
  })
})

test('should throw an error when API returns error', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: false,
    status: 500
  })

  await expect(getRandomDogImage()).rejects.toThrow(
    'Failed to fetch dog image: Dog API returned status 500'
  )
})