import { Image } from './image'

export interface SearchSnippet {
  threads: SearchThread[]
  communities: SearchCommunity[]
}

export interface SearchCommunity {
  id: string
  name: string
  description: string
  icon: Image
}

export interface SearchThread {
  id: string
  title: string
  thumbnail?: Image | null
  url: string
}
