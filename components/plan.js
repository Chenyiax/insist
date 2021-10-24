import React, { useState, useEffect } from "react";
import {
  Box, Center,
  Container, HStack, Flex,
} from "native-base";
import {
  View,
  Text, StyleSheet,
} from "react-native";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { MapView } from "react-native-amap3d";
import Polyline from "react-native-amap3d/lib/js/map-view/polyline";
import geolocation from "@react-native-community/geolocation";
import { LinearGradient } from "react-native-svg";


// // 然后使用
// navigator.geolocation = geolocation;
// navigator.geolocation.getCurrentPosition((pos) => {
//   let coords = pos.coords;
//   // 打印经度-维度
//   alert(coords.longitude + "," + coords.latitude);
// })


export default function Plan() {
  return (
      <View style={{flex: 1}}>
        <NativeBaseProvider>
          <Center flex={1}>
            <Text>
              开发中
            </Text>
          </Center>
        </NativeBaseProvider>
      </View>
  )
}
