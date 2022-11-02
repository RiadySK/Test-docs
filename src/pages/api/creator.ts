import { NextApiRequest, NextApiResponse } from 'next'
import { Kreator } from 'types/creator'
import { Image } from 'types/image'
import { ThreadBasic } from 'types/thread'

const image: Image = {
  url: 'http://placekitten.com/200/200',
  is_censored: false,
}

const threadList: ThreadBasic[] = [
  {
    id: 'mockId1',
    slug: 'siput nomor 1',
    title: 'Pilih Mana Gan, Charger Adaptor Atau Power Bank? Apa Alasanmu?',
    thumbnail: image,
  },
  {
    id: 'mockId2',
    slug: 'siput nomor 2',
    title: 'Fakta, Pohon Saja Bisa Menjaga Perasaan Masa Kamu Nggak?',
    thumbnail: image,
  },
  {
    id: 'mockId3',
    slug: 'siput nomor 3',
    title:
      'Mau Naik Level? Pemotor Sebaiknya Pasang Spionnya Dengan Benar (Ini Alasannya!)',
    thumbnail: image,
  },
]

const getKreatosThreads = () => {
  let threads = []
  let rand = Math.floor(Math.random() * 4) + 1
  for (let i = 0; i < rand; i++) {
    threads.push(threadList[i % threadList.length]!)
  }
  return threads
}

const kreatorList: Kreator[] = [
  {
    display_name: 'dompetjadipecitapiboong',
    usertitle: 'ahaaebrh',
    top_threads: getKreatosThreads(),
    userid: '123',
    username: 'dompetpeci',
    profilepicture: 'http://placekitten.com/200/500',
    online_status: 1,
  },
  {
    display_name: 'si.matamalaikat',
    usertitle: 'ahaaebrh',
    top_threads: getKreatosThreads(),
    userid: '13',
    username: 'dompetpeci',
    profilepicture: 'http://placekitten.com/100/300',
    online_status: 1,
  },
  {
    display_name: 'pancibertuah',
    usertitle: 'settungcut',
    top_threads: getKreatosThreads(),
    userid: '113',
    username: 'yaaaaaanto',
    profilepicture: 'http://placekitten.com/400/300',
    online_status: 1,
  },
]

const getRandKreatorList = (): Kreator[] => {
  let rand = Math.floor(Math.random() * 3) + 2
  let kreators: Kreator[] = []
  for (let i = 0; i < rand; i++) {
    kreators.push(kreatorList[i % kreatorList.length]!)
  }
  return kreators
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let kreators = getRandKreatorList()
    res.status(200).json(kreators)
  }
}

export default handler
