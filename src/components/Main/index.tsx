import sc from 'styled-components'
import { theme } from '../../styles/theme'

const Main = sc.main`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 1.5rem;
  background: ${theme.bg.primary};
  height: 100%;

  @media (max-width: 768px) {
    display: block;
    width: auto;
  }
`

export default Main
