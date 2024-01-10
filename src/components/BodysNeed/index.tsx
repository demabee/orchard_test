import { Container, Figure } from './style'
import manWithChild from '../../assets/images/component-01/Image-01.jpg'
import tomatoAndOnion from '../../assets/images/component-01/Image-02.jpg'
import bamboo from '../../assets/images/component-01/Image-03.jpg'
import { Image } from 'antd'

const BodysNeed = () => {
  return (
    <Container>
      <div>
        <Figure delay={1}>
          <Image src={manWithChild} alt="manWithChild" preview={{ mask: '' }} />
        </Figure>
        <Figure delay={2}>
          <Image
            src={tomatoAndOnion}
            alt="tomatoAndOnion"
            preview={{ mask: '' }}
          />
        </Figure>
        <Figure delay={3}>
          <Image src={bamboo} alt="bamboo" preview={{ mask: '' }} />
        </Figure>
      </div>
      <article>
        <h1>ANSWER YOUR BODY&apos;S NEEDS</h1>
        <p>
          The way ingredients are sourced affects the way we nourish our bodies.
          Author Mark Schatzer believes our body naturally develops an appetite
          for the foods and nutrients it needs to be health, but that artificial
          flavourings are getting in the way. This can be reversed by focusing
          on high-quality ingredients and being mindful as your appetite guides
          you to consume according to your body&apos;s needs.
        </p>
        <aside>
          <strong>BE MINDFUL</strong>
          <p>
            Sourcing local or organic food is a good way to start being more
            mindful about what you&apos;re cooking and eating.
          </p>
        </aside>
      </article>
    </Container>
  )
}

export default BodysNeed
