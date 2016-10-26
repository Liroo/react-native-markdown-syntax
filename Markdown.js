import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { markdown } from './lib/index';

type Props = {
  style: any;
  mdStyle: any,
  childre?: any;
};

export default class Markdown extends Component {
  props: Props;

  static propTypes = {
    style: View.propTypes.style,
    mdStyle: PropTypes.any,
  };

  componentDidMount() {
    if (this.props.mdStyle) {
      mdStyle = _.merge({}, this.props.mdStyle, mdStyle);
    }
  }

  render() {
    let text;
    if (typeof this.props.children === 'string') {
      text = this.props.children;
    } else if (typeof this.props.children === 'object') {
      text = this.props.children.join('');
    } else {
      throw 'Not supported type of text: ' + typeof this.props.children;
    }
    return (
      <View style={[{ flexDirection: 'column' }, this.props.style]}>
        {markdown.toReact(text)}
      </View>
    )
  }
}

// Here is the default style for markdown
let mdStyle = {
  h: {
    fontWeight: '200',
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 16,
  },
  h5: {
    fontSize: 13,
  },
  h6: {
    fontSize: 11,
  },
  code: {
    backgroundColor: '#f7f7f7',
    padding: 5,
  },
  blockquote: {
    fontFamily: 'Courier',
    fontWeight: '500',
    color: 'grey',
  },
  blockQuotePipe: {
    height: 25,
    width: 3,
    marginHorizontal: 10,
    backgroundColor: '#dddddd',
  },
  del: {
    containerBackgroundColor: '#222222',
  },
  em: {
    fontStyle: 'italic',
  },
  strong: {
    fontWeight: 'bold',
  },
  li: {

  },
  liPoint: {
    height: 5,
    width: 5,
    borderRadius: 50,
    margin: 5,
    backgroundColor: 'black',
  },
  liOrder: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  p: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
};
export { mdStyle };
