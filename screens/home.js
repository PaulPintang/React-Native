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
  VStack,
  Link,
  ScrollView,
  Code
} from "native-base"
export function Example() {
  return (
      <ScrollView  showsVerticalScrollIndicator={false}>
    <VStack space={4} alignItems="center">

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
          <Text fontSize={10} color="cyan.100">
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
          <Text fontSize={10} color="cyan.100">
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
          <Text fontSize={10} color="cyan.100">
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
          <Text fontSize={10} color="cyan.100">
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
           {/* <Text p="1" fontSize={14} color="gray.500">
              # Create a project named my-app. Select the "blank" template when promted
           </Text> */}
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

        <Text mt="2" fontSize={14} fontWeight="medium" color="gray.500">
           Join the Community
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
                Join the Expo forums
            </Link>
    </VStack>
    </ScrollView>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}