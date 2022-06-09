import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Dashboard = () => {
  const params = useParams();
  return (
    <div>
      Dashboard
      <p>Name : {params.name}</p>
      <Link to="/">Back</Link>
    </div>
  );
};
export default Dashboard;
