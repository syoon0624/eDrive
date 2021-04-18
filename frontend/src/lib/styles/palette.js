const palette = {
  /* blue */
  blue0: '#e7f5ff',
  blue1: '#d0ebff',
  blue2: '#a5d8ff',
  blue3: '#74c0fc',
  blue4: '#4dabf7',
  blue5: '#339af0',
  blue6: '#228be6',
  blue7: '#1c7ed6',
  blue8: '#1971c2',
  blue9: '#1864ab',
  /* cyan */
  cyan0: '#e3fafc',
  cyan1: '#c5f6fa',
  cyan2: '#99e9f2',
  cyan3: '#66d9e8',
  cyan4: '#3bc9db',
  cyan5: '#22b8cf',
  cyan6: '#15aabf',
  cyan7: '#1098ad',
  cyan8: '#0c8599',
  cyan9: '#0b7285',
  /* gray */
  gray0: '#f8f9fa',
  gray1: '#f1f3f5',
  gray2: '#e9ecef',
  gray3: '#dee2e6',
  gray4: '#ced4da',
  gray5: '#adb5bd',
  gray6: '#868e96',
  gray7: '#495057',
  gray8: '#343a40',
  gray9: '#212529',
};

export const buttonColorMap = {
  blue: {
    background: palette.blue6,
    color: 'white',
    hoverBackground: palette.blue5,
  },
};

export const inputColorMap = {
  blue: {
    borderColor: palette.blue6,
    color: 'black',
    placeholder: palette.gray5,
  },
};

export const dropdownListColorMap = {
  blue: {
    background: 'white',
    color: palette.blue8,
    borderColor: palette.blue8,
  },
};

export const dropdownHeaderColorMap = {
  blue: {
    background: palette.blue6,
    color: 'white',
    hoverBackground: palette.blue5,
    borderColor: palette.blue8,
  },
};

export const searchBoxColorMap = {
  blue: {
    background: palette.blue6,
    color: 'white',
    hoverBackground: palette.blue5,
  },
};

export default palette;
