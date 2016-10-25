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
      <Markdown style={{flex: 1, marginTop: 20,}}>
{'\n\n'}
Emphasis, aka italics, with *asterisks* or _underscores_.{'\n'}
{'\n'}
Strong emphasis, aka bold, with **asterisks** or __underscores__.{'\n'}
{'\n'}
Combined emphasis with **asterisks and _underscores_**.{'\n'}
{'\n'}
Strikethrough uses two tildes. ~~Scratch this.~~{'\n'}
      </Markdown>
    );
  }
}
AppRegistry.registerComponent('example', () => example);
