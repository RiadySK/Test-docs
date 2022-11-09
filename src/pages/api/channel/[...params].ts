import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { Kreator } from 'types/creator'
import { KaskusTV, KaskusTVProgram, KaskusTVVideo } from 'types/kaskustv'
import { ThreadRecommendation } from 'types/thread'

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

const threadRecommendationList: ThreadRecommendation[] = [
  {
    id: "62503c50c59c9e781472ce84",
    title: "The Official One Piece Thread - Part 4 [Post Spoiler =Delete]",
    slug: "the-official-one-piece-thread---part-4-post-spoiler-delete---part-8",
    thread_type: 1,
    community: {
      id: "433",
      name: "Manga, Manhua, & Manhwa"
    },
    thumbnail: null
  }, {
    id: "63538c764af7e52044769fbb",
    title: "United Kaskus B-Log community",
    slug: "united-kaskus-b-log-community---part-7",
    thread_type: 1,
    community: {
      id: "1096",
      name: "Manchester United"
    },
    thumbnail: null
  }, {
    id: "636353f4a5e53355115045ae",
    title: "Yes or No Nikah Beda Agama?",
    slug: "yes-or-no-nikah-beda-agama",
    thread_type: 1,
    community: {
      id: "21",
      name: "The Lounge"
    },
    thumbnail: {
      url: "https://dl.kaskus.id/lh4.googleusercontent.com/KAKQ6ucCTEkQNHd7z-3EUuyEWRlIIFNz4R-qaNX8ZxTHsqURtHSjBnQXQjFa6ArQosOhOPNguvOvikAdc6axdGwJlZA4eGGkF2_v2Vex_bcuCunzxsR0ki8EftGmI0ebNo-jrPwW5i2j1V-z7-eyOwEB5PQ3d0wZyP4RXXCG_X5BFo-HTa13Tc-X9w",
      is_censored: false
    }
  }, {
    id: "632426d1bd7cb431a96a9847",
    title: "asdaa",
    slug: "the-official-one-piece-thread---part-4-post-spoiler-delete---part-8",
    thread_type: 2,
    community: {
      id: "431",
      name: "Anime"
    },
    thumbnail: {
      url: "http://placekitten.com/720/720",
      is_censored: true
    }
  }
]

const topCreatorList: Kreator[] = [{
  userid: "7527",
  username:"capung",
  usertitle: "DJ KaskusRadio",
  avatar: "http://placekitten.com/80/80",
  connection_status:0,
  threads: [{
    id: "6323f6372ad66d016679fdef",
    title: "Yeyeye",
    slug: "yeyeye"
  }]
}, {
  userid: "3",
  username: "admin", 
  usertitle: "<b>Administrator<\/b>",
  avatar: "http://placekitten.com/100/100",
  connection_status:3, 
  threads: [{
    id: "63242555813ca64b0c3c8597",
    title: "asdaa",
    slug: "asdaa"
  }, {
    ...threadRecommendationList[0]!
  }, {
    ...threadRecommendationList[1]!
  }
]
}, {
  userid: "731631",
  username: "strikey",
  usertitle: "kaskuser",
  avatar: "http://placekitten.com/90/90",
  connection_status:1,
  threads: threadRecommendationList
}]

function getKaskusTvMock(): ApiResponse<KaskusTV> {
  let mockData: ApiResponse<KaskusTV> = {
    data: {
      video: ktvVideo,
      program: ktvProgramList
    },
  }
  return mockData;
}

function getRecommendationMock(): ApiResponse<ThreadRecommendation[]> {
  let mockData: ApiResponse<ThreadRecommendation[]> = {
    data: threadRecommendationList,
  }
  return mockData;
}

function getTopCreatorMock(): ApiResponse<Kreator[]> {
  let mockData: ApiResponse<Kreator[]> = {
    data: topCreatorList
  }
  return mockData;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    if (req.query.params![1] === 'kaskustv') {
      res.status(200).json(getKaskusTvMock())
    } else if (req.query.params![1] === 'recommendation') {
      res.status(200).json(getRecommendationMock())
    } else if (req.query.params![1] === 'top_creators') {
      res.status(200).json(getTopCreatorMock())
    } else {
      res.status(200).json({})
    }
  }
}

export default handler
