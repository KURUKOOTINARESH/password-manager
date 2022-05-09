import './index.css'

const PasswordItem = props => {
  const {details, showPassword, onDeleteItem} = props
  const {id, website, username, password, className} = details
  const firstLetter = website.slice(0, 1).toUpperCase()
  const passwordDisplay = showPassword ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="password-con">
      <div className={`profile-logo-con ${className}`}>
        <p>{firstLetter}</p>
      </div>
      <div className="details-con">
        <p className="text">{website}</p>
        <p className="text">{username}</p>
        <p className="text">{passwordDisplay}</p>
      </div>
      <div className="delete-button-con">
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
