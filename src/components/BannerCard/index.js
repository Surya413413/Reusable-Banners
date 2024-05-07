// Write your code here.
import './index.css'

const ListDetails = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div className="index-conatiner">
        <h1 className="heading">{headerText}</h1>
        <p>{description}</p>
        <button className="button-style">Show More</button>
      </div>
    </li>
  )
}
export default ListDetails
