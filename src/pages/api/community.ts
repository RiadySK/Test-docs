import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { Community } from 'types/community'

const KomunitasList: Community[] = [
  {
    id: '1',
    description: 'Kucing hitam',
    icon: 'http://placekitten.com/100/100',
    membership_status: 1,
    meta: {
      total_member: 2000,
      total_post: 200,
      total_thread: 20,
    },
    name: 'hahahaha',
    slug: 'tertawa',
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

const paginationMock = {
  next_cursor: '0',
  total: 1,
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<Community[]> = {
      data: [],
      meta: {
        pagination: paginationMock,
      },
    }
    if (req.query.type === 'populer') {
      let itemSize = Math.floor(Math.random() * 3 + 5)
      for (let i = 0; i < itemSize; i++) {
        mockData.data.push(KomunitasList[i % KomunitasList.length]!)
      }
    } else {
      mockData.data = mockData.data.concat(KomunitasList)
    }
    res.status(200).json(mockData)
  }
}

export default handler
