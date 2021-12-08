import React from "react";
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
import logo from '../assets/svg/sdk.svg';



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function login({navigation}) {

    // navigate
    const navigateSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <NativeBaseProvider>
        <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
        >
            <VStack space={5} alignItems="center">
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
            Sign in to continue!
        </Heading>

            <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input />
            </FormControl>
            <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
                _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
            >
                Forget Password?
            </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" style={{width: 300}}>
            Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
            <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                color: "warmGray.200",
                }}
            >
                I'm a new user.{" "}
            </Text>
            <Link
                _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
                }}
                href="#"
                onClick={navigateSignUp}
            >
                Sign Up
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
