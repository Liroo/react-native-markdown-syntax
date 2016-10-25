import { Component, PropTypes } from 'react';
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

  constructor(props: Props) {
    super(props);
    if (typeof props.children !== 'string') {
      throw 'Children passed to Markdown is not a Text (string)';
    }
  }

  componentDidMount() {
    if (this.props.mdStyle) {
      mdStyle = _.merge({}, this.props.mdStyle, mdStyle);
    }
  }

  render() {
    return (
      <View style={[{ flexDirection: 'column' }, this.props.style]}>
        {markdown.toReact(this.props.children)}
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
  codeBlock: {
    fontFamily: 'Courier',
    fontWeight: '500',
  },
  del: {
    containerBackgroundColor: '#222222',
  },
  em: {
    fontStyle: 'italic',
  },
  image: {
    height: 50,
    width: 50,
  },
  inlineCode: {
    backgroundColor: '#eeeeee',
    borderColor: '#dddddd',
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  list: {

  },
  listItem: {
    flexDirection: 'row',
  },
  listItemBullet: {
    fontSize: 20,
    lineHeight: 20,
  },
  listItemNumber: {
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  strong: {
    fontWeight: 'bold',
  },
};
export mdStyle;
