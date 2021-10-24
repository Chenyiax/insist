import React , {
  useState
}from 'react';
import {
  NativeBaseProvider,
} from "native-base";
import {
  DrawerLayoutAndroid,
} from "react-native";
import Letterbox from './components/leftbox';
import Mtb from "./components/mytabs";
import Sign from './components/sign'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();

export default function App() {
  SplashScreen.hide();
  const [drawerPosition, setDrawerPosition] = useState("left");
  const navigationView = (
    <Letterbox />
  );

  return (
    <NativeBaseProvider flex={1}>
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={() => navigationView}
        flex={1}
      >
        <NavigationContainer>
          <Stack.Navigator screenOptions={({ route }) => ({
            header: () => null,
          })}>
            <Stack.Screen name="跑步" component={Mtb} />
            <Stack.Screen name="登录" component={Sign} />
          </Stack.Navigator>
        </NavigationContainer>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
}
