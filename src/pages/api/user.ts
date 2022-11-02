import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { User } from 'types/user'

const userMock: ApiResponse<User> = {
  data: {
    username: 'kaskus.dev07',
    avatar: 'http://placekitten.com/40/40',
    display_name: '>dev06<dev08',
    userid: 'dev07',
    usertitle: 'PenyukaCoding'
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json(userMock)
  }
}
