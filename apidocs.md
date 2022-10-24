# API Docs

This file contains the temporary API Docs made for this project.

Base URL: {base_url}/api/{endpoint}

`base_url` is the API host (such as Kaskus Local, webstaging, etc.)

`endpoint` is as listed below

Example full URL: `www.kaskus.local/api/hot_threads`

## General Output Data
1. The output data shall be JSON.
2. The output data shall be wrapped in `data` field, as such:
```json
{
  "data": {
    "userid": "3",
    "username": "admin",
    "display_name": "<span style=\"color:red;text-decoration:blink\">admin</span>",
    "usertitle": "<b>Administrator</b>",
    "avatar": "https://www.kaskus.local/user/avatar/2001/12/20/avatar3_297.gif"
  }
}
```
3. The output data *can* have a `meta` field for lists, as such:
```json
{
  "data": [],
  "meta": {
    "pagination": {
      "cursor": "abcdef"
    }
  }
}
```
4. Authentication *should* be handled by backend through means of cookie. Please use `next.kaskus.local` or any
applicable base URL so the set cookies work correctly.

## No-Auth Routes
|                 Name | Endpoint             |   Status    |   Notes   | Return Type                       |
|---------------------:|:---------------------|:-----------:|:---------:|-----------------------------------|
|          Hot Threads | /hot_threads         | In-Progress |  Pending  | [HotThreadList](#hot-thread-list) |
|       Komunitas Baru | /communities/new     | In-Progress |           |                                   |
|           Hot Topics | -                    |   Not Yet   |           |                                   |
|    Komunitas Populer | /communities/popular | In-Progress |           |                                   |
|      KaskusTV Widget | -                    |   Not Yet   |           |                                   |
|               Search | -                    |   Not Yet   |           |                                   | 
|      Header Channels | -                    |   Not Yet   |           |                                   |
| Pencarian Terpopuler | -                    |   Not Yet   |           |                                   |

## Auth Routes
|                   Name | Endpoint             |   Status    |               Notes               | Return Type                            |
|-----------------------:|:---------------------|:-----------:|:---------------------------------:|----------------------------------------|
|         Komunitas Saya | -                    |   Not Yet   |                                   |                                        |
|     Thread Rekomendasi | -                    |   Not Yet   |                                   |                                        |
|       User Information | /user                |    Done     |       Meta not included yet       |                                        |
|           Notification | /notifications       |    Done     | Only unread PM, FJB stats pending | [NotificationList](#notification-list) |
| Upvote/downvote thread | -                    |   Not Yet   |                                   |                                        |

## Object Breakdowns

Note: Hot Thread Preview (Embed, etc.) - Ask mobile team

enum ThreadType:
* 1: `TEXT`
* 2: `IMAGE`
* 3: `VIDEO`

### Thread
```ts
{
  id: string,
  slug: string,
  title: string,
  description: string, // ku cek ini motong dari text content // tapi bisa direplace sama tim konten saat naekin thread jadi hot_thread - Riady 
  thumbnail: Image,
  community: {
    id: int,
    name: string,
    icon: string,
    membership_status: number
  },
  meta: {
    rating: number,
    total_views: number,
    reply_count: number
  },
  is_subscribed: boolean,
  thread_type: ThreadType,
  first_post: Post,
  content: TextContent | ImageContent | VideoContent 
}
```

### Post
```ts
{
  post_id: string,
  dateline: number,
  user: {
    userid: number,
    username: string,
    display_name: string
  }
  vote_info: {
    total_vote: number,
    vote: number
  }
}
```

### TextContent
```ts
{
  text: string
}
```

### ImageContent
```ts
{
  images: Image[],
  aspect_ratio: {
    ratio_width: number,
    ratio_height: number
  }
}
```

### VideoContent
```ts
{
  video_url: string
}
```

### ~ThreadFeed~
```ts
{
  items: Threads[],
  pagination: {
    total: number,
    next_cursor: string,
  }
}
```

### Community
```ts
{ 
  id: string,
  slug: string,
  name: string,
  icon: string,
  
  description: string,
  membership_status: number,
  meta: { 
    total_thread: number, 
    total_member: number,
    total_post: number 
  }
}
```

### ~CommunityFeed~
```ts
{
  items: Community[],
  pagination: {
    total: number,
    next_cursor: string,
  }
}
```

### HotTopic
```ts
{
  slug: string,
  name: string,
  thumbnail: string,
  thumbnail_compact: string,
  status: number
}
```

### ~HotTopicFeed~
```ts
{
  items: HotTopic[],
  pagination: {
    total: number,
    next_cursor: string,
  }
}
```

### Channel
```ts
{
  id: string,
  name: string
}
```

### ~ChannelFeed~
```ts
{
  items: Channel[],
  pagination: {
    total: number,
    next_cursor: string,
  }
}
```

### User
```ts
{ 
  name: string, 
  username: string, 
  avatar: Image, 
  meta: { 
    total_thread: number, 
    total_post: number, 
    reputation: number
  } 
}
```

### Notification
```ts
{
  id: string,
  text: string,
  type: number,
  created_time: Date,
  is_read: boolean
}
```

### Notification List
```ts
{
    stats: {
        total_unread: number,
        new_state: number,
    },
    notifications: Notification[]
}
```

### Image
```ts
{ 
  url: string, 
  name: string,
  is_censored: boolean,
  meta: { 
    width: number, 
    height: number 
  }
}
```

### Kreator
```ts
{
  userid: string,
  username: string,
  display_name: string,
  profilepicture: string,
  usertitle: string,
  online_status: number,
  top_threads: Thread[]
}
```
