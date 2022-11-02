import { CardDisplayType } from 'types/hotThread'

// localStorage basic function
export const setLocalStorage = (key: string, value: string) => {
  if (!window || !key) return

  return localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string, isJSON?: boolean) => {
  if (!window || !key) return

  const value = localStorage.getItem(key) || null
  if (value == null) return null

  return isJSON ? JSON.parse(value) : value
}

export const removeLocalStorage = (key: string) => {
  if (!window || !key) return

  return localStorage.removeItem(key)
}

// custom localStorage setter/getter/remover
export const KASKUS_CARD_DISPLAY = '_kcd'
export const setLocalStorageCardDisplay = async (display: CardDisplayType) => {
  setLocalStorage(KASKUS_CARD_DISPLAY, display)
}

export const getLocalStorageCardDisplay = () =>
  getLocalStorage(KASKUS_CARD_DISPLAY)
