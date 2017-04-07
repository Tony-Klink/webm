import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SidebarContainer from '../../Container/SidebarContainer';
import { GalleryFooter } from '../Gallery/GalleryFooter/GalleryFooter';
//import { Player } from '../Player/Player';
//import { List } from '../List/List';

//import { data } from '../../../MockupData/data';
import { threadDetails } from '../../../MockupData/threadDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SidebarContainer />
        <GalleryFooter threadData={threadDetails} />
      </div>
    );
  }
}

export default App;
//<List threadData={data} />
//<Player />