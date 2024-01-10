import Main from './components/Main'
import BodysNeed from './components/BodysNeed'
import manWithChild from './assets/images/component-01/Image-01.jpg'
import tomatoAndOnion from './assets/images/component-01/Image-02.jpg'
import bamboo from './assets/images/component-01/Image-03.jpg'
import Blogs from './components/Blogs'

const App = () => {
  return (
    <Main>
      <BodysNeed>
        <article>
          <figure>
            <img src={manWithChild} alt="manWithChild" />
          </figure>
          <figure>
            <img src={tomatoAndOnion} alt="tomatoAndOnion" />
          </figure>
          <figure>
            <img src={bamboo} alt="bamboo" />
          </figure>
        </article>
        <article>
          <h1>ANSWER YOUR BODY&apos;S NEEDS</h1>
          <p>
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be health, but that
            artificial flavourings are getting in the way. This can be reversed
            by focusing on high-quality ingredients and being mindful as your
            appetite guides you to consume according to your body&apos;s needs.
          </p>
          <aside>
            <strong>BE MINDFUL</strong>
            <p>
              Sourcing local or organic food is a good way to start being more
              mindful about what you&apos;re cooking and eating.
            </p>
          </aside>
        </article>
      </BodysNeed>
      <Blogs />
    </Main>
  )
}

export default App
