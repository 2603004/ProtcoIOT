import React from 'react';
import './settings.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Settings = () => {
  return (
    <div className="settings-button">
      <div className="settings-content">
        <a href="#" class="settings-icon"><FontAwesomeIcon icon={faGear} /></a>
        <span className="settings-text">Change Cookie Settings</span>
      </div>
    </div>
  );
};

export default Settings;
