import { css } from '@emotion/react'
import SourceSansBoldTtf from '../assets/fonts/source_sans_pro/SourceSansPro-Bold.ttf';
import SourceSansProRegularTtf from '../assets/fonts/source_sans_pro/SourceSansPro-Regular.ttf';

export const globalStyles = css(css`
  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProRegularTtf}) format('truetype');
    font-style: normal;
    font-weight: normal;
  };
  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansBoldTtf}) format('truetype');
    font-style: normal;
    font-weight: 600;
  };
`,
{
  ':root': {
    '--color-mts': '#e24040',
    '--color-primary': '#289df5',
    '--color-secondary': '#FF7800',
    '--color-border': '#313d4f',
    '--color-text': '#fff',
    '--color-text-secondary': '#7f8fa4',
    '--color-background': '#3a3d43',
    '--color-content': '#1B2431',
    '--color-form': '#273142',
    '--color-formfield': '#222C3C',
    '--color-box': '#57D841'
},
'*': { boxSizing: 'border-box' },
'html, body': {
    margin: 0,
    padding: 0,
    width: '100%',
    minWidth: '480px',
    height: '100vh',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '16px',
    color: 'var(--color-text)',
    backgroundColor: 'var(--color-background)',
    overflow: 'hidden',

    input: {
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '1rem',
        color: 'var(--color-text-lead)',
    }
},
'#root': { width: '100%', height: '100%' },
});
