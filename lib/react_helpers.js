import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import _ from 'lodash';
import { mdStyle } from '../Markdown';

exports.htmlReactLinks = (tag, tag_attrs, content) => {
  if (tag === 'text') {
    return (
      <Text key={_.uniqueId('react-native-markdown-syntax_')}>
        {content}
      </Text>
    );
  }
  switch (true) {
    case /^h[123456]?$/.test(tag):
    case tag === 'strong':
    case tag === 'em':
    case tag === 'p':
    case tag === 'html':
    case tag === 'pre':
    case tag === 'code':
      return (
        <Text key={_.uniqueId('react-native-markdown-syntax_')} style={mdStyle[tag]}>
          {content}
        </Text>
      );
    // case tag === 'li':
    //   return (
    //
    //   );
    // case tag === 'ol':
    //   return (
    //
    //   );
    // case tag === 'ul':
    //   return (
    //   );
    case tag === 'br':
      return (
        <Text key={_.uniqueId('react-native-markdown-syntax_')} style={mdStyle[tag]}>
          {content}
          {'\n'}
        </Text>
      );
    default:
      return (
        <Text key={_.uniqueId('react-native-markdown-syntax_')}>
          {content}
        </Text>
      );
  }
}
