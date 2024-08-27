// src/components/PrivacySettings.tsx
import React, { useState } from 'react';

type PrivacySettingsProps = {
  initialSettings?: {
    tracking: boolean;
    personalizedAds: boolean;
    dataSharing: boolean;
  };
};

const PrivacySettings: React.FC<PrivacySettingsProps> = ({ initialSettings }) => {
  const [settings, setSettings] = useState({
    tracking: initialSettings?.tracking || false,
    personalizedAds: initialSettings?.personalizedAds || false,
    dataSharing: initialSettings?.dataSharing || false,
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="privacy-settings">
      <h2>Privacy Settings</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.tracking}
            onChange={() => handleToggle('tracking')}
          />
          Enable Tracking
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.personalizedAds}
            onChange={() => handleToggle('personalizedAds')}
          />
          Personalized Ads
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.dataSharing}
            onChange={() => handleToggle('dataSharing')}
          />
          Data Sharing with Third Parties
        </label>
      </div>
    </div>
  );
};

export default PrivacySettings;
