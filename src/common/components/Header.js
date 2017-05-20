import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

export { Header };
