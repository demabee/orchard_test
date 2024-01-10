import sc from 'styled-components'

export const Section = sc.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 100;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const Container = sc.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`
