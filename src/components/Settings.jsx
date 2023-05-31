import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  const renderTabContent = (tab) => {
    switch (tab) {
      case 'notifications':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Notifications Settings */}
          </div>
        );
      case 'darkMode':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Dark Mode Settings */}
          </div>
        );
      case 'sound':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Sound Settings */}
          </div>
        );
      case 'autoDownload':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Auto Download Settings */}
          </div>
        );
      case 'emojiSuggestions':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Emoji Suggestions Settings */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-gray-100">
      <div className="w-1/2 px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Chat Settings</h2>

        <button
          className="w-full bg-white rounded-lg shadow-md text-left mb-4 p-4 flex items-center"
          onClick={() => handleTabClick('notifications')}
        >
          <div className="w-6 h-6 rounded-full bg-blue-500 mr-3"></div>
          Enable Notifications
        </button>

        <button
          className="w-full bg-white rounded-lg shadow-md text-left mb-4 p-4 flex items-center"
          onClick={() => handleTabClick('darkMode')}
        >
          <div className="w-6 h-6 rounded-full bg-purple-500 mr-3"></div>
          Dark Mode
        </button>

        <button
          className="w-full bg-white rounded-lg shadow-md text-left mb-4 p-4 flex items-center"
          onClick={() => handleTabClick('sound')}
        >
          <div className="w-6 h-6 rounded-full bg-green-500 mr-3"></div>
          Enable Sound
        </button>

        <button
          className="w-full bg-white rounded-lg shadow-md text-left mb-4 p-4 flex items-center"
          onClick={() => handleTabClick('autoDownload')}
        >
          <div className="w-6 h-6 rounded-full bg-yellow-500 mr-3"></div>
          Auto Download Media
        </button>

        <button
          className="w-full bg-white rounded-lg shadow-md text-left mb-4 p-4 flex items-center"
          onClick={() => handleTabClick('emojiSuggestions')}
        >
          <div className="w-6 h-6 rounded-full bg-pink-500 mr-3"></div>
          Show Emoji Suggestions
        </button>
      </div>

      <div className="w-1/2 bg-gray-200 p-8">
        {activeTab && renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default Settings;
