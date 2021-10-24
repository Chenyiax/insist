import React, { useState } from "react";
import {
  Box, Center,
  Container, Text, HStack, View, Flex, VStack,
} from "native-base";
import {
  Image, ImageBackground, StyleSheet, TouchableOpacity,
} from "react-native";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sign from './sign'
import Signup from './signup'

const Stack = createNativeStackNavigator();

function Inform({navigation}) {
  const userText = useState("未登录");
  const minute = useState(0);
  const kg = useState(0);
  const day = useState(0)

  return (
    <NativeBaseProvider>
      <View style={{flex: 1}}>
        <ImageBackground style={{flex: 1,zIndex:10}} source={require('../images/bg.png')}>
          <TouchableOpacity onPress={() => navigation.navigate('登录')}>
            <View style={styles.user}>
              <Image source={require('../images/head.png')} style={{height:60,width: 60}}/>
            </View>
          </TouchableOpacity>
          <Text fontSize='2xl' style={styles.userText}>{userText}</Text>
        </ImageBackground>
      </View>
      <View style={{flex: 2, backgroundColor: 'rgb(250,250,250)'}}>
        <HStack flex={0.7} space={50} alignItems="center" justifyContent="center" >
          <TouchableOpacity>
            <View style={styles.box1}>
              <Text style={styles.text}>总运动                      <Text fontSize='md' color='rgb(200,200,200)'>></Text>{"\n"}<Text fontSize='xl' style={styles.large}>{minute}</Text> 分钟{"\n"}本周共消耗了0千卡</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box2}>
              <Text style={styles.text}>体重                      <Text fontSize='md' color='rgb(200,200,200)'>></Text>{"\n"}<Text fontSize='xl' style={styles.large}>{kg}</Text>kg{"\n"}上次记录{day}天前</Text>
            </View>
          </TouchableOpacity>
        </HStack>
        <VStack flex={0.7}>
          <TouchableOpacity>
            <View style={styles.kind}>
              <Text style={styles.kindText}>我的收藏</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.kind}>
              <Text style={styles.kindText}>订阅</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.kind}>
              <Text style={styles.kindText}>更多</Text>
            </View>
          </TouchableOpacity>
        </VStack>
      </View>
    </NativeBaseProvider>

  )
}


export default function Info() {

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
      })}
    >
      <Stack.Screen name="信息" component={Inform} />
      <Stack.Screen name="登录" component={Sign} />
      <Stack.Screen name="注册" component={Signup} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  kindText: {
    paddingLeft: 20,
    fontSize: 18,
  },
  kind: {
    marginRight:20,
    marginLeft:20,
    borderStyle: 'solid',
    borderColor:'rgb(200,200,200)',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    height: 50,
  },
  large: {
    marginTop: 10,
    color: 'black',
    fontSize: 30
  },
  bx: {
    height: 200,
    borderRadius: 30,

  },
  user: {
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  userText: {
    marginTop: 20,
    paddingLeft: 20,
    color: 'rgb(250,250,250)'
  },
  box1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',

    height: 150,
    width: 150,
    paddingLeft:10,
    paddingTop: 10,
    borderRadius: 9,
  },
  box2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',

    height: 150,
    width: 150,
    paddingLeft:10,
    paddingTop: 10,
    borderRadius: 9,
  },
  text: {
    height: 100,
    lineHeight: 30,
    fontSize: 12
  },
})

