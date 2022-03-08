const HeadingDocs = [
  {
    attribute: 'variant',
    options: ['h1', 'h2', 'h3', 'h4'],
    default: 'h1',
    description: 'Heading Variants. h1 (20px), h2 (18px), h3 (16px), h4 (14px)',
  },
  {
    attribute: 'color',
    options: ['primary', 'secondary', 'tertiary'],
    default: 'primary',
    description: 'Heading text Color',
  },
  {
    attribute: 'font',
    options: ['roboto', 'vag'],
    default: 'roboto',
    description: 'Heading font-family',
  },
  {
    attribute: 'text',
    options: null,
    default: null,
    description: 'Heading text, you could use this attribute or inner tag as well. But we encourage to use text Attribute, text attribute also first priority to be rendered.',
  },
];

const TextDocs = [
  {
    attribute: 'variant',
    options: ['text', 'caption'],
    default: 'text',
    description: 'Text Variant',
  },
  {
    attribute: 'color',
    options: ['primary', 'secondary', 'tertiary'],
    default: 'primary',
    description: 'Text Color',
  },
  {
    attribute: 'size',
    options: ['large', 'medium', 'small'],
    default: 'medium',
    description: 'Text sizes. large (16 px), medium (14 px), small (12 px).',
  },
  {
    attribute: 'text',
    options: null,
    default: null,
    description: 'Text value, you could use this attribute or inner tag as well. But we encourage to use text Attribute, text attribute also first priority to be rendered.',
  },
];

export {
  HeadingDocs,
  TextDocs,
};
