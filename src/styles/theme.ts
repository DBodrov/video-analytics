import { createTheme } from 'neutrino-ui';

const textColor = '#fff';

export const theme = createTheme({
  colors: {
    textColors: {
      text: textColor,
    },
    mainColors: {
      primary: '#289df5',
      secondary: '#FF7800',
    },
    pageElementsColors: {
      border: '#313d4f',
      body: '#3a3d43',
      formElements: '#222C3C',
      formElementsActive: '#313D4F',
      activeBorder: '#289df5',
      selectedItem: '#313D4F'
    },
  },
  typography: {
    h5: { color: textColor, fontWeight: 'normal' },
    h6: { color: textColor, fontWeight: 'normal' },
    p: { color: textColor },
    span: { color: textColor },
  },
});
