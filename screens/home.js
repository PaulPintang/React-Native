import React from "react"
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Link,
  ScrollView,
  Code,
  useColorMode,
  Switch,
  Image,
  Button
} from "native-base"
import logo from '../assets/svg/sdk.svg';
import { auth } from "../firebase";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function Home({navigation}) {


 const handleSignOut = () =>{
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message));
  }
  
const { colorMode, toggleColorMode } = useColorMode();
 
  return (
     <NativeBaseProvider>
        <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
        >
        <HStack space={220} mt="5">
          <HStack>
             <Image source={logo}  style={{ width: 38, height: 40 }}/>
              <VStack>
                <Text color="gray.500" fontWeight="medium" ml="3" fontSize={16}>EXPO Docs</Text>
                <Text color="gray.500" fontSize={12} fontWeight="medium" ml="3">
                  User: {auth.currentUser?.email}
                </Text>
            </VStack>
          </HStack>
            <VStack space={1}>
              {/* <Switch
                  isChecked={colorMode === "light" ? true : false}
                  onToggle={toggleColorMode}
                  aria-label={
                  colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                  }
              /> */}
              <ToggleDarkMode/>
              <Link onClick={handleSignOut} mr="5">
                  <Text fontSize={12} fontWeight="medium" color="blue.500">
                    Log Out
                  </Text>
              </Link>
            </VStack>
      </HStack>

      <ScrollView  showsVerticalScrollIndicator={false} mt="6">
    <VStack space={4} alignItems="center">
     {/* <Text fontSize={12} fontWeight="medium" alignSelf="self-start">
           Current User: {auth.currentUser?.email}
      </Text> */}

    <Pressable
      onPress={() => {
        console.log("Hello world")
      }}
    >
      <Box p="5" rounded="8" bg="cyan.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            EXPO
          </Text>
          <Spacer />
          <Text fontSize={12} color="cyan.100">
           NO.1
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
         What is EXPO ?
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
          Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            
          </Text>
        </Flex>
      </Box>
    </Pressable>
      <Pressable
      onPress={() => {
        console.log("Hello world")
      }}
    >
      <Box p="5" rounded="8" bg="cyan.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            INSTALLATION
          </Text>
          <Spacer />
          <Text fontSize={12} color="cyan.100">
            NO.2
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
          Quick Start
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
      If you are already experienced with React and JavaScript tooling and want to dive right in and figure things out as you go, this is the quickest way to get started:
        </Text>
       {/* <Image source={start}  style={{ width: 'auto', height: 120 }}/> */}
        <Code bg="black">
           <Text p="1" fontSize={14} color="gray.500">
              # Install the command line tools
           </Text>
           <Code bg="gray.400">
            $ npm install --global expo-cli
           </Code>
           <Text mt="2" p="1" fontSize={14} color="gray.500">
              # Create a new project
           </Text>
           <Code bg="gray.400">
            $ expo init my-app
           </Code>
        </Code>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            
          </Text>
        </Flex>
      </Box>
    </Pressable>
      <Pressable
      onPress={() => {
        console.log("Hello world")
      }}
    >
      <Box p="5" rounded="8" bg="cyan.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            CREATE A NEW APP
          </Text>
          <Spacer />
          <Text fontSize={12} color="cyan.100">
            NO.3
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
          Initializing the project
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
        we should have Expo CLI installed on our development machine and the Expo Go app on an iOS or Android physical device or emulator
        </Text>
        <Code bg="black">
           <Text p="1" fontSize={14} color="gray.500">
              # Create a project named my-app. Select the "blank" template when promted
           </Text>
           <Code bg="gray.400">
            $ expo init my-app
           </Code>
           <Text mt="2" p="1" fontSize={14} color="gray.500">
              # Navigate to the project directory
           </Text>
           <Code bg="gray.400">
            $ cd my-app
           </Code>
        </Code>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            
          </Text>
        </Flex>
      </Box>

      
    </Pressable>

      <Pressable
      onPress={() => {
        console.log("Hello world")
      }}
    >
    <Box p="5" rounded="8" bg="cyan.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            STARTING DEVELOPMENT SERVER
          </Text>
          <Spacer />
          <Text fontSize={12} color="cyan.100">
            NO.4
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
          Run the project
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
       When you run expo start (or npm start), Expo CLI starts Metro Bundler, which is an HTTP server that compiles the JavaScript code of our app using Babel and serves it to the Expo app. It also pops up Expo Dev Tools, a graphical interface for Expo CLI.
        </Text>
       <Code bg="black">
         
           <Code bg="gray.400">
            $ expo start
           </Code>
          
        </Code>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            
          </Text>
        </Flex>
      </Box>
    </Pressable>
        <VStack textAlign="center" space={3} mb="7">
        <Text mt="2" fontSize={14} fontWeight="medium" color="gray.500">
           Join the Community
          </Text>
        <HStack space={3}>
            <Link
                _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
                }}
                href="#"
            >
                Forums
            </Link>
            <Link
                _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
                }}
                href="#"
            >
                Discord
            </Link>
            <Link
                _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
                }}
                href="#"
            >
               Twitter @expo
            </Link>
            <Link
                _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
                }}
                href="#"
            >
               Github
            </Link>

    </HStack>
      <Link
                _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
                }}
                href="https://docs.expo.dev/"
                alignSelf="center"
            >
               Official Website
            </Link>
    </VStack>
    </VStack>
    </ScrollView>
    </Center>
     </NativeBaseProvider>

  )
}

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
        colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
    />
  );
}

