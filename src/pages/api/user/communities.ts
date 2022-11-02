import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { Community } from 'types/community'

const KomunitasList: Community[] = [
  {
    id: '1064',
    description: 'Perkumpulang orang-orang Scooter Matic',
    icon: 'https://s.kaskus.id/ficon/image-1064.png',
    membership_status: 1,
    meta: {
      total_member: 2000,
      total_post: 200,
      total_thread: 20,
    },
    name: 'Scooter Matic',
    slug: 'scooter-matic',
  },
  {
    id: '11',
    description: 'Kucing putih',
    icon: 'http://placekitten.com/80/80',
    membership_status: 0,
    meta: {
      total_member: 2002,
      total_post: 202,
      total_thread: 22,
    },
    name: 'hehehehehhe',
    slug: 'tertangis',
  },
]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<Community[]> = {
      data: []
    }
    mockData.data = mockData.data.concat(KomunitasList)
    res.status(200).json(mockData)
  }
}

export default handler
