import { ImageContent, TextContent, VideoContent } from './content'
import { Image } from './image'
import { Post } from './post'

export enum ThreadType {
  TEXT = 1,
  VIDEO = 2,
  IMAGE = 3,
}

export interface ThreadBasic {
  id: string
  slug: string
  title: string
}

export interface ThreadRecommendation {
  id: string
  title: string
  slug: string
  thread_type: number
  community: {
    id: string
    name: string
  }
  thumbnail?: Image | null
}

export interface Thread extends ThreadBasic {
  id: string
  slug: string
  title: string
  thumbnail?: Image
  community: {
    id: number
    name: string
    icon: string
    membership_status: number
  }
  meta: {
    rating: number
    total_views: number
    reply_count: number
  }
  is_subscribed: boolean
  thread_type: ThreadType
  post: Post
  content: TextContent | ImageContent | VideoContent
}
