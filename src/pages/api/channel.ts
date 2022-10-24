import { NextApiRequest, NextApiResponse } from "next";
import { Channel } from "types/channel";
import { ApiResponse } from "types/common";

const channelList: Channel[] = [{
  id: '59',
  name: 'Gosip Nyok!'
}, {
  id: '10',
  name: 'Berita dan Politik'
}, {
  id: '21',
  name: 'The Lounge'
}, {
  id: '104',
  name: 'Soccer &amp; Futsal Room'
}, {
  id: '923',
  name: 'Milanisti Kaskus'
}, {
  id: '140',
  name: 'Militer'
}, {
  id: '51',
  name: 'Stories from the Heart'
}, {
  id: '755',
  name: 'Liga Italia'
}, {
  id: '735',
  name: 'B-Log Community'
}, {
  id: '564',
  name: 'Karesidenan Pati'
}];

const paginationMock = {
  next_cursor: '0',
  total: 1
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<Channel[]> = {
      data: [],
      meta: {
        pagination: paginationMock
      }
    };
    for (let i = 0; i < 30; i++) {
      mockData.data.push(channelList[i % channelList.length]!)
    }
    res.status(200).json(mockData)
  }
}

export default handler