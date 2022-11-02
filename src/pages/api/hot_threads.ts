import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { Image } from '../../types/image'
import { Post } from '../../types/post'
import { Thread, ThreadType } from '../../types/thread'

const imageList: Image[] = [
  {
    url: 'http://placekitten.com/200/200',
    is_censored: false,
  },
  {
    url: 'http://placekitten.com/300/300',
    is_censored: true,
  },
  {
    url: 'http://placekitten.com/400/400',
    is_censored: false,
  },
  {
    url: 'https://s.kaskus.id/images/2022/11/02/10554366_202211020540530364.jpg',
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
    id: '6361a9e3f630e03baf005a4f',
    slug: 'unik-dan-berbeda-berikut-ini-beberapa-komunitas-yang-bisa-disebut-tidak-biasa',
    title: 'Unik dan Berbeda, Berikut Ini Beberapa Komunitas yang Bisa Disebut Tidak Biasa',
    description: 'Komunitas, seperti yang Agan dan Sista ketahui merupakan sekelompok orang yang berkumpul dalam satu wadah untuk menjalankan sebuah hobi, kegemaran, atau ketertarikan terhadap suatu hal.',
    thumbnail: imageList[3]!,
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
    title: 'Forever Hot 二',
    description: 'Cursus mattis molestie a iaculis at.',
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
    title: 'Forever Hot 三',
    description: 'Morbi tristique senectus et netus. Faucibus turpis in eu mi.',
    thumbnail: imageList[Math.floor(Math.random() * 3)]!,
    community: {
      id: 42,
      name: 'komunitas terpisah',
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

const generateHotThread = (feedSize = 20, pageNum = 0): ApiResponse<Thread[]> => {
  let threadArr: Thread[] = []
  for (let i = 0; i < feedSize; i++) {
    threadArr.push(threadList[i % 3]!)
  }

  var threadFeed: ApiResponse<Thread[]> = {
    data: threadArr,
    meta: {
      cursor: (pageNum + 1).toString()
    },
  }
  return threadFeed
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let reqLimit = req.query?.limit ? req.query?.limit : '20';
    let reqCursor = req.query?.cursor ? req.query?.cursor : '0';
    if (req.query && reqLimit && reqCursor ) {
      const pageNum = parseInt(reqCursor as string ?? 0);
      const limitNum = parseInt(reqLimit as string);
      res.status(200).json(generateHotThread(limitNum, pageNum))
    } else {
      res.status(400).json({ error: 'Pen Pinapo Pen' });
    }
  }
}

export default handler
