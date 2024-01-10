import sc, { keyframes } from 'styled-components'
import { theme } from '../../styles/theme'
import { FigureProps } from './type'

const slideRightAnimation = keyframes`
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
`

export const Container = sc.section`
  display: flex;
  gap: 15px;

  //image content
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    figure:nth-child(1) {
      grid-row: span 2;
    }
  }

  // text content
  article:nth-child(2) {
    font-family: Open Sans;
    font-weight: 100;
    color: white;
    h1 {
      font-weight: 100;
      font-size: 1.5em;
      padding: 10px 0;
      margin-bottom: 20px;
      border-bottom: 1px solid white;
    }

    p {
      font-weight: 100;
      font-size: 1.2em;
    }

    aside {
      margin-top: 30px;
      strong {
        font-family: Open Sans;
        color: ${theme.color.red};
      }
      P {
        margin-top: 15px;
        font-weight: 400;
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
    gap: 15px;
    div {
      grid-template-columns: 1fr;
    }

    figure:nth-child(1) {
      grid-row: auto;
    }
  }

  @media (min-width: 1023px) {
    div {
      grid-template-columns: 15rem 15rem;
    }

    figure:nth-child(1) {
      grid-row: auto;
    }
  }
`

export const Figure = sc.figure<FigureProps>`
  margin: 0;
  animation: ${slideRightAnimation} ${(props) =>
    props.delay * 0.5}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  .ant-image {
    height: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
`
