const docs = [
  {
    attribute: 'icon',
    options: null,
    default: 'share',
    description: 'Variant icon from font awesome. For reference: https://fontawesome.com/v4/icons/'
  },
  {
    attribute: 'size',
    options: ['large', 'medium', 'small'],
    default: 'medium',
    description: 'Icon size'
  },
  {
    attribute: 'color',
    options: ['grey', 'blue', 'white'],
    default: 'grey',
    description: 'Icon color'
  },
  {
    attribute: 'type',
    options: ['solid', 'outline', 'regular'],
    default: 'regular',
    description: 'Icon type display'
  },
  {
    attribute: 'direction',
    options: ['right', 'left', 'top', 'bottom'],
    default: 'right',
    description: 'Icon list popup direction'
  },
  {
    attribute: 'url',
    options: null,
    default: null,
    description: 'URL for navigator share API'
  },
  {
    attribute: 'title',
    options: null,
    default: null,
    description: 'title for navigator share API'
  },
  {
    attribute: 'description',
    options: null,
    default: null,
    description: 'description for navigator share API'
  },
  {
    attribute: 'onClickFacebook',
    options: null,
    default: null,
    description: 'function when facebook icon is clicked'
  },
  {
    attribute: 'onClickMessenger',
    options: null,
    default: null,
    description: 'function when messenger icon is clicked'
  },
  {
    attribute: 'onClickWhatsapp',
    options: null,
    default: null,
    description: 'function when whatsapp icon is clicked'
  },
  {
    attribute: 'onClickTwitter',
    options: null,
    default: null,
    description: 'function when twitter icon is clicked'
  },
  {
    attribute: 'onClickLink',
    options: null,
    default: null,
    description: 'function when link icon is clicked'
  }
];
export default docs;
