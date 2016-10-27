import React from 'react';
import {
  Linking,
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
    case tag === 'code':
      return (
        <Text key={_.uniqueId('react-native-markdown-syntax_')} style={mdStyle[tag]}>
          {content}
        </Text>
      );
    case tag === 'a':
    console.log(/href="(.*)"/.exec(tag_attrs)[1]);
      return (
        <Text key={_.uniqueId('react-native-markdown-syntax_')} style={mdStyle[tag]} onPress={() => {
          Linking.openURL(/href="(.*)"/.exec(tag_attrs)[1]);
        }}>
          {content}
        </Text>
      );
    case tag === 'pre':
      return (
        <View key={_.uniqueId('react-native-markdown-syntax_')} style={mdStyle['boxPre']}>
          <Text key={_.uniqueId('react-native-markdown-syntax_')} style={mdStyle[tag]}>
            {content}
          </Text>
        </View>
      );
    case tag === 'blockquote':
      return (
        <View key={_.uniqueId('react-native-markdown-syntax_')} style={{ alignItems: 'center', flexDirection: 'row' }}>
          <View key="pipe" style={mdStyle['blockQuotePipe']} />
          <Text key="blockquote" style={mdStyle[tag]}>
            {content}
          </Text>
        </View>
      );
    case tag === 'ul':
    case tag === 'ol':
      return (
        <View key={_.uniqueId('react-native-markdown-syntax_')} style={{ justifyContent: 'center', flexDirection: 'column' }}>
          {content}
        </View>
      );
    case /^[0-9]+li$/.test(tag):
    return (
      <View key={_.uniqueId('react-native-markdown-syntax_')} style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Text key="point" style={mdStyle['liOrder']}>
          {/^[0-9]+/.exec(tag)[0]}.{' '}
        </Text>
        <Text key="li" style={mdStyle[tag]}>
          {content}
        </Text>
      </View>
    );
    case tag === 'li':
      return (
        <View key={_.uniqueId('react-native-markdown-syntax_')} style={{ alignItems: 'center', flexDirection: 'row' }}>
          <View key="point" style={mdStyle['liPoint']}/>
          <Text key="li" style={mdStyle[tag]}>
            {content}
          </Text>
        </View>
      );
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
