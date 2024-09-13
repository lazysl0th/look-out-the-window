module.exports = [
  {
    allowParamToValue: true,
    id: 'scrollbarwidth',
    matcher: 'Sbw',
    name: 'Sbw',
    styles: {
      'scrollbar-width': '$0',
    },
    arguments: [
      {
        'n': 'none',
      },
    ],
    type: 'helper',
  },
  {
    type: 'helper',
    name: 'Fv',
    description: 'Use to style focus-visible parents element',
    matcher: 'Fv',
    noParams: true,
    styles: {

    },
    rules: {
        '.form__label:has(> .form__checkbox:focus-visible)': {
          'outline': '1px solid #fff',
          'outline-offset': '1px'
        }
    },
  },
  {
    type: 'helper',
    name: '',
    description: 'Use add pseudo',
    matcher: 'Fv',
    noParams: true,
    styles: {

    },
    rules: {
        '.form__label:has(> .form__checkbox:focus-visible)': {
          'outline': '1px solid #fff',
          'outline-offset': '1px'
        }
    },
  }
  
];
