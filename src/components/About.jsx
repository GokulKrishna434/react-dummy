import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={'Gokul (Function)'} location={'Trivandrum Function'} />

      <UserClass name={'Gokul (Class)'} location={'Trivandrum Class'} />
    </div>
  );
};

export default About;
