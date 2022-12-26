//import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import './components/Tweetapp/TweetApp'
import React,{ Component } from 'react';
import TweetApp  from './components/Tweetapp/TweetApp';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import'./styles.css';
import './index.css';





class App extends Component {
  render(){
    return (
      <div className="App">
        <TweetApp></TweetApp>
      </div>
    );
  }
}

export default App;
