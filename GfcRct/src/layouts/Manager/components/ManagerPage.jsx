import React, { useEffect, useState } from 'react';
import '../styles/manager.css';



const ManagerPage = () => {
  const [totalDelivery, setTotalDelivery] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTotalDelivery();
  }, []);

  const fetchTotalDelivery = async () => {
    try {
      const response = await fetch('/api/delivery/total');
      const data = await response.json();
      setTotalDelivery(data.total);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching total delivery count:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to the Manager Page</h1>
      <div className="section">
        <h2 className="section-title">Total Delivery Orders</h2>
        <div className="section-content">
          {loading ? 'Loading...' : totalDelivery}
        </div>
      </div>
      {/* Other sections of the manager's page go here */}
    </div>
  );
};

export default ManagerPage;
