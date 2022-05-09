import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

const colorList = [
  'purple',
  'yellow',
  'green',
  'orange',
  'light-green',
  'red',
  'blue',
]

class PasswordManager extends Component {
  state = {
    passwordManagerList: [],
    website: '',
    username: '',
    password: '',
    showPassword: false,
    search: '',
  }

  onChangeWebsiteInputField = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsernameInputField = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInputField = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onDeleteItem = id => {
    const {passwordManagerList} = this.state
    const updatedList = passwordManagerList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({passwordManagerList: updatedList})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const className = colorList[Math.floor(Math.random() * 7)]
    const {website, username, password} = this.state
    this.setState(prevState => ({
      passwordManagerList: [
        ...prevState.passwordManagerList,
        {id: v4(), website, username, password, className},
      ],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      passwordManagerList,
      website,
      username,
      password,
      showPassword,
      search,
    } = this.state
    const filteredList = passwordManagerList.filter(eachItem =>
      eachItem.website.toUpperCase().includes(search.toUpperCase()),
    )
    const listLength = filteredList.length
    const displayPasswords =
      listLength === 0 ? (
        <div className="no-passwords-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-img"
          />
          <p className="no-passwords-text">No passwords</p>
        </div>
      ) : (
        <ul className="display-password-con">
          {filteredList.map(eachItem => (
            <PasswordItem
              details={eachItem}
              key={eachItem.id}
              showPassword={showPassword}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      )
    return (
      <div className="app-con">
        <div className="logo-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="add-new-password-con">
          <div className="add-new-password">
            <h1 className="form-header">Add New Password</h1>
            <form onSubmit={this.onSubmitForm}>
              <div className="input-field-con">
                <label htmlFor="website" className="form-logo-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />
                </label>
                <input
                  type="text"
                  id="website"
                  className="user-input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsiteInputField}
                  value={website}
                />
              </div>
              <div className="input-field-con">
                <label htmlFor="username" className="form-logo-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />
                </label>
                <input
                  type="text"
                  id="username"
                  className="user-input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsernameInputField}
                  value={username}
                />
              </div>
              <div className="input-field-con">
                <label htmlFor="password" className="form-logo-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />
                </label>
                <input
                  type="password"
                  id="password"
                  className="user-input"
                  placeholder="Enter Password"
                  onChange={this.onChangePasswordInputField}
                  value={password}
                />
              </div>
              <div className="add-button-con">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="passwords-section">
          <div className="passwords-nav">
            <div className="results-count-con">
              <h1 className="passwords-text">Your Passwords</h1>
              <p className="passwords-text">{listLength}</p>
            </div>

            <div className="search-con">
              <label htmlFor="search" className="search-icon-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </label>
              <input
                type="search"
                id="search"
                className="search-input"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="show-passwords-con">
            <input
              type="checkbox"
              id="showPasswords"
              className="show-passwords-checkbox"
              onChange={this.onChangeCheckBox}
            />
            <label htmlFor="showPasswords" className="show-passwords-label">
              Show Passwords
            </label>
          </div>
          <div className="passwords-con">{displayPasswords}</div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
