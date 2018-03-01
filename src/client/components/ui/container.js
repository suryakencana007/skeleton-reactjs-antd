import styled, { css } from 'styled-components';

// Media queries breakpoints
export const screenXXs = 320;
// Extra small screen / phone
export const screenXs = 480;
export const screenXsMin = screenXs;

// Small screen / tablet
export const screenSm = 576;
export const screenSmMin = screenSm;

// Medium screen / desktop
export const screenMd = 768;
export const screenMdMin = screenMd;

// Large screen / wide desktop
export const screenLg = 992;
export const screenLgMin = screenLg;

// Extra large screen / full hd
export const screenXl = 1200;
export const screenXlMin = screenXl;

// Extra extra large screen / large descktop
export const screenXxl = 1600;
export const screenXxlMin = screenXxl;

// provide a maximum
export const screenXXsMax = (screenXsMin - 1);
export const screenXsMax = (screenSmMin - 1);
export const screenSmMax = (screenMdMin - 1);
export const screenMdMax = (screenLgMin - 1);
export const screenLgMax = (screenXlMin - 1);
export const screenXlMax = (screenXxlMin - 1);

const sizes = {
  phonexxs: [16, screenXXsMax],
  phonexs: [screenXs, screenXsMax],
  phonesm: [screenSm, screenSmMax],
  tablet: [screenMd, screenMdMax],
  desktop: [screenLg, screenLgMax],
  retina: [screenXl, screenXlMax],
  retina4K: [screenXl, 2048]
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label][0] / 16}em) and (max-width: ${sizes[label][1] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const KaoContainer = styled.div`
  margin: 0 auto;
  ${media.phonexxs`
    width: ${screenXXs / 16}rem;
  `};
  ${media.phonexs`
    width: ${screenXs / 16}rem;
  `};
  ${media.phonesm`
    width: ${screenSm / 16}rem;
  `};
  ${media.tablet`
    width: ${screenMd / 16}rem;
  `};
  ${media.desktop`
    width: ${screenLg / 16}rem;
  `};
  ${media.retina4K`
    width: ${screenXl / 16}rem;
  `};
`;
