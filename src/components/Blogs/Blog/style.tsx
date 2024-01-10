import sc from 'styled-components'
import { theme } from '../../../styles/theme'

export const Card = sc.figure`
  margin: 0;
  img {
    width: 100%;
    height: 250px;
    border-bottom: 5px solid ${theme.color.red};
  }

  figcaption {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    text-align: left;
    color: white;

    p {
      font-weight: 100;
    }

    a {
      width: 90px;
      text-decoration: none;
      color: white;
      border-bottom: 2px solid ${theme.color.red};
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 15px 0;
    img {
      width: 100%;
      height: 450px;
      border-bottom: 5px solid ${theme.color.red};
    }
  }
`
