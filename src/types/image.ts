export interface Image {
  url: string
  name: string
  is_censored: boolean
  meta: {
    width: number
    height: number
  }
}