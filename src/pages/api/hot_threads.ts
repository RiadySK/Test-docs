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
    id: '63636428b11d6427d3306d72',
    slug: 'pilih-mana',
    title: 'Pilih Mana ?',
    hot_thread_content: {
      description:
        'Pesta apa yg paling enak menurut agan2 .. :bingung Besok malming, gw ada kumpul2 ketemu ame sohib lama. Udah sepuh sih, usia kepala naga semwa pokok nya. Rencana nya : Plan A 1. Makan malam di tower 2. Booking Karaoke 3. Booking cewe :genit Plan B 1. Kafe minum kopik 2. Nonton bioskop 3. Makan malam 4. Jalan2 Plan C 1. Booking Hotel 2. Booking cewe 3. ngenthod rame2 ! Pilih yg mana enak nya, gan :ngakak',
    },
    community: {
      id: 16,
      name: 'Heart to Heart',
      icon: 'https://s.kaskus.id/r60x60/ficon/image-16.png',
      membership_status: 1,
    },
    meta: {
      rating: 33,
      total_views: 53425,
      reply_count: 1223,
    },
    is_subscribed: false,
    thread_type: ThreadType.TEXT,
    post: postList[Math.floor(Math.random() * 4)]!,
    content: {
      content: 'Content tipe text',
    },
  },
  {
    id: '6361a9e3f630e03baf005a4f',
    slug: 'unik-dan-berbeda-berikut-ini-beberapa-komunitas-yang-bisa-disebut-tidak-biasa',
    title:
      'Unik dan Berbeda, Berikut Ini Beberapa Komunitas yang Bisa Disebut Tidak Biasa',
    hot_thread_content: {
      description:
        'Komunitas, seperti yang Agan dan Sista ketahui merupakan sekelompok orang yang berkumpul dalam satu wadah untuk menjalankan sebuah hobi, kegemaran, atau ketertarikan terhadap suatu hal.',
      promotion_data: {
        promoted_username: 'admon',
        cta_button: 'Klik disini gan',
        entitlement: 'Spotlight',
        promoted_avatar: {
          url: 'https://s.kaskus.id/user/avatar/2016/07/23/avatar8970274_3.gif',
          is_censored: false
        },
      }
    },
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
      content: 'Content tipe text',
    },
  },
  {
    id: '6369aa17c947062d0253a532',
    slug: '11-objek-terbesar-di-alam-semesta-yang-akan-membuatmu-takjub-dan-merinding',
    title: '11 Objek Terbesar Di Alam Semesta yang Akan Membuatmu Takjub dan Merinding',
    hot_thread_content: {
      description: 'Cursus mattis molestie a iaculis at.',
      url: 'https://www.youtube.com/embed/q6EoRBvdVPQ',
      promotion_data: {
        promoted_username: 'admon',
        cta_button: 'Cek detailnya disini',
        entitlement: 'Ads',
        promoted_avatar: {
          url: 'https://s.kaskus.id/user/avatar/2016/07/23/avatar8970274_3.gif',
          is_censored: false
        },
      }
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
    id: '63636428b11d6427d3306d72',
    slug: 'pilih-mana',
    title: 'Pilih Mana ?',
    hot_thread_content: {
      description:
        'Pesta apa yg paling enak menurut agan2 .. :bingung Besok malming, gw ada kumpul2 ketemu ame sohib lama. Udah sepuh sih, usia kepala naga semwa pokok nya. Rencana nya : Plan A 1. Makan malam di tower 2. Booking Karaoke 3. Booking cewe :genit Plan B 1. Kafe minum kopik 2. Nonton bioskop 3. Makan malam 4. Jalan2 Plan C 1. Booking Hotel 2. Booking cewe 3. ngenthod rame2 ! Pilih yg mana enak nya, gan :ngakak',
      promotion_data: {
        promoted_username: 'admon',
        cta_button: 'Detail',
        entitlement: 'Sponsored',
        promoted_avatar: {
          url: 'https://s.kaskus.id/user/avatar/2016/07/23/avatar8970274_3.gif',
          is_censored: false
        },
      }
    },
    community: {
      id: 16,
      name: 'Heart to Heart',
      icon: 'https://s.kaskus.id/r60x60/ficon/image-16.png',
      membership_status: 1,
    },
    meta: {
      rating: 33,
      total_views: 53425,
      reply_count: 1223,
    },
    is_subscribed: false,
    thread_type: ThreadType.TEXT,
    post: postList[Math.floor(Math.random() * 4)]!,
    content: {
      content: 'Content tipe text',
    },
  },
]

const generateHotThread = (
  feedSize = 20,
  pageNum = 0,
): ApiResponse<HotThread[]> => {
  let threadArr: HotThread[] = []
  for (let i = 0; i < feedSize; i++) {
    threadArr.push(threadList[i % threadList.length]!)
  }

  var threadFeed: ApiResponse<HotThread[]> = {
    data: threadArr,
    meta: {
      cursor: (pageNum + 1).toString(),
    },
  }
  return threadFeed
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let reqLimit = req.query?.limit ? req.query?.limit : '20'
    let reqCursor = req.query?.cursor ? req.query?.cursor : '0'
    if (req.query && reqLimit && reqCursor) {
      const pageNum = parseInt((reqCursor as string) ?? 0)
      const limitNum = parseInt(reqLimit as string)
      res.status(200).json(generateHotThread(limitNum, pageNum))
    } else {
      res.status(400).json({ error: 'Pen Pinapo Pen' })
    }
  }
}

export default handler
