import { CommunityWidgetVariant } from 'types/community'
import { Thread, ThreadType } from 'types/thread'

export const KomunitasPopuler = {
  title: 'Komunitas populer',
  items: [
    {
      id: '01',
      slug: 'string',
      icon: 'http://placekitten.com/200/600',
      name: 'Ini adalah title KomunitasPopuler',
      description: 'string deskripsi',
      membership_status: 1,
      meta: {
        total_thread: 234,
        total_member: 245,
        total_post: 23,
      },
      button: true,
    },
    {
      id: '02',
      slug: 'string2',
      icon: 'http://placekitten.com/200/400',
      name: 'Ini adalah title KomunitasPopuler',
      description: 'string deskripsi',
      membership_status: 1,
      meta: {
        total_thread: 43,
        total_member: 64,
        total_post: 54,
      },
      button: true,
    },
  ],
}

export const ThreadrecomendationItem = [
  {
    src: 'http://placekitten.com/200/300',
    title:
      'Wajib Tahu Fakta Ini, Berikut Beberapa Hobi Unik dan Aneh yang Ada di Dunia',
    category: 'Hobby &amp; Community',
  },
  {
    src: 'http://placekitten.com/200/400',
    title: 'Sejarah Thich Quang Duc, Biksu Yang Bakar Diri Dalam Aksi Protes!',
    category: 'Hobby &amp; Community',
  },
]

export const cardItem: Thread = {
  id: '63242555813ca64b0c3c8597',
  slug: 'keluarga-lukas-enembe-bawa-surat',
  title:
    'Keluarga Lukas Enembe Bawa Surat ke DPR Papua, begini isi pengaduannya',
  description: 'lekas sembuh keluarga lukas',
  thumbnail: {
    url: 'http://placekitten.com/400/400',
    name: 'keluarga lukas',
    is_censored: false,
    meta: {
      width: 400,
      height: 400,
    },
  },
  community: {
    id: 21,
    name: 'Berita dan Politik',
    icon: 'https://s.kaskus.id/ficon/image-10.png',
    membership_status: 0,
  },
  meta: {
    rating: 20,
    total_views: 2500,
    reply_count: 30,
  },
  post: {
    post_id: '634826e254f98c2a193609de',
    dateline: 1665656245,
    user: {
      userid: 11303331,
      username: 'admon',
      display_name: 'admon',
    },
    vote_info: {
      total_vote: 123,
      vote: 243,
    },
  },
  is_subscribed: false,
  thread_type: ThreadType.TEXT,
  content: {
    content: 'Banyak-banyaklah membaca buku'
  }
}

export const newCommunity = {
  variant: CommunityWidgetVariant.NewCommunity,
  items: [
    {
      id: '01',
      slug: 'string',
      icon: 'http://placekitten.com/200/400',
      name: 'Ini adalah title newCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 46,
        total_member: 67,
        total_post: 786,
      },
    },
    {
      id: '01',
      slug: 'string',
      icon: 'http://placekitten.com/200/600',
      name: 'Ini adalah title newCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 43,
        total_member: 57,
        total_post: 8976,
      },
    },
  ],
}

export const myCommunity = {
  variant: CommunityWidgetVariant.MyCommunity,
  seeAllButton: true,
  items: [
    {
      id: '01',
      slug: 'string',
      icon: 'http://placekitten.com/200/200',
      name: 'Ini adalah myCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 3443,
        total_member: 5247,
        total_post: 76,
      },
    },
    {
      id: '02',
      slug: 'string',
      icon: 'http://placekitten.com/200/500',
      name: 'myCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 3,
        total_member: 35,
        total_post: 45,
      },
    },
    {
      id: '03',
      slug: 'string',
      icon: 'http://placekitten.com/200/300',
      name: 'Ini adalah myCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 57,
        total_member: 23,
        total_post: 68,
      },
    },
    {
      id: '04',
      slug: 'string',
      icon: 'http://placekitten.com/200/200',
      name: 'hahahahah myCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 56,
        total_member: 23,
        total_post: 67,
      },
    },
    {
      id: '05',
      slug: 'string',
      icon: 'http://placekitten.com/200/400',
      name: 'Ini adalah myCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 45,
        total_member: 34,
        total_post: 54,
      },
    },
    {
      id: '06',
      slug: 'string',
      icon: 'http://placekitten.com/200/500',
      name: 'Ini adalah myCommunity',
      description: 'string deskripsi2',
      membership_status: 1,
      meta: {
        total_thread: 12,
        total_member: 341,
        total_post: 46,
      },
    },
  ],
}

export const creatorItem = [
  {
    display_name: 'dompetjadipeci',
    usertitle: 'ahaaebrh',
    top_threads: [
      ' Pilih Mana Gan, Charger Adaptor Atau Power Bank? Apa Alasanmu? ',
      '  Fakta, Pohon Saja Bisa Menjaga Perasaan Masa Kamu Nggak?  ',
      '  Mau Naik Level? Pemotor Sebaiknya Pasang Spionnya Dengan Benar (Ini Alasannya!)  ',
    ],
    userid: '123',
    username: 'dompetpeci',
    profilepicture: 'http://placekitten.com/200/500',
    online_status: 1,
  },
  {
    display_name: 'si.matamalaikat',
    usertitle: 'ahaaebrh',
    top_threads: [
      ' Pilih Mana Gan, Charger Adaptor Atau Power Bank? Apa Alasanmu? ',
      '  Fakta, Pohon Saja Bisa Menjaga Perasaan Masa Kamu Nggak?  ',
      '  Mau Naik Level? Pemotor Sebaiknya Pasang Spionnya Dengan Benar (Ini Alasannya!)  ',
    ],
    userid: '123',
    username: 'dompetpeci',
    profilepicture: 'http://placekitten.com/200/500',
    online_status: 1,
  },
  {
    display_name: 'dompetjadipeci',
    usertitle: 'ahaaebrh',
    top_threads: [
      ' Pilih Mana Gan, Charger Adaptor Atau Power Bank? Apa Alasanmu? ',
      '  Fakta, Pohon Saja Bisa Menjaga Perasaan Masa Kamu Nggak?  ',
    ],
    userid: '123',
    username: 'dompetpeci',
    profilepicture: 'http://placekitten.com/200/500',
    online_status: 1,
  },
]
