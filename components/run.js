import React, { useState } from "react";
import {
  Box, Center,
  Container, Text, HStack, View, Flex,
} from "native-base";
import {
  Image, StyleSheet, TouchableOpacity,
} from "react-native";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { MapView } from "react-native-amap3d";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function run1({navigation}) {
  return (
    <NativeBaseProvider>
      <View style={styles.max}>
        <View style={styles.max}>
          <View style={styles.box}  >
            <Text style={styles.txt1}>
              累计跑步距离：{'\n'}
              <Text><Text fontSize='4xl' style={styles.txt2}>0.00</Text>公里</Text>
            </Text>
          </View>
          <View style={{flex: 1,marginLeft:10,marginRight:10}}>
            <MapView
              style={StyleSheet.absoluteFill}
              center={{
                latitude: 34.366802, longitude: 109.194145}}
              zoomLevel={18}
              tilt={45}
              showsIndoorMap
            >
              <MapView.Marker
                active
                title='当前位置'
                color='red'
                coordinate={{
                  latitude: 34.366802,
                  longitude: 109.194145,
                }}
              />
            </MapView>
          </View>
          <Center flex={0.7}>
            <HStack space={9} alignItems="center">
              <TouchableOpacity>
                <Center style={styles.side}>
                  <Text fontSize='md' color='black'>目标</Text>
                </Center>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('开始')}>
                <Center style={styles.center} >
                  <Text fontSize='2xl' color='rgb(255,255,255)'>开始</Text>
                </Center>
              </TouchableOpacity>
              <TouchableOpacity>
                <Center style={styles.side}>
                  <Text fontSize='md' color='black'>陪跑</Text>
                </Center>
              </TouchableOpacity>
            </HStack>
          </Center>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
function run2() {
  return(
      <Center>
        测试
      </Center>

  );
}
export default function Run() {

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
      })}
    >
      <Stack.Screen name="准备" component={run1} />
      <Stack.Screen name="开始" component={run2} />
    </Stack.Navigator>
  );

}

const styles = StyleSheet.create({
  user: {
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  userText: {
    paddingLeft:10,
    fontSize: 15,
    color: 'black'
  },
  txt1: {
    marginTop: 10,
    marginLeft: 10,
    color: 'rgb(150,150,150)',
    fontSize: 13
  },
  txt2: {
    paddingTop: 30,
    marginLeft: 10,
    color: 'black',

  },
  center: {
    borderRadius: 50,
    backgroundColor: 'rgb(34,192,131)',
    height: 100,
    width: 100,
    elevation: 1
  },
  side: {
    borderRadius: 30,
    backgroundColor: 'rgb(255,255,255)',
    height: 60,
    width: 60,
    elevation: 1,
  },
  max: {
    flex: 1,
  },
  box: {
    borderColor: 'black',
    marginLeft:10,
    marginRight:10,

  },
  line: {
    backgroundColor: "rgb(200,200,200)",
    height: 1,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  }
})
