import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from 'native-base';
import { TouchableOpacity } from "react-native";


export default function App({navigation}) {


  const inputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      username:e.target.value
    })
  }


  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Email
            </FormControl.Label>
            <Input onChange={(e)=> inputChange(e)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Password
            </FormControl.Label>
            <Input type="password" />
            <Link
              _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
              alignSelf="flex-end"
              mt="1">
              forget password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <TouchableOpacity onPress={() => navigation.navigate('注册')}>
              <Text fontSize="sm" color="muted.700" fontWeight={400}>
                Im a new user?{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}>
                 Sign up
              </Link>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
