import React from 'react'
import { Card } from './style'
import { BlogProps } from './type'

const Blog: React.FC<BlogProps> = ({ id, image, title, description }) => {
  return (
    <Card delay={id}>
      <img src={image} alt={`${image}`} />
      <figcaption>
        <b>{title}</b>
        <p>{description}</p>
        <div
          onClick={(e) => console.log(e.target)}
          onKeyPress={(e) => {
            // Check if the key pressed is the Enter key (key code 13)
            if (e.key === 'Enter') {
              console.log(e.target)
            }
          }}
          role="button"
          tabIndex={0}
        >
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={(e) => e.preventDefault()}>
            READ MORE
          </a>
          {/* eslint-enable jsx-a11y/anchor-is-valid */}
        </div>
      </figcaption>
    </Card>
  )
}

export default Blog
