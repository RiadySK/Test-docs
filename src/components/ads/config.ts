const DFP_MOBILE = '/21995995410/kaskus-wap-'
const DFP_DESKTOP = '/21995995410/kaskus-desktop-'
const DFP_FORUM_HOME = 'forum/-2-kaskus-home'
const DFP_CHANNEL_HOME = 'channel/-2-kaskus-home'

export const DFP_DESKTOP_HOME = {
  LEADERBOARD: {
    ad_unit: DFP_DESKTOP + DFP_FORUM_HOME + '/top-leaderboard',
    sizes: [
      [1, 1],
      [728, 90],
      [970, 90],
      [970, 200],
      [970, 250],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-top-leaderboard',
    pos: 'top-leaderboard',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  TOWER_LEFT: {
    ad_unit: DFP_DESKTOP + DFP_FORUM_HOME + '/skyscrapper-left',
    sizes: [
      [120, 600],
      [160, 600],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-skyscrapper-left',
    pos: 'skyscrapper-left',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  TOWER_RIGHT: {
    ad_unit: DFP_DESKTOP + DFP_FORUM_HOME + '/skyscrapper-right',
    sizes: [
      [120, 600],
      [160, 600],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-skyscrapper-right',
    pos: 'skyscrapper-right',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  R1: {
    ad_unit: DFP_DESKTOP + DFP_FORUM_HOME + '/r1',
    sizes: [
      [300, 250],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-r1',
    pos: 'r1',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  R2: {
    ad_unit: DFP_DESKTOP + DFP_FORUM_HOME + '/r2',
    sizes: [
      [300, 250],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-r2',
    pos: 'r2',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  R3: {
    ad_unit: DFP_DESKTOP + DFP_FORUM_HOME + '/r3',
    sizes: [
      [300, 250],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-r3',
    pos: 'r3',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
}

export const DFP_MOBILE_HOME = {
  LEADERBOARD: {
    ad_unit: DFP_MOBILE + DFP_FORUM_HOME + '/top-wap',
    sizes: [
      [320, 50],
      [320, 100],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-top-wap',
    pos: 'top-wap',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  STICKY: {
    ad_unit: DFP_MOBILE + DFP_FORUM_HOME + '/sticky-wap',
    sizes: [
      [320, 50],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-sticky-wap',
    pos: 'sticky-wap',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  MIDDLE1: {
    ad_unit: DFP_MOBILE + DFP_FORUM_HOME + '/middle1-wap',
    sizes: [
      [300, 250],
      [336, 280],
      [320, 480],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-middle1-wap',
    pos: 'middle1-wap',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  MIDDLE2: {
    ad_unit: DFP_MOBILE + DFP_FORUM_HOME + '/middle2-wap',
    sizes: [
      [300, 250],
      [336, 280],
      [320, 480],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-middle2-wap',
    pos: 'middle2-wap',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
  BOTTOM: {
    ad_unit: DFP_MOBILE + DFP_FORUM_HOME + '/bottom-wap',
    sizes: [
      [300, 250],
      [336, 280],
      [320, 480],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-rectangle-wap',
    pos: 'bottom-wap',
    list_type: 'others',
    kaskus_dfp_channel: DFP_CHANNEL_HOME,
  },
}
