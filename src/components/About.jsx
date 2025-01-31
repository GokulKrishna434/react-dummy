import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor');
  }

  componentDidMount() {
    console.log(' Parent  did mount');
  }

  render() {
    console.log('Parent render');
    return (
      <div>
        <h1>About</h1>

        <UserClass name={'First'} location={'Trivandrum Class'} />
        <UserClass name={'Second'} location={'Trivandrum Class'} />
        <UserClass name={'Third'} location={'Trivandrum Class'} />
      </div>
    );
  }
}

export default About;
