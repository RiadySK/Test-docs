import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { Image } from '../../types/image'
import { Post } from '../../types/post'
import { Thread, ThreadType } from '../../types/thread'

const imageList: Image[] = [
  {
    url: 'http://placekitten.com/200/200',
    is_censored: false,
  }, {
    url: 'http://placekitten.com/300/300',
    is_censored: true,
  }, {
    url: 'http://placekitten.com/400/400',
    is_censored: false,
  },
]

const postList: Post[] = [
  {
    post_id: 'postid001',
    dateline: 1665727764,
    user: {
      userid: 873701,
      username: 'siKacangRenyah',
      display_name: 'Kacang Renyah Bergizi',
    },
    vote_info: {
      total_vote: 89412,
      vote: 1231,
    },
  },
  {
    post_id: 'postid002',
    dateline: 1665737764,
    user: {
      userid: 873702,
      username: 'bolaMaut',
      display_name: 'Bundar dan Berapi',
    },
    vote_info: {
      total_vote: 2122,
      vote: 121,
    },
  },
  {
    post_id: 'postid003',
    dateline: 1664733764,
    user: {
      userid: 873703,
      username: 'piringPecah',
      display_name: 'Lem pun tak mendukung',
    },
    vote_info: {
      total_vote: 3512,
      vote: 14,
    },
  },
  {
    post_id: 'postid004',
    dateline: 1664033764,
    user: {
      userid: 873704,
      username: 'kuningHijau',
      display_name: '@Langit_yang_blUe',
    },
    vote_info: {
      total_vote: 22,
      vote: 1,
    },
  },
]

const threadList: Thread[] = [
  {
    id: 'mockId1',
    slug: 'siput nomor 1',
    title: 'nananana nanana',
    thumbnail: imageList[Math.floor(Math.random() * 3)]!,
    community: {
      id: 23,
      name: 'komunitas bersama',
      icon: 'https://s.kaskus.id/ficon/image-9.png',
      membership_status: 0,
    },
    meta: {
      rating: 8273,
      total_views: 11232,
      reply_count: 231,
    },
    is_subscribed: true,
    thread_type: ThreadType.TEXT,
    post: postList[Math.floor(Math.random() * 4)]!,
    content: {
      content: 'Content tipe text'
    }
  },
  {
    id: 'mockId2',
    slug: 'siput juara 2',
    title: 'mockName numba tu',
    thumbnail: imageList[Math.floor(Math.random() * 3)]!,
    community: {
      id: 9,
      name: 'komunitas sendiri',
      icon: 'https://s.kaskus.id/ficon/image-8.png',
      membership_status: 1,
    },
    meta: {
      rating: 3,
      total_views: 847192,
      reply_count: 2451,
    },
    is_subscribed: true,
    thread_type: ThreadType.IMAGE,
    post: postList[Math.floor(Math.random() * 4)]!,
    content: {
      content: 'Content tipe text'
    }
  },
  {
    id: 'mockId3',
    slug: 'siput lantai 3',
    title: 'mockName numba drei',
    thumbnail: imageList[Math.floor(Math.random() * 3)]!,
    community: {
      id: 42,
      name: 'komunitas goyang lidah',
      icon: 'https://s.kaskus.id/ficon/image-6.png',
      membership_status: 1,
    },
    meta: {
      rating: 33,
      total_views: 53425,
      reply_count: 1223,
    },
    is_subscribed: false,
    thread_type: ThreadType.VIDEO,
    post: postList[Math.floor(Math.random() * 4)]!,
    content: {
      content: 'Content tipe text'
    }
  },
]

const generateThreadFeed = (feedSize = 20): ApiResponse<Thread[]> => {
  let threadArr: Thread[] = []
  for (let i = 0; i < feedSize; i++) {
    threadArr.push(threadList[Math.floor(Math.random() * 3)]!)
  }

  var threadFeed: ApiResponse<Thread[]> = {
    data: threadArr,
    meta: {
      pagination: {
        cursor: '1'
      },
    },
  }
  return threadFeed
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json(generateThreadFeed())
  }
}

export default handler
