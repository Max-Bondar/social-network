import { createGlobalStyle } from 'styled-components';

const staticPath = '/static/fonts/BalooDa2/';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'BalooDa2';
    src: url(${staticPath}BalooDa2.ttf) format('ttf'),
      url(${staticPath}BalooDa2.ttf) format('ttf');
  }

  @font-face {
    font-family: 'IndieFlower';
    src: url(${staticPath}IndieFlower-Regular.ttf) format('ttf'),
      url(${staticPath}IndieFlower-Regular.ttf) format('ttf');
  }
`;

export default Fonts;
