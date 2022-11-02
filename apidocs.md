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
|                 Name | Method | Endpoint                             |  Status BE  |   Frontend Integration   |              Notes               | Return Type                                         |
|---------------------:|:------:|:-------------------------------------|:-----------:|:------------------------:|:--------------------------------:|-----------------------------------------------------|
|   Hot Thread Landing |  GET   | /hot_threads_landing                 |    Done     | <ul><li>[x] OK</li></ul> |                                  | [HotThreadList](#hotthreadlist)                     |
|          Hot Threads |  GET   | /hot_threads?channel_id&limit&cursor |    Done     | <ul><li>[x] OK</li></ul> |                                  | [HotThreadListWithCursor](#hotthreadlistwithcursor) |
|       Komunitas Baru |  GET   | /communities/{channel_id}/new        |    Done     | <ul><li>[x] OK</li></ul> |                                  | [Community](#community)[]                           |
|           Hot Topics |  GET   | /hot_topics?status&cursor&limit      |    Done     | <ul><li>[ ] OK</li></ul> |                                  | [HotTopicFeed](#hottopicfeed)                       |
|    Komunitas Populer |  GET   | /communities/{channel_id}/popular    |    Done     | <ul><li>[x] OK</li></ul> | No `description` or `total_post` | [Community](#community)[]                           |
|      KaskusTV Widget |  GET   | /channel/{channel_id}/kaskustv       |    Done     | <ul><li>[x] OK</li></ul> |                                  | [Kaskus TV](#kaskus-tv)                             |
|               Search |  GET   | /search                              | In-Progress | <ul><li>[ ] OK</li></ul> |                                  |                                                     | 
|      Header Channels |  GET   | /channel/channel_header              |    Done     | <ul><li>[x] OK</li></ul> |                                  | [Channel](#channel)[]                               |
| Pencarian Terpopuler |  GET   | /search/popular                      |    Done     | <ul><li>[x] OK</li></ul> |                                  | [Search](#search)                                   |

## Auth Routes
|                   Name | Method | Endpoint                                         | Status BE |   Frontend Integration   |                      Notes                      | Return Type                                      |
|-----------------------:|:------:|:-------------------------------------------------|:---------:|:------------------------:|:-----------------------------------------------:|--------------------------------------------------|
|         Komunitas Saya |  GET   | /user/communities?limit                          |   Done    | <ul><li>[x] OK</li></ul> |        Page query param not working yet         | [Community](#community)[]                        |
|     Thread Rekomendasi |  GET   | /channels/{channel_id}/recommendation            |   Done    | <ul><li>[ ] OK</li></ul> | No such data in local/staging, pending for last | [ThreadRecommendation](#thread-recommendation)[] |
|       User Information |  GET   | /user                                            |   Done    | <ul><li>[x] OK</li></ul> |              Meta not included yet              | [User](#user)                                    |
|           Notification |  GET   | /notifications?offset&type&limit&displayed_state |   Done    | <ul><li>[x] OK</li></ul> |        Only unread PM, FJB stats pending        | [NotificationList](#notification-list)           |
|             Get Banner |  GET   | /banners                                         |   Done    | <ul><li>[ ] OK</li></ul> |                                                 | [Banner](#banner)                                |
| Upvote/downvote thread |  POST  | /threads/{thread_id}/vote                        |  Not Yet  | <ul><li>[ ] OK</li></ul> |                                                 |                                                  |
|   Join/Leave Community |  POST  | /communities/{community_id}/join                 |  Not Yet  | <ul><li>[ ] OK</li></ul> |                                                 |                                                  |

## Object Breakdowns

Note: Hot Thread Preview (Embed, etc.) - Ask mobile team

enum ThreadType:
* 1: `TEXT`
* 2: `IMAGE`
* 3: `VIDEO`

### HotThreadList
```ts
data: [Thread];
```

### HotThreadListWithCursor
```ts
data: [Thread];
meta: {
  cursor: string;
}
```

### Thread
```ts
{
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: Image;
  community: {
    id: int;
    name: string;
    icon: string;
    membership_status: number;
  };
  meta: {
    rating: number;
    total_views: number;
    reply_count: number;
  };
  is_subscribed: boolean;
  thread_type: ThreadType;
  post: Post;
  content: TextContent | ImageContent | VideoContent;
}
```

### Thread Recommendation

Example call: http://www.kaskus.local/api/channel/0/recommendation

**Parameters:**
* `channel_id`: number determining Channel ID (required)
* `width_compact`: preferred thumbnail width (optional)

**Note that the response is a subset of [Thread](#thread) and [Community](#community) respectively.
They _are_ compatible with those entities, except the data is not as complete as the full entity**.

**Response:**
```ts
{
  id: string;
  title: string;
  thread_type: number;
  community: {
    id: string;
    name: string;
  };
  thumbnail: {
    url: string;
    is_censored: bool;
  };
}
```

**Example Response:**
```json
{
  "data": [
    {
      "id": "634bb67f89e4760d2658f575",
      "title": "test text",
      "thread_type": 1,
      "community": {
        "id": "431",
        "name": "Anime"
      },
      "thumbnail": null
    },
    {
      "id": "6336ba9a652f1760057e13ae",
      "title": "asdaa",
      "thread_type": 3,
      "community": {
        "id": "431",
        "name": "Anime"
      },
      "thumbnail": {
        "url": "https://www.kaskus.local/c720x720/images/2022/09/08/3_20220908043954.jpg",
        "is_censored": false
      }
    },
    {
      "id": "634bb6d3cbc59f480c495dd9",
      "title": "test image",
      "thread_type": 3,
      "community": {
        "id": "431",
        "name": "Anime"
      },
      "thumbnail": {
        "url": "https://www.kaskus.local/c720x720/images/2022/10/16/3_20221016024610.png",
        "is_censored": false
      }
    },
    {
      "id": "632426d1bd7cb431a96a9847",
      "title": "asdaa",
      "thread_type": 2,
      "community": {
        "id": "431",
        "name": "Anime"
      },
      "thumbnail": {
        "url": "http://c-staging.kaskus.id/c720x720/media/videos/thumbnail/vcopo_thumbnail.jpg",
        "is_censored": false
      }
    }
  ]
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
  images: [string];
  description: string
  aspect_ratio: {
    ratio_width: number;
    ratio_height: number;
  }
}
```

### VideoContent
```ts
{
  video_url: string;
  description: string;
}
```

### ~~ThreadFeed~~
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
  
  description: string, // Note that this is not present in `/communities/popular`
  membership_status: number,
  meta: { 
    total_thread: number, 
    total_member: number, 
    total_post: number // Note that this is not present in `/communities/popular`
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
  url: string,
  status: number
}
```

### HotTopicFeed
Hot topic list

**Parameters**
- `status`: number between 1 and 4, inclusive (optional, defaults to `1` - active):
  - `1`: active
  - `2`: inactive
  - `3`: draft
  - `4`: custom
- `limit`: number (optional, defaults to `20`)
- `cursor`: number (optional, defaults to `0`)

**Data structure**
(Note that this isn't wrapped in `data` to show that there is meta on the same level as `data`).
```ts
data: HotTopic[]
meta: {
    cursor: string;
}
```

**Example Request:**

`GET https://www.kaskus.local/api/hot_topics?limit=2`

**Example Response:**
```json
{
  "data": [
    {
      "slug": "cmonbruh",
      "name": "cmonbruh",
      "thumbnail": "https://www.kaskus.local/r320x320/img/seasonal/october2019/thread_showcase_fc8vqxh9b63k.jpg",
      "thumbnail_compact": "https://www.kaskus.local/r720x720/img/seasonal/october2019/thread_showcase_fc8vqxh9b63k.jpg",
      "url": "https://www.kaskus.local/topic/cmonbruh",
      "status": 1
    },
    {
      "slug": "p5555",
      "name": "p322",
      "thumbnail": "https://www.kaskus.local/r320x320/img/seasonal/october2019/thread_showcase_fc8vbluqbzbq.jpg",
      "thumbnail_compact": "https://www.kaskus.local/r720x720/img/seasonal/october2019/thread_showcase_fc8vbluqbzbq.jpg",
      "url": "https://www.kaskus.local/topic/p5555",
      "status": 1
    }
  ],
  "meta": {
    "cursor": "2"
  }
}
```



### Channel
```ts
{
  tag_id: string;
  name: string;
  description: string;
  tab_color: string;
  tab_color_hover: string;
  tag_icon: string;
}
```

### ~~ChannelFeed~~
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
  userid: string;
  username: string;
  display_name: string;
  usertitle: string;
  avatar: string;
}
```

### Notification
```ts
{
  id: string;
  content: string;
  body: string;
  type: string;
  dateline: number;
  is_read: bool;
  url: string;
}
```

### Notification List
```ts
{
  stats: {
    total_unread: number;
    new_state: number;
  };
  notifications: [Notification];
}
```

### Image
```ts
{ 
  url: string;
  is_censored: boolean;
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

### Kaskus TV
```ts
{
  video: KaskusTVVideo,
  program: KaskusTVProgram[]
}
```

### Kaskus TV Video
```ts
{
  id: string;
  title: string;
  url: string;
  embed: string;
  thumbnail: string;
}
```

### Kaskus TV Program
```ts
{
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}
```

### Search
Returns array of strings with meta as follows:
```ts
{
  total: number;
  limit: number;
  page: number;
  last_update: number;
}
```
```json
{
  "data": [
    "Live Ngaskus",
    "Disini coba"
  ],
  "meta": {
    "total": 1,
    "limit": 20,
    "page": 1,
    "last_update": 1619103443
  }
}
```

### Banner

Example call: https://www.kaskus.local/api/banners?forum_ids[]=-10007&forum_ids[]=-20007&forum_ids[]=-6&forum_ids[]=-1&position=top_billboard&list_type=0

**Parameters:**
* `forum_ids`: array of numbers (required)
* `position`: string (required)
* `list_type`: number (required)

**Response:**
```ts
{
  data: string;
}
```

**Example Response:**
```json
{
  "data": "post list all home billboard"
}
```
