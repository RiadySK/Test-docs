import { CardDisplayType } from '../types/hotThread'
import {
  getLocalStorageCardDisplay,
  setLocalStorageCardDisplay,
} from './localstorage'

describe('it can store and get from localStorage', () => {
  // Basic storage
  // TODO
  // it('should failed, and return `null` when storing and getting localstorage', () => {
  // })

  // Card Display storage
  it('should store and get card display localstorage', () => {
    const display = CardDisplayType.THUMBNAIL
    setLocalStorageCardDisplay(CardDisplayType.THUMBNAIL)

    const result = getLocalStorageCardDisplay()
    expect(result).toBe(display)
  })
})
