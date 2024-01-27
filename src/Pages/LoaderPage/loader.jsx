import React, { useState, useEffect } from 'react';
import './Loader.css'; 

export default function Loader(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : null;
};

