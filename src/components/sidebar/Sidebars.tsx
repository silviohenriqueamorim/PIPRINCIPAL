import React, { useState } from 'react';
import SidebarUser from './SidebarUser';
import Sidebar from './sidebar'    

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? <SidebarUser handleLogout={handleLogout} /> : <Sidebar handleLogin={handleLogin} />}
    </div>
  );
};

export default App;
