import React, {useState, useEffect} from "react";
import Navigator from '../routes/homeStack'
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Image,
  FormControl,
  Input,
  Button,
} from "native-base";
import { auth } from "../firebase";
import logo from '../assets/svg/sdk.svg';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function signup({navigation}) {
    // State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        // navigate
    const navigateLogin = () => {
        navigation.navigate('Login');
    }

    // Auth
    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
               console.log('Registered with: ', user.email);
        })
        .catch(error => alert(error.message))

    }

       useEffect(() => {
         const unsub = auth.onAuthStateChanged(user => {
             if(user) {
                 navigation.replace("Home");
             }
         })
          return unsub
      }, [])

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={3} alignItems="center">
           <Image source={logo}  style={{ width: 180, height: 190 }}/>
          <Heading size="lg">React Native / EXPO</Heading>
          <HStack space={2} alignItems="center">
            <Code>Documentation</Code>
          </HStack>
        
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
          alignSelf="flex-start"
        >
        Sign up to continue!
      </Heading>

        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input
              value={email}
              onChangeText={text => setEmail(text)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password"
              value={password}
              onChangeText={text => setPassword(text)}
          />
        </FormControl>
         <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" style={{width: 300}} onPress={handleSignUp}>
          Sign up
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            I have an account.{" "}
          </Text>
          <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            href="#"
            onClick={navigateLogin}
          >
            Log in
          </Link>
        </HStack>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
