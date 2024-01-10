import sc from 'styled-components'
import { theme } from '../../styles/theme'

const BodysNeed = sc.section`
  display: flex;
  gap: 15px;

  //image content
  article:nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    figure {
      margin: 0;

      img {
        height: 100%;
        width: 100%;
      }
    }

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
    article:nth-child(1) {
      grid-template-columns: 1fr;
    }

    figure:nth-child(1) {
      grid-row: auto;
    }
  }

  @media (min-width: 1023px) {
    article:nth-child(1) {
      grid-template-columns: 15rem 15rem;
    }

    figure:nth-child(1) {
      grid-row: auto;
    }
  }
`

export default BodysNeed
