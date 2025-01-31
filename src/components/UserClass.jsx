import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Gokul',
        location: 'India',
      },
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const newData = {
        name: 'Gokul Krishna',
        location: 'Kerala',
      };
      this.setState({
        userInfo: newData,
      });
    }, [5000]);
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  render() {
    const { location, name } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @gokulkrishna</h4>
      </div>
    );
  }
}

export default UserClass;
