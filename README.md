# react-native-markdown-syntax
***
This component is based on the parser [markdown-js](https://github.com/evilstreak/markdown-js).

### Installation

`npm install react-native-markdown-syntax`

### Usage

```
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
        Inline code uses one `. `Scratch this.`{'\n'}

        Here comes codeblock{'\n'}
        > Hello
         __em__
         `inline Code` az{'\n'}{'\n'}
        - ul{'\n\n​\n\n'}
        1. ol1{'\n'}
        2. ol2{'\n'}
        3. ol3{'\n\n\nHere a new list\n\n'}
        - ulnew{'\n'}
        - [ ] checkbox not supported yet :/{'\n'}
      </Markdown>
    );
  }
}
AppRegistry.registerComponent('example', () => example);
```

Based on a html parser, `react-native-markdown-syntax` support many markdown syntax, but not fully feature is implemented in react-native, here is the supported tag from web to react-native:

| HTML Tag   	| Desc           	| Markdown syntax example 	|
|------------	|----------------	|-------------------------	|
| h {1-6}    	| Header         	| # Hello                 	|
| strong     	| Bold           	| **Hello**               	|
| em         	| Italics        	| _Hello_                 	|
| p          	| Paragraph      	| Hello                   	|
| code       	| Code           	| `Hello`                 	|
| pre        	| Inline Code    	| `Hello`                 	|
| blockquote 	| Quote          	| > Hello                 	|
| ul         	| Unordered List 	| - Hello {'\n'} - Hello   	|
| ol         	| Ordered List   	| 1. Hello {'\n'} - Hello  	|
| li         	| List Item      	|                         	|
| br         	| Line Break     	| \n                      	|

You can pass style for each tag as mdStyle props:

```
<Markdown mdStyle={mdStyle}...

const mdStyle = {
  h: {
    fontWeight: '200',
  },
  h1: {
    fontSize: 32,
  },
    ...
  p: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}
```

but there is already a default style, don't worry ! :guitar:

### TODO

There is much things to do and PR is appreciated ! :rocket:
