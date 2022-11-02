import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { HotTopic } from 'types/hotTopics'

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

const hotTopicFeed: ApiResponse<HotTopic[]> = {
  data: items,
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
