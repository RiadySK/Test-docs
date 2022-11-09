import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types/common'
import { Notification, NotificationList } from 'types/notification'

const notificaitons: Notification[] = [
  {
    id: '59',
    is_read: true,
    body: 'Agan mendapatkan cendol dari timindo77 dan dumpsys untuk post agan di thread Rekomendasi Komik untuk Anak 5 - 12 Tahun',
    content: 'menarik ya',
    dateline: 1661246848,
    type: 'reputation',
    url: 'https://www.kaskus.co.id/post/632148eb7e4bd64c4539f4f3/?ref=notification&med=header',
  },
  {
    id: '24',
    is_read: false,
    body: 'Gear up juga membalas post di thread',
    content: 'Andai bisa sesimpel itu',
    dateline: 1661246849,
    type: 'reply',
    url: 'https://www.kaskus.co.id/show_post/5fb2ec949a972e0f411f71df/?child_id=5fc8263b10d2951b2860acbd&ref=notification&med=header',
  },
  {
    id: '54',
    is_read: true,
    body: 'Ada yang mulai mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246858,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '93',
    body: 'Ada orang yang mulai mengikuti',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
    is_read: true,
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
  {
    id: '58',
    is_read: true,
    body: 'Ada orang yang mengikuti Agan',
    content: 'yeyeyyeyeye',
    dateline: 1661246958,
    type: 'reputation',
    url: '/thread/630494023276056ec4233c36',
  },
]

const notifList: NotificationList = {
  notifications: notificaitons,
  stats: {
    new_state: 1,
    pm_unread: 12,
  },
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<NotificationList> = {
      data: notifList,
    }
    res.status(200).json(mockData)
  }
}

export default handler
