import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { User } from 'types/user'


const userMock: ApiResponse<User> = {
  data: {
    name: 'kaskus.dev07',
    avatar: {
      url: 'http://placekitten.com/40/40',
      name: 'dev.07',
      is_censored: false,
      meta: {
        height: 50,
        width: 50
      }
    },
    username: '>dev06<dev08',
    meta : {
      reputation: 98,
      total_post: 87,
      total_thread: 76
    }
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
