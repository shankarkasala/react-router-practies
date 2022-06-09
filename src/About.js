import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const About = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      About
      <p>Name : {params.get('name')}</p>
      <p>Age : {params.get('age')}</p>
      <Link to="/">Back</Link>
    </div>
  );
};
export default About;
