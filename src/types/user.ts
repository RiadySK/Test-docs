import { Image } from "./image"

export interface User { 
  name: string, 
  username: string, 
  avatar: Image, 
  meta: { 
    total_thread: number, 
    total_post: number, 
    reputation: number
  } 
}