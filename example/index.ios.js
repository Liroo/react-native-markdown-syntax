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
Strong emphasis, aka bold, with **asterisks** or __underscores__.{'\n'}
Combined emphasis with **asterisks and _underscores_**.{'\n'}
Strikethrough uses two tildes. `Scratch this.`{'\n'}
> Hello
 __yoloeza__
 `e az`
 e aze
 az
  e
  az
  e
  az
  e
  az
  e
  az{'\n'}{'\n'}
- ul{'\n\n​\n\n'}1. ol1{'\n'}2. ol2{'\n'}3. ol3{'\n\n\nHellloooo\n\n'}- ulnew{'\n'}- [ ] checkbox{'\n'}
      </Markdown>
    );
  }
}
AppRegistry.registerComponent('example', () => example);
