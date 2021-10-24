import { Image } from "react-native";
import Run from "./run";
import Plan from "./plan";
import Com from "./community";
import Info from "./information";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Mtb() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === '跑步') {
            return (
              <Image  source={focused ? require('../images/run1.png') : require('../images/run.png')} />
            );
          } else if (route.name === '我的') {
            return (
              <Image  source={focused ? require('../images/atm-fill.png') : require('../images/atm.png')} />
            );
          } else if (route.name === '计划') {
            return (
              <Image  source={focused ? require('../images/calendar-fill.png') : require('../images/calendar.png')} />
            );
          } else if (route.name === '社区') {
            return (
              <Image  source={focused ? require('../images/sport-fill.png') : require('../images/sport.png')} />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#8586FB',
      })}
    >
      <Tab.Screen name="跑步" component={Run} />
      <Tab.Screen name="计划" component={Plan} />
      <Tab.Screen name="社区" component={Com} />
      <Tab.Screen name="我的" component={Info} />
    </Tab.Navigator>
  );
}
