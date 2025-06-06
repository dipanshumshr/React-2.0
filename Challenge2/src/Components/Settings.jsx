import React from 'react';

const Settings = () => {
    
  return (
    <div>
      <h2>Settings</h2>
      <label>
        Notifications:
        <input type="checkbox" />
      </label>
      <br />
      <label>
        Theme:
        <select>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
