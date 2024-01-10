import { blogs } from '../../constants'
import Blog from './Blog'
import { Container, Section } from './style'

const Blogs = () => {
  return (
    <Section>
      <h1>ALL THE LATEST FROM AEG</h1>
      <Container>
        {blogs.map((data) => (
          <Blog
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </Container>
    </Section>
  )
}

export default Blogs
