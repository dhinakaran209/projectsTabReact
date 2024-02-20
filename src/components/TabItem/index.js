import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const clickingTab = () => clickTab(tabId)

  const className = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${className}`}
        onClick={clickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
