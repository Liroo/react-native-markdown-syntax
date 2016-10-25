/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Markdown from 'react-native-markdown-syntax';

export default class example extends Component {
  render() {
    return (
      <Markdown style={{flex: 1}}>
        Hello
      </Markdown>
    );
  }
}
AppRegistry.registerComponent('example', () => example);
