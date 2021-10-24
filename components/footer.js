import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  Center,
  Pressable,
  extendTheme,
} from "native-base";
import {
  Image
} from 'react-native';



export default function Footer() {
  const [selected, setSelected] = React.useState(1);
  const blue = {
    color: '#38bdf8'
  };
  const grey = {
    color: '#323232'
  };



  return (

        <HStack bg="rgb(254,254,254)" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable opacity={selected === 0 ? 0.8 : 0.5} py="1" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Image  source={selected === 0 ? require('../images/run1.png') : require('../images/run.png')} />
              <Text style={selected === 0 ? blue : grey} fontSize="12" >
                跑步
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 1 ? 0.8 : 0.5} py="1" flex={1} onPress={() => setSelected(1)}>
          <Center>
            <Image  source={selected === 1 ? require('../images/calendar1.png') : require('../images/calendar.png')} />
            <Text style={selected === 1 ? blue : grey} fontSize="12" >
              计划
            </Text>
          </Center>
          </Pressable>
          <Pressable opacity={selected === 2 ? 0.8 : 0.5} py="1" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Image  source={selected === 2 ? require('../images/sport1.png') : require('../images/sport.png')} />
              <Text style={selected === 2 ? blue : grey} fontSize="12" >
                社区
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 3 ? 1 : 0.5} py="1" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Image  source={selected === 3 ? require('../images/atm1.png') : require('../images/atm.png')} />
              <Text style={selected === 3 ? blue : grey} fontSize="12" >
                我的
              </Text>
            </Center>
          </Pressable>
        </HStack>
  );
}
