import React, { Component } from 'react';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
import WelcomeScreen from './containers/WelcomeScreen';
import NextScreen from './containers/NextScreen';

class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={styles.sceneStyle}>

        <Scene key="main">

          <Scene
            key="welcomescreen"
            component={WelcomeScreen}
            hideNavBar
            initial
          />
          <Scene
            key="nextscreen"
            component={NextScreen}
            hideNavBar
          />

        </Scene>

      </Router>
    );
  }
}

const styles = {
  sceneStyle: {
    flex: 1
  }
};

export default RouterComponent;
