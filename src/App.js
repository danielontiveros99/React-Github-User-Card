import React from 'react'
import UserCard from './Components/UserCard';
import axios from 'axios'
import './App.css'


class App extends React.Component {
  constructor() {
    super();
    console.log("do: App.js: App: constructor-> was ran")
    this.state= {
      userCard: {},
      userFollowing: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/danielontiveros99')
    .then((res) => {
      console.log('do: App.js: App: CDM: user data', res)
      this.setState({
        userCard: res.data
      })
    }).catch((err) => console.log("err user data", err.message))
    axios.get('https://api.github.com/users/danielontiveros99/following')
    .then((res) => {
      console.log('do: App.js: App: CDM: follower data', res)
      this.setState({userFollowing: res.data})
    }).catch((err) => console.log('err followers data', err.message))
  }


  
    
  render() {
    return(
      <div className="App">
        <h1 className='title'>React User Card</h1>
        <UserCard user={this.state.userCard} following={this.state.userFollowing}/>
      </div>
    );
  }
}
export default App;