import './index.css'

const BrowserHistory = props => {
  const {history, deleteLogo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history
  const onDelete = () => {
    deleteLogo(id)
  }
  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="content-list">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="logo"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistory
