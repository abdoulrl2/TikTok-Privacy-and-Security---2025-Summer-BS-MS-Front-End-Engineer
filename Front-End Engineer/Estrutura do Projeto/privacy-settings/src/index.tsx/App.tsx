// src/App.tsx
import React from 'react';
import PrivacySettings from './components/PrivacySettings';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Privacy Settings App</h1>
      </header>
      <main>
        <PrivacySettings />
      </main>
    </div>
  );
}

export default App;
