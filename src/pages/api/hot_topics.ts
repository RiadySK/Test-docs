import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { HotTopic } from 'types/hotTopic'

const ITEM_TOTAL = 8
const items: HotTopic[] = Array(ITEM_TOTAL)
  .fill(null)
  .map((_, index) => ({
    name: 'Doa untuk Kanjuruhan',
    status: 1,
    slug: `pray-for-kanjuruhan-${index}`,
    thumbnail: 'http://placekitten.com/360/480',
    thumbnail_compact: 'http://placekitten.com/60/60',
    url: 'https:\/\/www.kaskus.local\/topic\/cmonbruh'
  }))

const itemsMockProd = [
  {
    name: 'Noktah Merah Pernikahan',
    status: 1,
    slug: `noktah-merah-pernikahan`,
    thumbnail: 'https://s.kaskus.id/img/seasonal/october2022/thread_showcase_fd2fdhb0hzra.jpg',
    thumbnail_compact: 'https://s.kaskus.id/img/seasonal/october2022/thread_showcase_fd2fdhb0hzra.jpg',
    url: `https://www.kaskus.co.id/topic/noktah-merah-pernikahan`
  },
  {
    name: 'Pray for Kanjuruhan',
    status: 1,
    slug: `pray-for-kanjuruhan`,
    thumbnail: 'https://s.kaskus.id/img/seasonal/october2022/thread_showcase_fd2ersbhkd3g.jpg',
    thumbnail_compact: 'https://s.kaskus.id/img/seasonal/october2022/thread_showcase_fd2ersbhkd3g.jpg',
    url: `https://www.kaskus.co.id/topic/pray-for-kanjuruhan`
  },
  {
    name: 'Kominfo VS Bjorka',
    status: 1,
    slug: `kominfo-vs-bjorka`,
    thumbnail: 'https://s.kaskus.id/img/seasonal/september2022/thread_showcase_fd2bib8kmxmi.jpg',
    thumbnail_compact: 'https://s.kaskus.id/img/seasonal/september2022/thread_showcase_fd2bib8kmxmi.jpg',
    url: `https://www.kaskus.co.id/topic/kominfo-vs-bjorka`
  },
  {
    name: 'Fenomena Mejeng di Citayam Fashion Week',
    status: 1,
    slug: `fenomena-mejeng-di-citayam-fashion-week`,
    thumbnail: 'https://s.kaskus.id/img/seasonal/july2022/thread_showcase_fd24x1470t4p.jpg',
    thumbnail_compact: 'https://s.kaskus.id/img/seasonal/july2022/thread_showcase_fd24x1470t4p.jpg',
    url: `https://www.kaskus.co.id/topic/fenomena-mejeng-di-citayam-fashion-week`
  },
]

const hotTopicFeed: ApiResponse<HotTopic[]> = {
  data: itemsMockProd,
  meta: {
    cursor: 'AoIIRhUC5zg2MWMzMDI1NDNkOTJiOTZkNjE0MzlhOGY',
  },
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let reqLimit = req.query?.limit ? req.query?.limit : '20';
    let reqCursor = req.query?.cursor ? req.query?.cursor : 'inicursoraidiyangsangatpanjangloh';
    if (req.query && reqLimit && reqCursor ) {
      // const pageNum = parseInt(reqCursor as string ?? 0);
      // const limitNum = parseInt(reqLimit as string);
      res.status(200).json(hotTopicFeed)
    } else {
      res.status(200).json(hotTopicFeed)
    }
  }
}

export default handler
