import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "types/common";


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<string[]> = {
      data: ['Horror', 'Elon Musk', 'Monyet', 'Truck-kun'],
      meta: {
        total: 1,
        limit: 20,
        page: 1,
        last_update: 1619103443
      }
    };
    res.status(200).json(mockData)
  }
}

export default handler