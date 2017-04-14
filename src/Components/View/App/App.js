import React, { Component } from 'react';
import { Header, Grid, Advertisement } from 'semantic-ui-react';

import SidebarContainer from '../../Container/SidebarContainer';
import GalleryFooter from '../Gallery/GalleryFooter/GalleryFooter';
import BoardsDropdown from '../BoardsDropdown/boardsDropdown';
import Player from '../Player/Player';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header as="h2">Welcome to React<Advertisement unit='banner' test='Banner' /></Header>
          
          <Grid columns='equal' centered>
            <Grid.Row verticalAlign="top">
              <Grid.Column width={3} textAlign="left">
                <BoardsDropdown />
                <SidebarContainer />
              </Grid.Column>
              <Grid.Column width={13}>
                <Grid.Row>
                  <Player />
                </Grid.Row>
                <Grid.Row verticalAlign="bottom" textAlign="left">
                  <GalleryFooter />
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default App;
//<List threadData={data} />
//<Player />