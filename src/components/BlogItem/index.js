// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <div className="list-container">
      <li className="list-item-container">
        <div className="title-container">
          <h1 className="title">{title}</h1>
          <p className="date">{description}</p>
        </div>
        <p className="date">{publishedDate}</p>
      </li>
      <hr />
    </div>
  )
}

export default BlogItem
