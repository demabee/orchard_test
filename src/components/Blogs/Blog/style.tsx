import sc, { keyframes } from 'styled-components'
import { theme } from '../../../styles/theme'
import { CardProps } from './type'

const slideTop = keyframes`
  0% {
    transform: translateY(500px);
  }
  100% {
    transform: translateY(0);
  }
`

export const Card = sc.figure<CardProps>`
  margin: 0;
  animation: ${slideTop} ${(props) =>
    props.delay * 0.5}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  img {
    width: 100%;
    height: 300px;
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

  @media (max-width: 420px) {
    margin: 25px 0;
    img {
      width: 100%;
      height: 250px;
      border-bottom: 5px solid ${theme.color.red};
    }
  }

  @media (min-width: 768px) {
    margin: 15px 0;
    img {
      width: 100%;
      height: 450px;
      border-bottom: 5px solid ${theme.color.red};
    }
  }

  @media (min-width: 1024px) {
    margin: 15px 0;
    img {
      width: 100%;
      height: 250px;
      border-bottom: 5px solid ${theme.color.red};
    }
  }

  @media (min-width: 2560px) {
    margin: 15px 0;
    img {
      width: 100%;
      height: 550px;
      border-bottom: 5px solid ${theme.color.red};
    }
  }
`
