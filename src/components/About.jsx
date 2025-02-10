import React from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

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
        <div>
          Logged In User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h3 className="text-xl font-bold">{loggedInUser}</h3>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default About;
