import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { useNavigate } from "react-router-dom";

function TabSwitcher() {
  const [activeTab, setActiveTab] = useState('tab1');
  const navigate = useNavigate();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'tab2') {
      navigate("/news")

    }
    else{
      navigate("/")
      
    }
    setActiveTab(tab);
  };

  return (
    <div className="sidebar">
      <Navbar />
      
      <div className="tab-switcher">
        <button
          className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab1')}
        >
          Chat
        </button>
        <button
          className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab2')}
        >
          News
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'tab1' ? (
          <div>
            <Search />
            <Chats />
          </div>
        ) : (
          <div>
            <div className="news-thread-info">
              <span>News 1</span>
              <span>News 2</span>
              <span>News 3</span>
              <span>News 4</span>
              <span>News 5</span>
              <span>News 6</span>
              <span>News 7</span>
              <span>News 8</span>
            </div>          
          </div>
        )}
      </div>
    </div>
  );
}

export default TabSwitcher;
