import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import Addusers from "./Addusers";
import Updateuser from "./Updateuser";
const Stack = createStackNavigator();
const Appnavigator=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Users">
          <Stack.Screen name="Users" component={HomeScreen} />
          <Stack.Screen name="AddUser"component={Addusers}options={{headerShown:false}}/>
          <Stack.Screen name="Update"component={Updateuser}options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default Appnavigator;