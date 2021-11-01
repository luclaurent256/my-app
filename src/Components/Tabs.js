import React, { useState} from 'react'
import './Tabs.css'


const Tabs = ({tabsLabel, children}) => {
  const [activeTabId, setActiveTabId] = useState(1);

  const handleTabClick = (tab) => setActiveTabId(tab.id);

  const activeTabContent = children.filter((child) => {
    return parseInt(child.props.id) === activeTabId;
  });

  const tabsTemplate = tabsLabel.map((tab) => {
    return (
      <li 
        key={tab.id}
        className={tab.id === activeTabId ? 'active' : null}
        onClick={() => handleTabClick(tab)}
      >
        {tab.label}
      </li>
    );
  });
  return (
    <div className="tabs-wrapper">
      <ul className="tabs">
        {tabsTemplate}
      </ul>
      <div className="tab-content">
        {activeTabContent}
      </div>
    </div>
  )
}

export default Tabs;
