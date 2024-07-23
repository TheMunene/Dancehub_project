import React, { useState } from 'react';
import CustomerCards from '../App';
function AppCard() {
  const [activeTab, setActiveTab] = useState(1); // Example state for active tab

  return (
    <div className="App">
      <CustomerCards activeTab={activeTab} />
    </div>
  );
}

export default AppCard;
