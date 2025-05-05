import React from "react";
import { Text, View } from "react-native";
import Appnavigator from "./Components/Appnavigator";
import { Provider } from "react-redux";
import { store, persistor } from "./Components/store";
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <Appnavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
