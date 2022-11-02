const DFP_DESKTOP = '/21995995410/kaskus-desktop-'
const DFP_DESKTOP_HOME = 'forum/-2-kaskus-home'
const DFP_DESKTOP_CHANNEL_HOME = 'channel/-2-kaskus-home'

export const DFP_HOME = {
  DFP_DESKTOP_HOME_LEADERBOARD: {
    ad_unit: DFP_DESKTOP + DFP_DESKTOP_HOME + '/top-leaderboard',
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
    kaskus_dfp_channel: DFP_DESKTOP_CHANNEL_HOME,
  },
  DFP_DESKTOP_HOME_TOWER_LEFT: {
    ad_unit: DFP_DESKTOP + DFP_DESKTOP_CHANNEL_HOME + '/skyscrapper-left',
    sizes: [
      [120, 600],
      [160, 600],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-skyscrapper-left',
    pos: 'skyscrapper-left',
    list_type: 'others',
    kaskus_dfp_channel: DFP_DESKTOP_CHANNEL_HOME,
  },
  DFP_DESKTOP_HOME_TOWER_RIGHT: {
    ad_unit: DFP_DESKTOP + DFP_DESKTOP_CHANNEL_HOME + '/skyscrapper-right',
    sizes: [
      [120, 600],
      [160, 600],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-skyscrapper-right',
    pos: 'skyscrapper-right',
    list_type: 'others',
    kaskus_dfp_channel: DFP_DESKTOP_CHANNEL_HOME,
  },
  DFP_DESKTOP_HOME_R1: {
    ad_unit: DFP_DESKTOP + DFP_DESKTOP_CHANNEL_HOME + '/r1',
    sizes: [
      [300, 250],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-r1',
    pos: 'r1',
    list_type: 'others',
    kaskus_dfp_channel: DFP_DESKTOP_CHANNEL_HOME,
  },
  DFP_DESKTOP_HOME_R2: {
    ad_unit: DFP_DESKTOP + DFP_DESKTOP_CHANNEL_HOME + '/r2',
    sizes: [
      [300, 250],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-r2',
    pos: 'r2',
    list_type: 'others',
    kaskus_dfp_channel: DFP_DESKTOP_CHANNEL_HOME,
  },
  DFP_DESKTOP_HOME_R3: {
    ad_unit: DFP_DESKTOP + DFP_DESKTOP_CHANNEL_HOME + '/r3',
    sizes: [
      [300, 250],
      [1, 1],
    ],
    size_mapping: [[]],
    placement: 'div-gpt-ad-r3',
    pos: 'r3',
    list_type: 'others',
    kaskus_dfp_channel: DFP_DESKTOP_CHANNEL_HOME,
  },
}
