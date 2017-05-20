import React from 'react';
import { View } from 'react-native';

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

const CardSection = (props) => {
  const { containerStyle } = style;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

export { CardSection };
