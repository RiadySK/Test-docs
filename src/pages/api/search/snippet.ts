import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "types/common";
import { SearchCommunity, SearchSnippet, SearchThread } from "types/search";

const snippetThreads: SearchThread[] = [
  {
    "id": "60893b7f7e63a96f7322e2a7",
    "title": "test coba moderasi",
    "thumbnail": {
      "url": "http://placekitten.com/200/200",
      "is_censored": false
    },
    "url": "https://www.kaskus.co.id/thread/62503c50c59c9e781472ce84/"
  }, {
    "id": "5ad6c30af5c8eb12008b4572",
    "title": "Test Reject Thread Warehouse",
    "thumbnail": {
      "url": "http://placekitten.com/300/300",
      "is_censored": false
    },
    "url": "https://www.kaskus.local/thread/5ad6c30af5c8eb12008b4572/?ref=header&med=search"
  }, {
    "id": "5de01aa4f6271604ca293346",
    "title": "test cuy",
    "thumbnail": {
      "url": "http://placekitten.com/100/100",
      "is_censored": false
    },
    "url": "https://www.kaskus.local/thread/5de01aa4f6271604ca293346/?ref=header&med=search"
  }, {
    "id": "5cc02bee2c16b8001d501fb7",
    "title": "Test Ga Tracking Hapus Redirect",
    "thumbnail": {
      "url": "http://placekitten.com/220/220",
      "is_censored": false
    },
    "url": "https://www.kaskus.local/thread/5cc02bee2c16b8001d501fb7/?ref=header&med=search"
  }, {
    "id": "603f9650ab44a45c4d662079",
    "title": "test create thread",
    "thumbnail": {
      "url": "http://placekitten.com/150/150",
      "is_censored": false
    },
    "url": "https://www.kaskus.local/thread/603f9650ab44a45c4d662079/?ref=header&med=search"
  }, {
    "id": "603faff261084b4cac76af69",
    "title": "test rabbitmq-solr update thread view#4",
    "thumbnail": {
      "url": "http://placekitten.com/250/250",
      "is_censored": false
    },
    "url": "https://www.kaskus.local/thread/603faff261084b4cac76af69/?ref=header&med=search"
  }
];

const snippetCommunities: SearchCommunity[] = [{
  id: '13',
  name: 'Mencari Komunitas',
  description: 'Kita mencari komunitas terbaik 2020', 
  icon: { 
    url: 'http://placekitten.com/100/100',
    is_censored: false,
  }
}, { 
  id: '49',
  name: 'Finding Community',
  description: 'Kita mencari komunitas terbaik 2021', 
  icon: { 
    url: 'http://placekitten.com/110/110',
    is_censored: false,
  }
}, { 
  id: '102',
  name: 'Finding Komunitas',
  description: 'Kita mencari komunitas terbaik 2022', 
  icon: { 
    url: 'http://placekitten.com/120/120',
    is_censored: true,
  }
}, { 
  id: '312',
  name: 'Mencari Community',
  description: 'Kita mencari komunitas terbaik 2023', 
  icon: { 
    url: 'http://placekitten.com/130/130',
    is_censored: false,
  }
}]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    let mockData: ApiResponse<SearchSnippet> = {
      data:  {
        threads: snippetThreads,
        communities: snippetCommunities
      }
    };
    res.status(200).json(mockData)
  }
}

export default handler
