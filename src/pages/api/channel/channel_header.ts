import { NextApiRequest, NextApiResponse } from 'next'
import { Channel } from 'types/channel'
import { ApiResponse } from 'types/common'

const channelList: Channel[] = [
  {
    id: '11',
    name: 'Gosip Nyok!',
  },
  {
    id: '20',
    name: 'Berita dan Politik',
  },
  {
    id: '31',
    name: 'The Lounge',
  },
  {
    id: '404',
    name: 'Soccer &amp; Futsal Room',
  },
  {
    id: '523',
    name: 'Milanisti Kaskus',
  },
  {
    id: '640',
    name: 'Militer',
  },
  {
    id: '73',
    name: 'Stories from the Heart',
  },
  {
    id: '85',
    name: 'Liga Italia',
  },
  {
    id: '9',
    name: 'B-Log Community',
  },
  {
    id: '104',
    name: 'Karesidenan Pati',
  },
]

const handleInfItem = (
  mockData: ApiResponse<Channel[]>,
  req: NextApiRequest,
) => {
  const pageNum = parseInt(req.query.page as string)
  for (let i = 0; i < 10; i++) {
    mockData.data.push(channelList[pageNum % channelList.length]!)
  }
  mockData.meta = {
    cursor: (pageNum + 1).toString(),
  }
  // Gacha error
  // if (Math.random() > 0.8) {
  //   res.status(400).json({ error: 'yo mama' });
  // }
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<Channel[]> = {
      data: [],
    }

    if (req.query && req.query?.page) {
      handleInfItem(mockData, req)
    } else {
      for (let i = 0; i < 30; i++) {
        mockData.data.push(channelList[i % channelList.length]!)
      }
    }
    res.status(200).json(mockData)
  }
}

export default handler
