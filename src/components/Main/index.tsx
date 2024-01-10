import sc from 'styled-components'
import { theme } from '../../styles/theme'

const Main = sc.main`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  background: ${theme.bg.primary};
  height: 100%;

  @media (max-width: 768px) {
    display: block;
    padding: 1rem;
    width: auto;
  }
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`

export default Main
