import React, { SFC } from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, StyleSheet } from 'react-native';

const bindStyle = (styles: any, props: any) => StyleSheet.flatten({
  ...styles,
  ...props
});

const style = {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const CenteredView: SFC<{ backgroundColor?: string }> = ({ children, backgroundColor = "#F5FCFF" }) => (
  <View style={bindStyle(style.centeredView, { backgroundColor })}>
    {children}
  </View>
);

storiesOf('CenteredView', module)
  .add('default view', () => (
    <CenteredView>
      <Text>Hello Storybooks</Text>
    </CenteredView>
  ))
  .add('with red background', () => (
    <CenteredView backgroundColor="red">
      <Text>Hello Storybooks</Text>
    </CenteredView>
  ));
