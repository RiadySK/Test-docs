import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "types/common";
import { Notification, NotificationList } from "types/notification";

const notificaitons: Notification[] = [{
  id: '59',
  is_read: true,
  body: 'Ada orang yang mulai mengikuti Agan',
  content: 'tfyxstes dlu aja',
  dateline: 1661246848,
  type: 'reputation',
  url: '/thread/630494023276056ec4233c36',
}, {
  id: '24',
  is_read: true,
  body: 'Tidak Ada orang yang mulai mengikuti Agan',
  content: 'thread baru agustus 2022 ke 1',
  dateline: 1661246849,
  type: 'reputation',
  url: '/thread/630494023276056ec4233c36',
}, {
  id: '54',
  is_read: true,
  body: 'Ada yang mulai mengikuti Agan',
  content: 'yeyeyyeyeye',
  dateline: 1661246858,
  type: 'reputation',
  url: '/thread/630494023276056ec4233c36',
}, {
  id: '93',
  body: 'Ada orang yang mulai mengikuti',
  content: 'yeyeyyeyeye',
  dateline: 1661246958,
  type: 'reputation',
  url: '/thread/630494023276056ec4233c36',
  is_read: true,
}, {
  id: '58',
  is_read: true,
  body: 'Ada orang yang mengikuti Agan',
  content: 'yeyeyyeyeye',
  dateline: 1661246958,
  type: 'reputation',
  url: '/thread/630494023276056ec4233c36',
}];


const notifList: NotificationList = {
  notifications: notificaitons,
  stats: {
    new_state: 1,
    pm_unread: 12
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<NotificationList> = {
      data: notifList
    };
    res.status(200).json(mockData)
  }
}

export default handler