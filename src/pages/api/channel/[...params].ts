import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { KaskusTV, KaskusTVProgram, KaskusTVVideo } from 'types/kaskustv'

const ktvVideo: KaskusTVVideo = {
  embed: 'https:\/\/tv-staging.kaskus.co.id\/api\/embed\/video\/0bwpu?is_widget=true&widget_target=native&enable_ads=false',
  id: '0bwpu',
  title: 'BCaaa',
  thumbnail: 'http://placekitten.com/240/360',
  url: 'https:\/\/tv-staging.kaskus.co.id\/api\/kaskus\/bridging?redirect_url=https%3A%2F%2Ftv-staging.kaskus.co.id%2Fwatch%2F0bwpu%2F%3Futm_source%3Dkaskus-forum-apps%26utm_medium%3Dwidget-video-title'
}

const ktvProgramList: KaskusTVProgram[] = [{
  id: 'y5l7s',
  name: 'Anak Hilang',
  thumbnail: 'http://placekitten.com/320/100',
  url: 'https:\/\/tv-staging.kaskus.co.id\/program\/y5l7s'
}, {
  id: 'y6l7s',
  name: 'Bapak Hilang',
  thumbnail: 'http://placekitten.com/320/100',
  url: 'https:\/\/tv-staging.kaskus.co.id\/program\/y6l7s'
}, {
  id: 'y5l8s',
  name: 'Ibu Hilang',
  thumbnail: 'http://placekitten.com/320/100',
  url: 'https:\/\/tv-staging.kaskus.co.id\/program\/y5l8s'
}]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    if (req.query.params![1] === 'kaskustv') {
      let mockData: ApiResponse<KaskusTV> = {
        data: {
          video: ktvVideo,
          program: ktvProgramList
        },
      }
      res.status(200).json(mockData)
    } else {
      res.status(200).json({})
    }
  }
}

export default handler
