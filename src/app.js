import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './common/components';
import rootReducer from './common/reducers';

const App = () => (
  <Provider store={createStore(rootReducer)}>
    <View style={{ flex: 1 }}>
      <Header headerText="Spotter" />
    </View>
  </Provider>
);

export default App;
