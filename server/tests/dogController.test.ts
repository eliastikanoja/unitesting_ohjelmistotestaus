import { describe, expect, test, vi } from 'vitest'
import { getDogImage } from '../controllers/dogController'
import * as dogService from '../services/dogService'

describe('Dog Controller', () => {
  test('should return success response with dog image data', async () => {

    const mockDogData = {
      imageUrl: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
      status: 'success'
    }

    vi.spyOn(dogService, 'getRandomDogImage')
      .mockResolvedValue(mockDogData)

    const res = {
      json: vi.fn()
    }

    await getDogImage({} as any, res as any)

    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: mockDogData
    })
  })
})
