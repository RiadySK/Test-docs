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
  }))

const hotTopicFeed: ApiResponse<HotTopic[]> = {
  data: items,
  meta: {
    pagination: {
      total: 8,
      next_cursor: 'AoIIRhUC5zg2MWMzMDI1NDNkOTJiOTZkNjE0MzlhOGY',
    },
  },
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json(hotTopicFeed)
  }
}

export default handler
