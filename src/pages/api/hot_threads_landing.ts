import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { HotThread } from 'types/hotThread'
import { Image } from '../../types/image'
import { Post } from '../../types/post'
import { ThreadType } from '../../types/thread'

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
      userid: 10554366,
      username: 'masnukkho',
      display_name: 'masnukkho',
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

const threadList: HotThread[] = [
  {
    id: '6361a9e3f630e03baf005a4f',
    slug: 'unik-dan-berbeda-berikut-ini-beberapa-komunitas-yang-bisa-disebut-tidak-biasa',
    title:
      'Unik dan Berbeda, Berikut Ini Beberapa Komunitas yang Bisa Disebut Tidak Biasa',
    hot_thread_content: {
      description:
        'Komunitas, seperti yang Agan dan Sista ketahui merupakan sekelompok orang yang berkumpul dalam satu wadah untuk menjalankan sebuah hobi, kegemaran, atau ketertarikan terhadap suatu hal.',
    },
    thumbnail: imageList[3]!,
    community: {
      id: 392,
      name: 'Hobby & Community',
      icon: 'https://s.kaskus.id/r60x60/ficon/image-392.png',
      membership_status: 0,
    },
    meta: {
      rating: 8273,
      total_views: 11232,
      reply_count: 231,
    },
    is_subscribed: true,
    thread_type: ThreadType.TEXT,
    post: postList[0]!,
    content: {
      content: 'Content tipe text',
    },
  },
  {
    id: '6369aa17c947062d0253a532',
    slug: '11-objek-terbesar-di-alam-semesta-yang-akan-membuatmu-takjub-dan-merinding',
    title: '11 Objek Terbesar Di Alam Semesta yang Akan Membuatmu Takjub dan Merinding',
    hot_thread_content: {
      description: 'Cursus mattis molestie a iaculis at.',
      url: 'https://www.youtube.com/embed/q6EoRBvdVPQ'
    },
    community: {
      id: 597,
      name: 'Sains & Teknologi',
      icon: 'https://s.kaskus.id/r60x60/ficon/image-597.png',
      membership_status: 1,
    },
    meta: {
      rating: 3,
      total_views: 847192,
      reply_count: 2451,
    },
    is_subscribed: true,
    thread_type: ThreadType.TEXT,
    post: postList[Math.floor(Math.random() * 4)]!,
    content: {
      content: 'Content tipe text',
    },
  },
  {
    id: 'mockId3',
    slug: 'siput lantai 3',
    title: 'Hot Thread is Hot 3',
    hot_thread_content: {
      description:
        'Morbi tristique senectus et netus. Faucibus turpis in eu mi.',
    },
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
      content: 'Content tipe text',
    },
  },
]

const generateHotThread = (feedSize = 20): ApiResponse<HotThread[]> => {
  let threadArr: HotThread[] = []
  for (let i = 0; i < feedSize; i++) {
    threadArr.push(threadList[i % 3]!)
  }

  var threadFeed: ApiResponse<HotThread[]> = {
    data: threadArr,
  }
  return threadFeed
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json(generateHotThread())
  }
}

export default handler
