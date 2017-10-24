/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Navigation from "./app/config/navigator"

export default class firstApp extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

AppRegistry.registerComponent('firstApp', () => firstApp);
